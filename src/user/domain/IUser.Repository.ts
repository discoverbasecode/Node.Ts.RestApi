import { IUserModel } from './IUser.Model';

export interface IUserRepository {
        findUserById(uuid: string): Promise<IUserModel | null>;
        registerUser(user: IUserModel): Promise<IUserModel | null>;
        listUser(): Promise<IUserModel[] | null>;
}
