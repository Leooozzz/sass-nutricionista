"use server";

import { api } from "@/lib/axios";
import { Login } from "@/types/login";

export const login = async ({
  email,
  password,
}: Login): Promise<{ error: string | null; token?: string }> => {
  try {
    const response = await api.post("/user/login", { email, password });
    if (response.status === 200 && response.data.token) {
      return {
        error: null,
        token: response.data.token,
      };
    }
  } catch {}
  return { error: "Erro ao efetuar login" };
};
