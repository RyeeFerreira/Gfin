import { useSQLiteContext } from "expo-sqlite"

export type UsuarioDatabase = {
    id: number
    name: string
    email: string
    senha: string
}

export function useUsuarioDatabase(){
    const database = useSQLiteContext();

    async function create(data: Omit <UsuarioDatabase, "id">) {
        const statement = await database.prepareAsync(
            "INSERT INTO usuarios (name, email, senha) VALUES ($name, $email, $senha)"
            )
        try{
            const result = await statement.executeAsync({
                $name: data.name,
                $email: data.email,
                $senha: data.email
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return{insertedRowId}
        }catch (error) {
            throw error
        }

    }

    return {create}
}