import { prisma } from "../libs/prisma"

export const getAllNutricionista = async () => {
    const  nutricionista = await prisma.nutricionista.findMany({
        select:{
            id:true,
            name:true,
            crm:true,
            especialidade:true,
        }
    })
    if(nutricionista.length === 0) return []
    return  nutricionista
}