import { SearchShortcut, ShortcutData } from '@/interfaces/shortcuts.interface';
import { NextFunction, Request, Response } from 'express';
import { CreatedUserData, UserData } from '../interfaces/user.interface';
import shortcutService from '../services/shortcut.service';

class ShortcutController {
  public shortcutService = new shortcutService();

  public getShortcutsByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: string = req.params.email;
      const findOneUserData: UserData = await this.shortcutService.findShortcutDataByEmail(email);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createShortcut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: string = req.params.email;
      const shortcut: ShortcutData  = req.body;
      const findOneUserData: UserData = await this.shortcutService.createShortcut(email, shortcut);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public searchShortcut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shortcut: SearchShortcut  = req.body;
      const findOneUserData: UserData = await this.shortcutService.searchShortcut(shortcut);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public deleteShortcut = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const shortLink: string  = req.params.shortLink;
      const email: string  = req.params.email;
      const findOneUserData: UserData = await this.shortcutService.deleteShortcut(email, shortLink);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

}

export default ShortcutController;