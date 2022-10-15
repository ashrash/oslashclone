import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import { Routes } from '../interfaces/routes.interface';

class UsersRoute implements Routes {
  public route = '/user';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.route}/:email`, this.usersController.getUserByEmail);
  }
}

export default UsersRoute;