import { SearchShortcutDto } from '../dtos/shortcut.dto';
import validationMiddleware from '../middleware/validation.middleware';
import { Router } from 'express';
import ShortcutController from '../controllers/shortcut.controller';
import { Routes } from '../interfaces/routes.interface';
import { verifyToken } from '../middleware/jwt.middleware';

class ShortcutRoute implements Routes {
  public route = '/shortcuts';
  public router = Router();
  public shortcutController = new ShortcutController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.route}/:email`, verifyToken, this.shortcutController.getShortcutsByEmail);
    this.router.post(`${this.route}/search/`, validationMiddleware(SearchShortcutDto, 'body'), verifyToken,
    this.shortcutController.searchShortcut);
    this.router.post(`${this.route}/create/:email`, verifyToken, this.shortcutController.createShortcut);
    
  }
}

export default ShortcutRoute;