import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { isBiggerThanEighteen } from '../helpers/isBiggerThanEighteen'
import * as fs from 'fs'
import pump from 'pump'

export async function userRoutes(app: FastifyInstance) {
	app.get('/users', async (_, reply) => {
		const users = await prisma.user.findMany()
		return reply.send({ data: users })
	})

	app.get('/users/:id', async () => {

	})

	app.post('/users', async (request, reply) => {
		const bodySchema = z.object({
			name: z.string().min(3),
			email: z.string().email(),
			birthdate: z.string().datetime(),
			description: z.optional(z.string()),
			password: z.string().min(6)
		})

		const { name, email, birthdate, description, password } = bodySchema.parse(request.body)

		const existingUser = await prisma.user.findUnique({
			where: { email },
		})

		if (existingUser) {
			return reply.code(400).send({message: 'Este email já está em uso.' })
		}

		if (!isBiggerThanEighteen(new Date(birthdate))) {
			return reply.code(400).send({message: 'É necessário possuir pelo menos 18 anos.' })
		}

		const user = await prisma.user.create({ data:{ name, email, birthdate, description, password }})

		const files = await request.files()

		for await (const part of files) {
			const storedFile = fs.createWriteStream(`./storage/${part.filename}`)
			await pump(part.file, storedFile)
		}

		return reply.code(201).send({data: user })
	})

	app.put('/users/:id', async () => {

	})

	app.delete('/users/:id', async () => {

	})
}