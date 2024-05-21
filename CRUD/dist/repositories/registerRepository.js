"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dg_1 = __importDefault(require("../database/dg"));
class registerRepository {
    async getRegisters() {
        const query = `
        SELECT uuid, username, problem, address, reference_point
        FROM registers
        `;
        const { rows } = await dg_1.default.query(query);
        return rows || [];
    }
    async createRegister(data) {
        const { username, problem, address, reference_point } = data;
        const values = [username, problem, address, reference_point];
        const query = `
        INSERT INTO registers (username, problem, address, reference_point)
        VALUES ($1, $2, $3, $4)
        `;
        await dg_1.default.query(query, values);
    }
    async updateRegister(uuid, updatedData) {
        const { username, problem, address, reference_point } = updatedData;
        const values = [username, problem, address, reference_point, uuid];
        const query = `
            UPDATE registers
            SET username = $1, problem = $2, address = $3, reference_point = $4
            WHERE uuid = $5
        `;
        await dg_1.default.query(query, values);
    }
    async getRegisterById(uuid) {
        const query = `
        SELECT uuid, username, problem, address, reference_point
        FROM registers
        WHERE uuid = $1
        `;
        const { rows } = await dg_1.default.query(query, [uuid]);
        return rows.length ? rows[0] : null;
    }
    async deleteRegister(uuid) {
        const query = `
        DELETE FROM registers
        WHERE uuid = $1
        `;
        await dg_1.default.query(query, [uuid]);
    }
}
exports.default = new registerRepository();
