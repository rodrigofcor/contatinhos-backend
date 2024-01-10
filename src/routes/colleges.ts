import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function collegeRoutes(app: FastifyInstance) {
	app.get('/colleges', async (_, reply) => {
		const colleges = await prisma.college.findMany({
			orderBy: {
				fullName: 'asc',
			},
		})
		return reply.send(colleges)
	})
}