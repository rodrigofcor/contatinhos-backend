import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function interestRoutes(app: FastifyInstance) {
	app.get('/interests', async (_, reply) => {
		const interests = await prisma.interest.findMany({
			orderBy: {
				name: 'asc',
			},
		})
		return reply.send(interests)
	})
}