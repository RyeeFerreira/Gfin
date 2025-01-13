import {type SQLiteDatabase} from "expo-sqlite"

export async function initializeDatabase(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXIST usuario(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(45) NOT NULL,
        email VARCHAR(45) NOT NULL,
        senha TEXT NOT NULL,

        )
        `)

}