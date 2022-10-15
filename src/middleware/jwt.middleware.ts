import jwt from 'jsonwebtoken';
import { SECRET } from '../config';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)
  
  jwt.verify(token, SECRET as string, (err: any, user: any) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
};


export {
  verifyToken,
}