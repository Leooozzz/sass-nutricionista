import z from "zod";

export const schema=z.object({
    name:z.string().min(2,{message:"O nome deve ter no minimo 2 caracteres"}),
    email:z.email({message:"Email invalido"}),
    password:z.string().min(8,{message:"Senha minimo 8 caracteres"}),
    confirmPassword:z.string()
}).refine(data=> data.password === data.confirmPassword,{message:"As senhas nao concidem"})
export type ErrorStructure={
    name?:string,
    email?:string,
    password?:string,
    confirmPassword?:string,
    form?:string
}
