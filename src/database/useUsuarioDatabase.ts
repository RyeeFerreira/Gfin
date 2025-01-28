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
                $senha: data.senha
            })

            const insertedRowId = result.lastInsertRowId.toLocaleString();

            return{insertedRowId}
        }catch (error) {
            throw error
        }

    }

    async function consulta(email: string, senha: string){
        const query = "SELECT email, senha FROM usuarios WHERE email = $email AND senha = $senha"
        try{

            const result = await database.getAllAsync<UsuarioDatabase>(query, { $email: email, $senha: senha } )

            if(result == null || result == undefined || result.length == 0){
                return false
            }
            return true   
            
        }catch (error){                                                
            throw error
        }
    }

    return {create, consulta}
}
