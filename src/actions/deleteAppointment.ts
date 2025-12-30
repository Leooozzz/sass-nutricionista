import { api } from "@/lib/axios";

export const deleteAppointment = async (id: number, token: string) => {
  try {
    const response = await api.delete(`/appointments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data; 
    }
  } catch (err) {
    console.error("Erro ao deletar consulta:", err);
    throw err;
  }
};