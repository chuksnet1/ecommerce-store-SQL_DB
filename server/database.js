import mysql from 'mysql2';
import dotenv from 'dotenv'



dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function createDB(params) {
    const result = await pool.query(
        `CREATE DATABASE shop_data;`
    )
    return result
}

export const createSignupTable = async () => {
    const result = await pool.query(
        `CREATE TABLE signup(
            id integer PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            
        )`
    )
    return result;
}

export const addColumn =async()=>{
    const result = await pool.query(
        `ALTER TABLE signup
        ADD created TIMESTAMP NOT NULL DEFAULT NOW() `
    )
    return result
}

export const getUserById = async (id) => {
    const [result] = await pool.query(
        `SELECT * FROM signup
        WHERE id = ? 
        `, [id]
    )
    return result[0]
}
export const registerUserValue = async (username, password, surname, firstname) => {
    const [result] = await pool.query(
        `INSERT INTO signup (username, password, surname, firstname)
        VALUES (?, ?,?,?)
        `, [username, password, surname, firstname]
    )
    const id = result.insertId
    console.log(id)
    return getUserById(id);
}

export const signInUser=async(username, password)=>{
    const [result] = await pool.query(
        `SELECT username FROM signup 
        WHERE username= ? and password =?
        `,[username, password]
    )
    return result;
}


export async function createTable() {
    const result = await pool.query(
        `CREATE TABLE shop(
            id integer PRIMARY KEY AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            amount FLOAT NOT NULL,
            description TEXT NOT NULL,
            image NVARCHAR (100),
            created TIMESTAMP NOT NULL DEFAULT NOW()
        )`
    )
    return result;
}

export const insertValue = async (title, amount, description, image) => {
    const [result] = await pool.query(
        `INSERT INTO shop(title, amount, description, image)
        VALUES (?,?,?,?)
         `, [title, amount, description, image]
    )
    const id = result.insertId
    return getById(id)
}


export const getAll = async () => {
    const [result] = await pool.query(
        `SELECT * FROM shop`
    )
    return result
}


export const getById = async (id) => {
    const [result] = await pool.query(
        `SELECT * FROM shop
        WHERE id = ? 
        `, [id]
    )
    return result[0]
}


export const getByTitle = async (title) => {
    const [result] = await pool.query(
        `SELECT * FROM shop
        WHERE title =?
        `, [title]
    )
    return result[0]
}

export const getId = async () => {
    const [result] = await pool.query(
        `SELECT id FROM shop`
    )
    return result
}
