import { Request, Response } from 'express';
import { UserApplication } from '../../Application/User.Application';

export class UserController {
        constructor(private userApplication: UserApplication) {
                this.insertUserController = this.insertUserController.bind(this);
                this.getUserController = this.getUserController.bind(this);
        }

        public async insertUserController({ body }: Request, res: Response) {
                const user = await this.userApplication.registerUser(body);
                res.send({ user });
        }

        public async getUserController({ query }: Request, res: Response) {
                const { uuid = '' } = query;
                const user = await this.userApplication.findUserById(`${uuid}`);
                res.send({ user });
        }
}
