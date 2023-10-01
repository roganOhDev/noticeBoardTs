import {Request, Response, Router} from 'express';

export const indexRouter: Router = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    const title = "Hello Index!"
    res.render('index', {title});
});
