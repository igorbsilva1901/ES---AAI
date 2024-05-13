import { Request, Response, Router } from "express";
import registerRepository from "../../repositories/registerRepository";

const routes = Router();

routes.post('/register', async (req: Request, res: Response) => {

});

routes.get('/register', async (req: Request, res: Response) => {
    const registers = await registerRepository.getRegisters();
    res.status(200).json(registers);
});

routes.put('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {

});

routes.delete('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {

});

export default routes;