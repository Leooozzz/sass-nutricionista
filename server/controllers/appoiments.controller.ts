import { appoimentsSchema } from "../schemas/appoiment-schema";
import { Response, Request } from "express";
import {
  createAppointment,
  getAppoimentsByClients,
  updateAppointment,
} from "../services/appoiment-services";
import { ExtendedRequest } from "../types/auth-request";
import { json } from "zod";
import { putAppointmentsSchema } from "../schemas/put-appointments-schema";

export const appointments = async (req: ExtendedRequest, res: Response) => {
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


export const getAppointments = async (req: ExtendedRequest, res: Response) => {
  const clientId = req.userId;
  if (!clientId)
    return res.status(401).json({ error: "Usuario nao autenticado" });
  const appointments = await getAppoimentsByClients(clientId);
  if (!appointments || appointments.length === 0)
    return res.status(400).json({ error: "Nenhuma consulta encontrada" });
  return res.status(400).json(appointments);
};


export const putAppointments = async (req: ExtendedRequest, res: Response) => {
  const result = putAppointmentsSchema.safeParse(req.body);
  if (!result.success)
    return res.status(400).json({ error: "Dados invalidos" });

  const { date, hour, status, nutricionistaId } = result.data;
  const clientId = req.userId;
  if (!clientId)
    return res.status(401).json({ erro: "Usuario nao autenticado " });
  const {id} = req.params
  const update = await updateAppointment(Number(id), {
    date,
    hour,
    status,
    nutricionistaId,
  });

  if (!update) return res.status(404).json({ error: "Erro na atualização" });
  return res.status(201).json({ update });
};
