import UserHelper from '../helpers/user';

class User {
  async login(req, res) {
    try {
      const { user, token } = await UserHelper.login(req);
      res.json({
        success: true,
        message: 'Enjoy your user with token!',
        user,
        token
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