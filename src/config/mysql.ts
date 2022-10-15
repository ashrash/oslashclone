import { Sequelize } from 'sequelize';
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from './index';

const sequelize = new Sequelize(`mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/slash`);

export default sequelize;