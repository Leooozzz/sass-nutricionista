import z from "zod"

export const schema=z.object({
    email:z.email({message:"E-mail invalido"}),
    password:z.string().min(8,{message:"A senha deve ter no minimo 8 caracteres "})
})
export type ErrorStructure={
    email?:string,
    password?:string,
    form?:string
}