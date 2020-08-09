import express from 'express'

import ClassesController from './controllers/ClassController'
import ConnectionsController from './controllers/ConnectionsController'

const routes = express.Router()

const classes = new ClassesController()
const connections = new ConnectionsController()

routes.post('/classes', classes.create)
routes.get('/classes', classes.index)

routes.post('/connections', connections.create)
routes.get('/connections', connections.index)

export default routes