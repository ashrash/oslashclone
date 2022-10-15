import { NextFunction, Request, Response } from 'express';
import {  UserData } from '../interfaces/user.interface';
import userService from '../services/user.service';

class UsersController {
  public userService = new userService();

  public getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email: string = req.params.email;
      const findOneUserData: UserData = await this.userService.findUserDataByEmail(email);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;