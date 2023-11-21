import fastify from 'fastify'
import multipart from '@fastify/multipart'
import { userRoutes } from './routes/users'

const app = fastify()
app.register(multipart)
app.register(userRoutes)

app.
	listen({
		port: 3333,
	}).then(() => {
		console.log('🚀 server running on http://localhost:3333')
	})