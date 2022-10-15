import jwt from 'jsonwebtoken';
import { SECRET } from '../config';


const generateAccessToken = (username) => {
    console.log(SECRET);
    return jwt.sign(username, SECRET, { expiresIn: '18000s' });
}

export {
    generateAccessToken,
}