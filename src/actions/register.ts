"use server";

import { api } from "@/lib/axios";
import { Register } from "@/types/register";

export const register = async ({
  name,
  email,
  password,
}: Register): Promise<{ error: string | null }> => {
  try {
    const response = await api.post("/user/register", {
      name,
      email,
      password,
    });
    if (response.status === 201 && response.data.user) {
      return { error: null };
    }
  } catch {}
  return { error: "ocorreu um erro" };
};
