import { Router, Response, Request} from 'express';

const testRoute = Router();

testRoute.get('/helloworld', (req: Request, res: Response) => {
    res.status(200).end('<h1>Hello World!</h1>');
});

export default testRoute;