import { Sequelize, DataTypes } from 'sequelize';
import User from './user.model';
import { DB_HOST, DB_PASSWORD, DB_USERNAME } from '../config';

const sequelize = new Sequelize(`mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/slash`);

const databaseObj = {
    Sequelize,
    sequelize,
    User : User(sequelize, Sequelize, DataTypes),
};

export default databaseObj;