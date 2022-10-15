import { UserData } from '../interfaces/user.interface';
import { HttpException } from '../utils/exception';
import Db from '../models';
import * as R from 'ramda';
import { nullCheck } from '../utils/ramda';

class UserService {

  public async findUserDataByEmail(email: string): Promise<UserData> {
    if (nullCheck(email)) throw new HttpException(400, "email is undefined");

    const userResult: UserData = await Db.User.findByPk(email);
    if (!userResult) throw new HttpException(204, '');

    return userResult;
  }

}

export default UserService;