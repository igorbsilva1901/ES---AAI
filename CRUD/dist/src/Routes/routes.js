"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerRepository_1 = __importDefault(require("../../repositories/registerRepository"));
const routes = (0, express_1.Router)();
routes.post('/register', async (req, res) => {
    try {
        const { username, problem, address, reference_point } = req.body;
        await registerRepository_1.default.createRegister({ username, problem, address, reference_point });
        res.status(200).json({ Comment: 'Registro criado!' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar um novo registro' });
    }
});
routes.get('/register', async (req, res) => {
    const registers = await registerRepository_1.default.getRegisters();
    res.status(200).json(registers);
});
routes.put('/register/:uuid', async (req, res) => {
    try {
        const { uuid } = req.params;
        const { username, problem, address, reference_point } = req.body;
        await registerRepository_1.default.updateRegister(uuid, { username, problem, address, reference_point });
        const updatedRegister = await registerRepository_1.default.getRegisterById(uuid);
        if (updatedRegister === null) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.status(200).json({ Comment: 'Registro atualizado!' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar registro' });
    }
});
routes.delete('/register/:uuid', async (req, res) => {
    try {
        const { uuid } = req.params;
        await registerRepository_1.default.deleteRegister(uuid);
        res.status(200).json({ Comment: 'Registro deletado!' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar registro' });
    }
});
exports.default = routes;
