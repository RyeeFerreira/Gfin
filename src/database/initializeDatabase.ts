import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(45) NOT NULL,
            email VARCHAR(45) NOT NULL,
            senha TEXT NOT NULL
        );
    `);

    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS contas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario_id INTEGER NOT NULL,
            saldo FLOAT NOT NULL,
            FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        );
    `);

    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS produtos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            conta_id INTEGER NOT NULL,
            titulo VARCHAR(45) NOT NULL,
            valor FLOAT NOT NULL,
            categoria VARCHAR(45) NOT NULL,
            data DATETIME NOT NULL,
            descricao TEXT,
            repeticao BOOLEAN,
            data_repeticao DATETIME,
            FOREIGN KEY (conta_id) REFERENCES contas(id)
        );
    `);
}