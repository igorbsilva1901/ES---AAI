import { Request, Response, Router } from "express";

const routes = Router();

routes.post('/register', async (req: Request, res: Response) => {

});

routes.get('/register', async (res: Response) => {

});

routes.put('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {

});

routes.delete('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {

});

export default routes;