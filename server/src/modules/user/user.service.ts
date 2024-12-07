import User, { IUser } from './user.model'

export class UserService {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData)
    return await user.save()
  }
}

export default new UserService()
