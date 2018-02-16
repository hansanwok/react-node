import { Router } from 'express';

export default (app) => {
  const unauthRoute = Router();

  unauthRoute.get('/test', (req, res) => res.send({ success: true, data: 'I am text from server'}));

  app.use('/api', unauthRoute);

  return app;
}


