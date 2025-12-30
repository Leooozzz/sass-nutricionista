"use client";
import { getAppointments } from "@/actions/getAppointments";
import { useAuthStore } from "@/store/auth";
import { AppointmentType } from "@/types/getAppointments";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { deleteAppointment } from "@/actions/deleteAppointment";

export const MyAppointments = () => {
  const { token, hydrated } = useAuthStore();
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  useEffect(() => {
    if (!hydrated || !token) return;

    const loadAppointments = async () => {
      try {
        const data = await getAppointments(token);
        console.log("Token enviado:", token);
        setAppointments(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadAppointments();
  }, [token, hydrated]);

  if (!hydrated) {
    return <p>Carregando...</p>;
  }

  const handleDeleted = async (id: number) => {
  if (!token) return;

  try {
    await deleteAppointment(id, token);
    setAppointments(prev => prev.filter(app => app.id !== id));
    console.log(`Consulta ${id} deletada com sucesso`);
  } catch (err) {
    console.error("Erro ao deletar a consulta:", err);
  }
};

  return (
    <div className=" mt-20 mb-20">
      <div className="flex flex-start text-4xl text-gray-200 items-center gap-3 mb-6">
        <h1>Minhas consultas</h1>
        <div className="bg-green-400 p-2 rounded-md">
          <Image src="/images/talk.png" alt="" height={34} width={34} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {appointments.length === 0 && <p>Nenhuma consulta encontrada</p>}

        {appointments.map((app) => (
          <Card key={app.id} className="bg-zinc-900 text-gray-100">
            <CardHeader>
              <CardTitle>{new Date(app.date).toLocaleDateString()}</CardTitle>
              <CardAction>
                <Button className="bg-transparent p-2" onClick={() => handleDeleted(app.id)}>
                    <Image src={"/images/lata-de-lixo.png"} alt={""} height={24} width={24}/>
              </Button>
              </CardAction>
              <CardDescription className="flex gap-2 md:text-lg items-center">
               <Image src={"/images/schedule.png"} alt={""} height={24} width={24}/>
                {new Date(app.hour).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </CardDescription>
              
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <span className="flex gap-2 md:text-lg items-center">
                <Image src={"/images/surgeon.png"} alt={""} height={24} width={24}/>{` ${app.nutricionista.name}-${app.nutricionista.crm}- Especialidade:${app.nutricionista.especialidade}`} </span>
              <span className="text-sm border p-2 rounded-full ">{app.status}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
