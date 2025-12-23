
import { getAllNutricionista } from "../services/nutricionista-service";
import { ExtendedRequest } from "../types/auth-request";
import { Response} from "express";

export const getNutricionista = async(req:ExtendedRequest,res:Response)=>{
    const clientId = req.userId;
    if(!clientId)
        return res.status(401).json({ erro: "Usuario nao autenticado" });
    const nutricionista = await getAllNutricionista()
    if(!nutricionista) return res.status(404).json({error:"Nenhum nutricionista encontrado"})
    return res.status(200).json(nutricionista)
}

