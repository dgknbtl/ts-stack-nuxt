import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
  username: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Password hashing middleware
UserSchema.pre('save', async function (next) {
  const user = this as IUser

  if (!user.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    next()
  } catch (error) {
    next(error instanceof Error ? error : new Error('Unknown error during password hashing'))
  }
})

export default mongoose.model<IUser>('User', UserSchema)
