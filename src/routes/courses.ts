import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function coursesRoutes(app: FastifyInstance) {
	app.get('/courses', async (_, reply) => {
		const courses = await prisma.course.findMany({
			orderBy: {
				name: 'asc',
			},
		})
		return reply.send(courses)
	})
}