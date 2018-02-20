import UserHelper from '../helpers/user';

class User {

  async signup(req, res) {
    try {
      res.json(await UserHelper.signup(req));
    }
    catch (err) {
      res.json({ success: false, err });
    }
  }

  async login(req, res) {
    try {
      const user = await UserHelper.login(req);
      res.json({
        success: true,
        message: 'Enjoy your user with token!',
        user
      });
    }
    catch (err) {
      res.json({ success: false, err });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await UserHelper.getUsers();
      res.json({
        success: true,
        users
      });
    }
    catch (err) {
      res.json({ success: false, err });
    }
  }

  logout() {
    //destroy jwt
  }
}

export default new User();