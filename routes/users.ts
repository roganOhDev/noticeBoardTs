import {Router, NextFunction, Request, Response} from 'express';

export const usersRouter: Router = Router();

usersRouter.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('respond with a resource');
});
