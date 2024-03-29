import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { isBiggerThanEighteen } from '../helpers/isBiggerThanEighteen'
import * as fs from 'fs'
import pump from 'pump'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { IncomingHttpHeaders } from 'http'

const getLoggedUser = async (header: IncomingHttpHeaders) => {
	const { authorization } = header

	if (!authorization) {
		return
	}

	const token = authorization.split(' ')[1]

	const { id } = jwt.verify(token, process.env.JWT_PASS)

	const user = await prisma.user.findUnique({
		where: { id },
	})

	if (!user) {
		return
	}

	return user
}

export async function userRoutes(app: FastifyInstance) {
	app.get('/users', async (_, reply) => {
		const users = await prisma.user.findMany()
		return reply.send(users)
	})

	app.get('/users/:id', async () => {

	})

	app.post('/users', async (request, reply) => {
		const bodySchema = z.object({
			name: z.string().min(3),
			email: z.string().email(),
			gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
			birthdate: z.string().datetime(),
			collegeId: z.optional(z.string()),
			courseId: z.optional(z.string()),
			professionId: z.optional(z.string()),
			description: z.optional(z.string()),
			interestIds: z.array(z.string()),
			password: z.string().min(6)
		})

		const data = bodySchema.parse(request.body)

		const existingUser = await prisma.user.findUnique({
			where: { email: data.email },
		})

		if(existingUser) {
			return reply.code(400).send({ message: 'Este email já está em uso.' })
		}

		if(!isBiggerThanEighteen(new Date(data.birthdate))) {
			return reply.code(400).send({ message: 'É necessário possuir pelo menos 18 anos.' })
		}

		const user = await prisma.user.create({
			data: {
				name: data.name,
				email: data.email,
				gender: data.gender,
				birthdate: data.birthdate,
				collegeId: data.collegeId !== '' ? data.collegeId : null,
				courseId: data.courseId !== '' ? data.courseId : null,
				professionId: data.professionId !== '' ? data.professionId : null,
				password: await bcrypt.hash(data.password, 10),
				description: data.description,
			},
		})

		data.interestIds.map(async(id) => {
			await prisma.userInterest.create({
				data: {
					userId: user.id,
					interestId: parseInt(id)
				}
			})
		})

		return reply.code(201).send(user.id)
	})

	app.put('/users/:id/images', async (request) => {
		const paramSchema = z.object({
			id: z.string().uuid()
		})

		const { id } = paramSchema.parse(request.params)

		const files = request.files()

		let index = 1
		for await (const part of files) {
			const extension = part.filename.slice(part.filename.lastIndexOf('.') + 1).toLocaleLowerCase()
			const fileName = `${uuidv4()}.${extension}`
			const storedFile = fs.createWriteStream(`./storage/${fileName}`)
			await pump(part.file, storedFile)

			const photos = await prisma.photos.findMany({
				where: {
					orderNumber: index,
					userId: id,
				},
			})
			const existingPhoto = photos.length > 0

			if(existingPhoto) {
				await prisma.photos.updateMany({
					where: {
						orderNumber: index,
						userId: id,
					},
					data: {
						photoPath: fileName,
					},
				})
			} else {
				await prisma.photos.create({
					data: {
						photoPath: fileName,
						orderNumber: index,
						userId: id,
					},
				})
			}

			index++
		}
	})

	app.post('/login', async (request, reply) => {
		try {
			const { email, password } = request.body as { email: string; password: string }

			const user = await prisma.user.findUnique({
				where: { email },
			})

			if(!user) {
				return reply.code(400).send({ message: 'E-mail inválido.' })
			}

			const passwordMatch = await bcrypt.compare(password, user.password)

			if (!passwordMatch) {
				return reply.code(401).send({ message: 'E-mail ou senha inválidos.' })
			}

			const token = jwt.sign({ id: user.id }, process.env.JWT_PASS, { expiresIn: '1d'})

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { password: _, ...userLogin } = user

			return reply.send({
				user: userLogin,
				token
			})
		} catch (error) {
			reply.code(500).send({ error: 'Internal Server Error' })
		}
	})

	app.put('/users/:id', async (request, reply) => {
		const user = await getLoggedUser(request.headers)

		if (!user) {
			return reply.code(401).send({ message: 'Token inválido ou não informado.' })
		}

		const { id } = request.params as { id: string }

		if (!id) {
			return reply.code(401).send({ message: 'Usuário não informado.' })
		}

		if (id !== user.id) {
			return reply.code(403).send({ message: 'Não é permitido editar outro usuário.' })
		}

		return reply.send(user)
	})

	app.delete('/users/:id', async () => {

	})
}