import fastify from 'fastify'
import multipart from '@fastify/multipart'
import fastifyCors from '@fastify/cors'
import { userRoutes } from './routes/users'
import { collegeRoutes } from './routes/colleges'
import { interestRoutes } from './routes/interests'
import { coursesRoutes } from './routes/courses'

const app = fastify()
app.register(multipart)
app.register(fastifyCors, {
	origin: 'http://localhost:3000',
})

app.register(userRoutes)
app.register(collegeRoutes)
app.register(coursesRoutes)
app.register(interestRoutes)

app.
	listen({
		port: 3333,
	}).then(() => {
		console.log('🚀 Server running on http://localhost:3333')
	})