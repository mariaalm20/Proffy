import knex from 'knex'
import {Request, Response} from 'express'
import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHour'


interface ScheduleItem {
   week_day: number,
   from: string,
   to: string
}
class Class {
  async create(req: Request, res: Response){
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body

    const trx = await db.transaction()

  try{
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio
    })

    const userId = insertedUsersIds[0]

    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      userId
    })

    const classId = insertedClassesIds[0]

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        classId,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }
    })

    await trx('class_schedule').insert(classSchedule)

    await trx.commit()

    return res.status(201).json({message: 'OK'})
  } catch(err){
    await trx.rollback()

    console.log(err)
    return res.status(400).json({
      error: 'Unespected error while creating new class'
    })
  }
  }

  async index(req: Request, res: Response){
    const filters = req.query

    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string

    if(!filters.subject || !filters.week_day || !filters.time){
      return res.status(400).json({
        error: 'Missing filters'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)
    
    const classes = await db('classes')
       .whereExists(function(){
         this.select('class_schedule.*')
           .from('class_schedule')
           .whereRaw('`class_schedule`.`classId` = `classes`.`id`')
           .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
           .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
           .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])

          })
       .where('classes.subject', '=',  subject)
       .join('users', 'classes.userId', '=', 'users.id')
       .select(["classes.*", "users.*"])

    return res.json(classes)
  }
}

export default Class