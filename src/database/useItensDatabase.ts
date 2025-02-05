import { useSQLiteContext } from "expo-sqlite";

export type ItensDatabase = {
    id: number
    conta_id: number
    titulo: string
    tipo_de_saldo: boolean
    valor: number
    categoria: string
    data: string
    descricao: string
    repeticao: boolean
    data_repeticao: string
}

export function useItensDatabase(){
    const database = useSQLiteContext();

    async function create(data: Omit <ItensDatabase, "id" | "conta_id" >){
        const statement = await database.prepareAsync(
            "Insert INTO itens (titulo, tipo_de_saldo, valor, categoria, data, descricao, repeticao, data_repeticao) VALUES ($titulo, $tipo_de_saldo, $valor, $categoria, $data, $descricao, $repeticao, $data_repeticao)"
        )
        try{
            const result = await statement.executeAsync({   
                $titulo: data.titulo,
                $tipo_de_saldo: data.tipo_de_saldo,
                $valor: data.valor,
                $categoria: data.categoria,
                $data: data.data,
                $descricao: data.descricao,
                $repeticao: data.repeticao,
                $data_repeticao: data.data_repeticao
            })
        } catch (error){
            throw error
        }
    }

    
}