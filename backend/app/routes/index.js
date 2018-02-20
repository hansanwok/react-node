import { Router } from 'express';
import authenticate from './middleware';
import User from '../controllers/user';

export default (app) => {
  const unauthRoute = Router();
  const authRoute = Router();

  /* UNAUTHENTICATE ROUTER  */
  unauthRoute.get('/test', (req, res) => res.send({ success: true, data: 'I am text from server' }));

  unauthRoute.post('/signup', User.signup);
  unauthRoute.post('/login', User.login);


  /* AUTHENTICATE ROUTER  */
  authRoute.get('/users', User.getUsers)

  // apply the routes to our application with the prefix /api
  app.use('/api', unauthRoute);
  app.use('/api', authenticate, authRoute);

  return app;
}


