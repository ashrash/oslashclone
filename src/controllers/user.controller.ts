import { nullCheck } from '../utils/ramda';
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

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserData = req.body;
      const token: string | null = await this.userService.login(userData);
      if(!nullCheck(token)) {
        res.status(200).json({ data: token, message: 'Login Successful', isAuthenticated: true });
      }
    } catch (error) {
      next(error);
    }
  };


  // public logout = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const userData: UserData = req.body;
  //     const token: string | null = await this.userService.logout(userData);
  //     if(!nullCheck(token)) {
  //       res.status(200).json({ data: token, message: 'logout Successful', isAuthenticated: true });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // };
}

export default UsersController;