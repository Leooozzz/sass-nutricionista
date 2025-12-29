"use client";

import { getNutricionistas } from "@/actions/getNutricionista";
import { useAuthStore } from "@/store/auth";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  useTransition,
} from "react";
import { Nutricionista } from "@/types/nutricionista";
import { Button } from "../ui/button";
import { ErrorStructure, schema } from "@/schema/appointmentShema";
import { appointment } from "@/actions/postAppointments";
import { redirect } from "next/navigation";
import { Input } from "../ui/input";

export const AppointmentForm = () => {
  const { token, hydrated } = useAuthStore();

  const [form, setForm] = useState({ date: "", hour: "", nutricionistaId: 0 });
  const [error, setError] = useState<ErrorStructure>();
  const [nutricionistas, setNutricionistas] = useState<Nutricionista[]>([]);
  const [pending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
    setError((error) => ({
      ...error,
      [e.target.name]: undefined,
      form: undefined,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldError: any = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          fieldError[err.path[0]] = err.message;
        }
      });
      setError(fieldError);
      return;
    }
    setError({});
    startTransition(async () => {
      if (!token) {
        setError({ form: "Usuário não autenticado" });
        return;
      }

      const res = await appointment(token, form);

      if (res.error) {
        setError({ form: res.error });
      } else {
        redirect("/myappointments");
      }
    });
  };

  useEffect(() => {
    if (!hydrated || !token) return;

    const loadNutricionistas = async () => {
      try {
        const data = await getNutricionistas(token);
        setNutricionistas(data);
      } catch {}
    };

    loadNutricionistas();
  }, [token, hydrated]);

  if (!hydrated) {
    return <p>Carregando...</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-6 p-8 border border-gray-200 rounded-lg shadow-sm "
    >
      <h2 className="text-2xl font-semibold text-green-700 text-center">
        Agendar consulta
      </h2>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Data</label>
        <Input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="h-10"
        />
        {error?.date && (
          <span className="text-xs text-red-500">{error.date}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Horário</label>
        <Input
          type="time"
          name="hour"
          value={form.hour}
          onChange={handleChange}
          className="h-10"
        />
        {error?.hour && (
          <span className="text-xs text-red-500">{error.hour}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Nutricionista
        </label>
        <select
          name="nutricionistaId"
          value={form.nutricionistaId}
          onChange={(e) => {
            setForm((form) => ({
              ...form,
              nutricionistaId: Number(e.target.value),
            }));
            setError((error) => ({
              ...error,
              nutricionistaId: undefined,
              form: undefined,
            }));
          }}
          className="h-10 rounded-md border border-gray-300  px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        >
          <option value={0}>Escolha um nutricionista</option>
          {nutricionistas.map((nutri) => (
            <option key={nutri.id} value={nutri.id} className="text-black">
              {nutri.name} — {nutri.especialidade}
            </option>
          ))}
        </select>
        {error?.nutricionistaId && (
          <span className="text-xs text-red-500">{error.nutricionistaId}</span>
        )}
      </div>

      {error?.form && (
        <p className="text-sm text-red-600 text-center">{error.form}</p>
      )}

      <Button
        type="submit"
        disabled={pending}
        className="h-10 w-full bg-green-700 hover:bg-green-800"
      >
        {pending ? "Agendando..." : "Agendar consulta"}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Após agendar sua consulta entraremos em contato via WhatsApp para
        confirmar.
      </p>
    </form>
  );
};
