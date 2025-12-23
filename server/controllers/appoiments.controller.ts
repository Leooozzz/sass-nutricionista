import { appoimentsSchema } from "../schemas/appoiment-schema";
import { Response, Request } from "express";
import { createAppointment, getAllNutricionista } from "../services/appoiment-services";
import { ExtendedRequest } from "../types/auth-request";




export const appoiments = async (req: ExtendedRequest, res: Response) => {
  const result = appoimentsSchema.safeParse(req.body);
  if (!result.success)
    return res.status(400).json({ error: "Dados invalidos" });
  const { date, hour, nutricionistaId } = result.data;
  const clientId = req.userId;
  if (!clientId)
    return res.status(401).json({ erro: "Usuario nao autenticado" });
  const create = await createAppointment(date, hour, nutricionistaId, clientId);
  if (!create) return res.status(400).json({ error: "Erro na criação" });
  return res.status(201).json({ create });
};

export const getNutricionista = async(req:ExtendedRequest,res:Response)=>{
    const clientId = req.userId;
    if(!clientId)
        return res.status(401).json({ erro: "Usuario nao autenticado" });
    const nutricionista = await getAllNutricionista()
    if(!nutricionista) return res.status(404).json({error:"Nenhum nutricionista encontrado"})
    return res.status(200).json(nutricionista)
}

