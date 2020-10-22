import { Router } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import authMiddleware from './middlewares/authModdleware';

const UserRouter = Router();

const userController = new UserController();
const authController = new AuthController();

UserRouter.post('/users', userController.create);
UserRouter.post('/auth', authController.authenticate);

UserRouter.get('/auth', authMiddleware, userController.index);

export default UserRouter;
