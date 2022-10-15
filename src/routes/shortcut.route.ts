import { Router } from 'express';
import ShortcutController from '../controllers/shortcut.controller';
import { Routes } from '../interfaces/routes.interface';
import validationMiddleware from '../middleware/validation.middleware';
import { verifyToken } from '../middleware/jwt.middleware';

import { CreateUserDto, LoginUserDto } from '../dtos/users.dto';

class ShortcutRoute implements Routes {
  public route = '/shortcuts';
  public router = Router();
  public shortcutController = new ShortcutController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.route}/:email`, verifyToken, this.shortcutController.getShortcutsByEmail);
  }
}

export default ShortcutRoute;