import { prisma } from "../libs/prisma";

export const createAppointment = async (
  date: string,
  hour: string,
  nutricionistaId: number,
  clientId: number
) => {
  const nutricionista = await prisma.nutricionista.findUnique({
    where: { id: nutricionistaId },
  });
  if (!nutricionista) return null;

  const appoiment = await prisma.appointment.create({
    data: {
      date: new Date(date),
      hour: new Date(`${date}T${hour}:00`),
      clientId,
      nutricionistaId:nutricionista.id,
      status: "PENDING",
    },
  });
  if (!appoiment) return null;
  return {
    id: appoiment.id,
    date: appoiment.date,
    hour: appoiment.hour,
    clientId: appoiment.clientId,
    nutricionistaId: appoiment.nutricionistaId,
    status: appoiment.status,
  };
};


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