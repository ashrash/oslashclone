import { CreatedUserData, UserData } from '../interfaces/user.interface';
import { HttpException } from '../utils/exception';
import Db from '../models';
import * as R from 'ramda';
import { logger } from '../utils/logger';

import { nullCheck } from '../utils/ramda';
import { generateAccessToken } from '../utils/jwt';
import e from 'express';

class UserService {

  public async findUserDataByEmail(email: string): Promise<UserData> {
    if (nullCheck(email)) throw new HttpException(400, "email is undefined");

    const userResult: UserData = await Db.User.findByPk(email);
    if (!userResult) throw new HttpException(204, '');

    return userResult;
  }


  public async createUser(userData: UserData): Promise<CreatedUserData | null> {
    const { email } = userData;
    try {
      const userResult: UserData | null = await this.findUserDataByEmail(email);
      if (userResult) throw new HttpException(400, `Email id: ${email} already exists`);
    } catch (e) {
      logger.info('User does not exists, proceeding to create new user');
    }

    const { password, name } = userData;

    try {
      const token: string = generateAccessToken({ email });
      const createdUser =await Db.User.create({
        email,
        name,
        password,
        created_dttm: new Date(),
      }, { fields: ['email', 'name', 'password', 'created_dttm'] });
  
      return {
        token,
        createdUser,
      };
    } catch(e) {
      logger.error(`error occurred ${e}`);
    }
    
  }

  public async login(userData: UserData): Promise<string | null> {
    const { email } = userData;
    try {
        const userResult: UserData | null = await this.findUserDataByEmail(email);
        if (!userResult) throw new HttpException(400, `Email id: ${email} does not exists`);
        const { password } = userData;
        if(R.equals(password, R.prop('password', userResult))) {
          const token: string = generateAccessToken({ email });
          return token;
        } else {
          throw new HttpException(400, `Email id: ${password} is incorrect`);
        }
    } catch (e) {
      logger.info('Unusual error occured please try again later');
    }
  }

  // public async logout(userData: UserData): Promise<string | null> {
  // }

}

export default UserService;