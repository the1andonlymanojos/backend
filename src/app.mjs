import 'dotenv/config';
import pool from "./db.mjs";




console.log('Hello World');
const connection = await pool.getConnection();
const res = await connection.execute('SELECT * FROM Persons');
const rows = res[0];
console.log(rows);
console.log('Connected to database')


console.log(process.env.SECRET_KEY)