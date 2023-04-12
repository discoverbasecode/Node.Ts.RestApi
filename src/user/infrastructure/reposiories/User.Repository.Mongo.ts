import { IUserModel } from '../../domain/IUser.Model';
import { IUserRepository } from '../../domain/IUser.Repository';
import UserModel from '../model/User.Schema';

export class UserRepositoryMongo implements IUserRepository {
        async findUserById(uuid: string): Promise<any> {
                const userId = await UserModel.findOne({ uuid });
                return userId;
        }
        async registerUser(user: IUserModel): Promise<any> {
                const userAdd = await UserModel.create(UserModel);
                return userAdd;
        }
        async listUser(): Promise<any> {
                const users = await UserModel.find();
                return users;
        }
}
