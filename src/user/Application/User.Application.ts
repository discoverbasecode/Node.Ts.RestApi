import { IUserRepository } from '../domain/IUser.Repository';
import { IUserModel } from '../domain/IUser.Model';
import { UserDto } from '../domain/User.Dto';

export class UserApplication implements IUserRepository {
        constructor(private readonly userRepository: IUserRepository) {}

        findUserById(uuid: string): Promise<IUserModel> {
                const user = this.userRepository.findUserById(uuid);
                return Promise.resolve(user);
        }

        registerUser(user: IUserModel): Promise<IUserModel> {
                const userDto = new UserDto(user);
                const userCreate = this.userRepository.registerUser(user);
                return Promise.resolve(userCreate);
        }

        listUser(): Promise<IUserModel[]> {
                const users = this.userRepository.listUser();
                return Promise.resolve(users);
        }
}
