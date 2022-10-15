import { UserShortcut } from '../interfaces/user.interface';
import { HttpException } from '../utils/exception';
import * as R from 'ramda';
import * as whatwg from 'whatwg-url';
import Db from '../models';
import { nullCheck } from '../utils/ramda';
import { ShortcutData } from '@/interfaces/shortcuts.interface';
import { logger } from '../utils/logger';

class ShortcutService {

  public async findShortcutDataByEmail(email: string): Promise<UserShortcut| null> {
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
    const userShortcuts: UserShortcut = R.head(resultData);
    if(!nullCheck(userShortcuts)) {
      return userShortcuts;
    }
    throw new HttpException(204, "Shortcuts not found");
  }

  public async createShortcut(email: string, shortcut: ShortcutData): Promise<UserShortcut| null> {
    if (nullCheck(email)) throw new HttpException(400, "email is undefined");
    try {
      const { short_link, description, url } = shortcut;
      const validateResult = whatwg.parseURL(url);
      if(R.equals(validateResult, 'failure')) {
        throw new HttpException(400, "invalid url, please follow the what-wg url standard")
      }
      const createdShortcut = await Db.Shortcut.create({
        short_link, description, url, email_id: email,
        created_dttm: new Date(),
      }, { fields: ['short_link', 'description', 'url', 'email_id', 'created_dttm'] });
  
      return createdShortcut;
    } catch(e){
      logger.error(`Something went wrong ${e}`);
      throw new HttpException(500, `Something went wrong ${e}`);
    }
  }


}

export default ShortcutService;