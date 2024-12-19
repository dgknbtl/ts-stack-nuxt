import User, { IUser } from './user.model'

export class UserService {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData)
    return await user.save()
  }

  async getUsers(): Promise<IUser[]> {
    return await User.find().select('-password')
  }
}

export default new UserService()
