import { CreatedUserData, UserData } from '../interfaces/user.interface';
import { HttpException } from '../utils/exception';
import Db from '../models';
import * as R from 'ramda';
import { logger } from '../utils/logger';

import { nullCheck } from '../utils/ramda';
import { generateAccessToken } from '../utils/jwt';

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

}

export default UserService;