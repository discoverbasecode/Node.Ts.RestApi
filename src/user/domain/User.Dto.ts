import { v4 as uuid } from 'uuid';
import { IUserModel } from './IUser.Model';

export class UserDto implements IUserModel {
        uuid: string;
        fullName: string;
        email: string;
        phoneNumber: string;
        password: string;
        isActive: boolean;

        constructor({ fullName, email, phoneNumber, password }: { fullName: string; email: string; phoneNumber: string; password: string }) {
                this.uuid = uuid();
                this.fullName = fullName;
                this.email = email;
                this.phoneNumber = phoneNumber;
                this.password = password;
                this.isActive = false;
        }
}
