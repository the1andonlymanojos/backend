import 'dotenv/config';
import {createPool} from "mysql2/promise";


const pool = await createPool(process.env.DATABASE_URL);
console.log('Connected to database');
export default pool;