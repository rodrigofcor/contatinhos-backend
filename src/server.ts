import fastify from 'fastify'
import multipart from '@fastify/multipart'
import fastifyCors from '@fastify/cors'
import { userRoutes } from './routes/users'
import { collegeRoutes } from './routes/colleges'
import { coursesRoutes } from './routes/courses'
import { professionsRoutes } from './routes/professions'
import { interestRoutes } from './routes/interests'

const app = fastify({
	logger: true
})

app.register(multipart)
app.register(fastifyCors, {
	origin: 'http://localhost:3000',
})

app.register(userRoutes)
app.register(collegeRoutes)
app.register(coursesRoutes)
app.register(professionsRoutes)
app.register(interestRoutes)

app.
	listen({
		port: 3333,
	}).then(() => {
		console.log('🚀 Server running on http://localhost:3333')
	})