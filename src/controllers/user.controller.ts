import { NextFunction, Request, Response } from 'express';
import {  CreatedUserData, UserData } from '../interfaces/user.interface';
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

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserData = req.body;
      const createUserData: CreatedUserData | null = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;