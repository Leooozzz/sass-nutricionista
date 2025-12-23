import z from "zod";

export const putAppointmentsSchema = z.object({
  date: z.string().optional(),
  hour: z.string().optional(),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELED", "DONE"]).optional(),
  nutricionistaId: z.number().optional(),
});
