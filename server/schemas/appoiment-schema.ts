import z from "zod";

export const appoimentsSchema=z.object({
    date:z.string(),
    hour:z.string(),
    nutricionistaId:z.number(),
})