import { AppointmentStatus } from "../../generated/prisma/enums";
import { prisma } from "../libs/prisma";

export const createAppointment = async (date: string,hour: string,nutricionistaId: number,clientId: number) => {

  const nutricionista = await prisma.nutricionista.findUnique({
    where: { id: nutricionistaId },
  });

  if (!nutricionista) return null;

  const appoiment = await prisma.appointment.create({
    data: {
      date: new Date(date),
      hour: new Date(`${date}T${hour}:00`),
      clientId,
      nutricionistaId: nutricionista.id,
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

export const getAppoimentsByClients = async (clientId: number) => {
  const appoiments = await prisma.appointment.findMany({
    where: { clientId },
    select: {
      id: true,
      date: true,
      hour: true,
      status: true,
      nutricionista: {
        select: {
          id: true,
          name: true,
          crm: true,
          especialidade: true,
        },
      },
    },
  });
  return appoiments;
};

export const updateAppointment = async (id: number,fields: {date?: string;hour?: string;status?: AppointmentStatus;nutricionistaId?: number;}) => {
     const appointments = await prisma.appointment.update({
     where:{id},
     data:{
      date:fields.date,
      hour:fields.hour,
      status:fields.status,
      nutricionistaId:fields.nutricionistaId
     }
    });
    if(!appointments) return null
    return appointments;

    }

export const deletedAppointments = async (id:number)=>{
  const appoiments = await prisma.appointment.delete({
    where:{id}
  })
  if(!appoiments) return null
  return appoiments
}