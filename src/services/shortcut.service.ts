import { UserShortcut } from '../interfaces/user.interface';
import { HttpException } from '../utils/exception';
import Db from '../models';
import { nullCheck } from '../utils/ramda';

class ShortcutService {

  public async findUserDataByEmail(email: string): Promise<UserShortcut| null> {
    if (nullCheck(email)) throw new HttpException(400, "email is undefined");

    const resultData: UserShortcut = await Db.User.findAll({
        include: {
          model: Db.Shortcut,
          required: true,
        },
        where: {
            email,
        }
      });

    return resultData;
  }


}

export default ShortcutService;