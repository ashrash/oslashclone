import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import { Routes } from '../interfaces/routes.interface';
import validationMiddleware from '../middleware/validation.middleware';
import { verifyToken } from '../middleware/jwt.middleware';

import { CreateUserDto } from '../dtos/users.dto';

class UsersRoute implements Routes {
  public route = '/user';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.route}/:email`, verifyToken, this.usersController.getUserByEmail);
    this.router.post(`${this.route}`,  validationMiddleware(CreateUserDto, 'body'),  this.usersController.createUser);
  }
}

export default UsersRoute;