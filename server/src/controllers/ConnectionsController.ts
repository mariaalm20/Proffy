import {Request, Response} from 'express'
import db from '../database/connection'

class ConnectionsController {
  async create(req: Request, res: Response){
    const {userId} = req.body

    await db('connections').insert({
      userId
    })

    return res.status(201).send()
  }

  async index(req: Request, res: Response){
    const totalConncetions = await db('connections').count('* as total')

    const {total} = totalConncetions[0]

    return res.json({total})
}
}

export default ConnectionsController