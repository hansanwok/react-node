import User from '../models/user';
import { generateToken, formatUser, hash, checkPassword } from './security';

class UserHelper {

  signup(req) {
    return new Promise((resolve, reject) => {
      const { name, password } = req.body;

      hash(password).then((hashPass) => {
        const user = new User({
          name,
          password: hashPass,
          admin: true
        });

        user.save((err) => {
          if (err) reject(err);
          resolve({ success: true });
        });

      });
    });
  }

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
          checkPassword(req.body.password, user.password).then((match) => {
            if (match === false) {
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

              /* Non-configurable properties cannot be re-configured or deleted. */
              const respondUser = formatUser(user, token);

              resolve(respondUser);
            }
          });
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