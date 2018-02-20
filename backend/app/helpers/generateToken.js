import jwt from 'jsonwebtoken';
import config from '../config';

const generateToken = (payload) => {
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 10), // 10 days
    data: JSON.stringify(payload)
  }, config.secret);
  return token;
}

export default generateToken;