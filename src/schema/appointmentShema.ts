import z from "zod";

export const schema = z.object({
  date: z.string({ message: "Escolha uma data valida" }),
  hour: z.string({ message: "Escolha uma hora" }),
  nutricionistaId: z.number().min(1, { message: "Selecione um nutricionista" }),
});

export type ErrorStructure = {
  date?: string;
  hour?: string;
  nutricionistaId?: string;
  form?: string;
};
