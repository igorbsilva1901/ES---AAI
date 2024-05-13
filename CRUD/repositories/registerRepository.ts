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

    async createRegister(data: Register): Promise<void> {
        const { username, problem, address, reference_point } = data;  
        const values = [username, problem, address, reference_point];      
        const query = `
        INSERT INTO registers (username, problem, address, reference_point)
        VALUES ($1, $2, $3, $4)
        `;        
        
        await db.query<Register>(query, values);
    }

    async deleteRegister(uuid: string): Promise<void> {      
        const query = `
        DELETE FROM registers
        WHERE uuid = $1
        `;        

        await db.query<Register>(query, [uuid]);
    }
}

export default new registerRepository();