import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nodejs-postgre-api",
    password: "Obad5775011",
    port: 5432,
});

pool.on('connect', () => {
    console.log('Connected to nodejs-postgre-api database');
});

export default pool;