import pool from './connection.js';

// run "node src/DB/createUserTable.js" to create users table

const createUsersTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log("users table is created (if it didn't exist).");
    } catch (err) {
        console.error("Error creating users table:", err);
    }
};

createUsersTable();