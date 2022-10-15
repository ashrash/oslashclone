import { ShortcutData } from '@/interfaces/shortcuts.interface';
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

}

export default ShortcutController;