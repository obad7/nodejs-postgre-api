import pool from "../DB/connection.js";
import { hash } from "../Utils/hashing.js";

export const createUser = async (name, email, password) => {

    const hashedPassword = hash({ plainText: password });

    const result = await pool.query(
        `INSERT INTO users (name, email, password)
         VALUES ($1, $2, $3) RETURNING *`,
        [name, email, hashedPassword]
    );
    return result.rows[0];
};


export const getAllUsers = async () => {
    const result = await pool.query(`SELECT * FROM users`);
    return result.rows;
};