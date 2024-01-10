import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function professionsRoutes(app: FastifyInstance) {
	app.get('/professions', async (_, reply) => {
		const professions = await prisma.profession.findMany({
			orderBy: {
				name: 'asc',
			},
		})
		return reply.send(professions)
	})
}