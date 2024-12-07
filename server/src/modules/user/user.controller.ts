import { Request, Response } from 'express'
import userService from './user.service'

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error: 'Failed to create user', message: error })
    }
  }
}

export default new UserController()
