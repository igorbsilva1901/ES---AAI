import { Request, Response, Router } from "express";
import registerRepository from "../../repositories/registerRepository";

const routes = Router();

routes.post('/register', async (req: Request, res: Response) => {
    try {
        const { username, problem, address, reference_point } = req.body;
        await registerRepository.createRegister({ username, problem, address, reference_point });
        res.status(200).json({ Comment: 'Registro criado!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar um novo registro' });
    }
});

routes.get('/register', async (req: Request, res: Response) => {
    const registers = await registerRepository.getRegisters();
    res.status(200).json(registers);
});

routes.put('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {

});

routes.delete('/register/:uuid', async (req: Request<{uuid: string}>, res: Response) => {
    try {
        const { uuid } = req.params;
        await registerRepository.deleteRegister(uuid);
        res.status(200).json({ Comment: 'Registro deletado!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar registro' });
    }
});

export default routes;