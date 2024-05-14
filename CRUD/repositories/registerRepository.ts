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
    
    async updateRegister(uuid: string, updatedData: Partial<Register>): Promise<void> {
        const { username, problem, address, reference_point } = updatedData;
        const values = [username, problem, address, reference_point, uuid];
        const query = `
            UPDATE registers
            SET username = $1, problem = $2, address = $3, reference_point = $4
            WHERE uuid = $5
        `;

        await db.query<Register>(query, values);
    }

    async getRegisterById(uuid: string): Promise<Register | null> {
        const query = `
        SELECT uuid, username, problem, address, reference_point
        FROM registers
        WHERE uuid = $1
        `;

        const { rows } = await db.query<Register>(query, [uuid]);
        return rows.length ? rows[0] : null;
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