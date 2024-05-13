import db from "../database/dg";
import Register from "../model/registerModel";

class registerRepository {
    async getRegisters(): Promise<Register[]> {
        const query = `
        SELECT uuid, username, problem, address, reference_point
        FROM registers
        `

        const {rows} = await db.query<Register>(query);
        return rows || [];
    }
}

export default new registerRepository();