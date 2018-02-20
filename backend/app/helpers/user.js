import User from '../models/user';
import generateToken from './generateToken';

class UserHelper {
  login(req) {
    return new Promise((resolve, reject) => {
      User.findOne({
        name: req.body.name
      }, (err, user) => {

        if (err) reject(err);

        if (!user) {
          reject('Authentication failed. User not found.');
        } else if (user) {

          // check if password matches
          if (user.password != req.body.password) {
            reject('Authentication failed. Wrong password.');
          } else {

            // if user is found and password is right
            // create a token with only our given payload
            // we don't want to pass in the entire user since that has the password
            const payload = {
              id: user._id,
              admin: user.admin
            };
            const token = generateToken(payload);
            resolve({ user, token });
          }
        }
      });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) =>
      User.find({}, (err, users) => {

        if (err) reject(err);

        resolve(users);
      })
    );
  }

}

export default new UserHelper();