"use server";

import { api } from "@/lib/axios";
import { appointmentType } from "@/types/appointments";

export const appointment = async (
  token: string,
  { date, hour, nutricionistaId }: appointmentType
): Promise<{ error: string | null }> => {
  try {
    const response = await api.post(
      "/appointments",
      { date, hour, nutricionistaId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 201) {
      return { error: null };
    }
  } catch (err) {
    console.error(err);
  }

  return { error: "ocorreu um erro" };
};
