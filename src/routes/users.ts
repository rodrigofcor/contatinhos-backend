import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
import { z } from 'zod'
import { isBiggerThanEighteen } from '../helpers/isBiggerThanEighteen'
import * as fs from 'fs'
import pump from 'pump'
import { v4 as uuidv4 } from 'uuid'

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

		// const data = bodySchema.parse(JSON.parse(request.body.userData.value))

		// const existingUser = await prisma.user.findUnique({
		// 	where: { email: data.email },
		// })

		// if (existingUser) {
		// 	return reply.code(400).send({message: 'Este email já está em uso.' })
		// }

		// if (!isBiggerThanEighteen(new Date(data.birthdate))) {
		// 	return reply.code(400).send({message: 'É necessário possuir pelo menos 18 anos.' })
		// }

		// const user = await prisma.user.create({
		// 	data: {
		// 		name: data.name,
		// 		email: data.email,
		// 		gender: data.gender,
		// 		birthdate: data.birthdate,
		// 		collegeId: data.collegeId,
		// 		courseId: data.courseId,
		// 		professionId: data.professionId,
		// 		password: data.password,
		// 		description: data.description,
		// 	},
		// })

		// data.interestIds.map(async(id) => {
		// 	await prisma.userInterest.create({
		// 		data: {
		// 			userId: user.id,
		// 			interestId: parseInt(id)
		// 		}
		// 	})
		// })

		const files = await request.files()
		console.log('files', files)

		for await (const part of files) {
			console.log('part')
			console.log(part)
			const extension = part.filename.slice(part.filename.lastIndexOf('.') + 1).toLocaleLowerCase()
			const fileName = `${uuidv4()}.${extension}`
			console.log('fileName', fileName)
			const storedFile = fs.createWriteStream(`./storage/${fileName}}`)
			await pump(part.file, storedFile)
		}


		// return reply.code(201).send(user)
	})

	app.put('/users/:id', async () => {

	})

	app.delete('/users/:id', async () => {

	})
}