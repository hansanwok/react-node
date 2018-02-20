import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config';

export const generateToken = (payload) => {
  const token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 10), // 10 days
    data: JSON.stringify(payload)
  }, config.secret);
  return token;
}

export const formatUser = (user, token = null) => {
  user = user.toObject();
  delete user.password;
  if (token !== null) user.token = token;
  return user;
}

export const hash = (password) => {
  const saltRounds = 10;
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, saltRounds).then((hashPass) => resolve(hashPass))
  );
}

export const checkPassword = (password, hashPass) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(password, hashPass).then((match) => resolve(match))
  );
}