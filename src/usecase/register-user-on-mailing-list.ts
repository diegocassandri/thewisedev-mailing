import { User } from '../entities/user'
import { UserRepository } from './port/user-repository'

export class RegisterUserOnMailingList {
  constructor (public user: User, public userRepository: UserRepository) {}

  registerUserOnMailingList (user: User): boolean {
    return this.userRepository.add(user)
  }
}