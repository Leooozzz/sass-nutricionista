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

  return (
    <div>
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
              <CardDescription>
                ⏰ {new Date(app.hour).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between items-center">
              <span>{`👨‍⚕️ ${app.nutricionista.name}-${app.nutricionista.crm}- Especialidade:${app.nutricionista.especialidade}`} </span>
              <span className="text-green-400">Status: {app.status}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
