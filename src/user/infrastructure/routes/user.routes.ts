import { Router } from 'express';
import { UserApplication } from '../../Application/User.Application';
import { UserController } from '../controller/user.Controller';
import { UserRepositoryMySQL } from '../reposiories/User.Repository.MySql';
import { UserRepositoryMongo } from '../reposiories/User.Repository.Mongo';

const route = Router();
const userRepositoryMongo = new UserRepositoryMongo();
const userApplication = new UserApplication(userRepositoryMongo);
const userController = new UserController(userApplication);

route.post(`/user`, userController.insertUserController);
route.get(`/user`, userController.getUserController);

export default route;
