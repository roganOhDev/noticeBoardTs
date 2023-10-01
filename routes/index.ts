import {Request, Response, Router} from 'express';

export const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
