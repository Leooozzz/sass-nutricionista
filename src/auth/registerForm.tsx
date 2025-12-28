"use client"

import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import { ErrorStructure, schema } from "./schema/registerSchema"
import { register } from "@/actions/register"
import { redirect } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const RegisterForm = () =>{
    const [form,setForm]=useState({name:'',email:'',password:'',confirmPassword:''})
    const[error,setError]=useState<ErrorStructure>({})
    const[pending,startTransition]=useTransition()

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setForm(form=>({...form,[e.target.name]:e.target.value}))
        setError(error=>({...error,[e.target.name]:undefined,form:undefined}))
    }

    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault()
        const result = schema.safeParse(form)
        if(!result.success){
            const fieldError:any={}
            result.error.issues.forEach(err=>{
                if(err.path[0]){
                    fieldError[err.path[0]]=err.message
                }
            })
            setError(fieldError)
            return
        }setError({})
        startTransition(async()=>{
            const res = await register(form)
            if(res.error){
                setError({form : res.error})
            }else{
                redirect('/login')
            }
        })
    }


    return(
        <form action="" onSubmit={handleSubmit} className="p-8 border border-gray-100 rounded-sm ">
            <h2 className="text-2xl font-bold flex text-green-700 justify-center mb-5">Cadastrar</h2>
            <div className="mb-4">
                <Input type="text" name="name" value={form.name} onChange={handleChange} autoFocus className="w-full p-5" disabled={pending} placeholder="Digite seu usuario"/>
                {error.name && <div className='text-red-500 text-sm mt-1'>{error.name}</div>}
            </div>

             <div className="mb-4">
                <Input type="email" name="email" value={form.email} onChange={handleChange} autoFocus className="w-full p-5" disabled={pending} placeholder="email"/>
                {error.email && <div className='text-red-500 text-sm mt-1'>{error.email}</div>}
            </div>

             <div className="mb-4">
                <Input type="password" name="password" value={form.password} onChange={handleChange} autoFocus className="w-full p-5" disabled={pending} placeholder="Senha"/>
                {error.password && <div className='text-red-500 text-sm mt-1'>{error.password}</div>}
            </div>

             <div className="mb-4">
                <Input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} autoFocus className="w-full p-5" disabled={pending} placeholder="Confirme sua senha"/>
                {error.confirmPassword && <div className='text-red-500 text-sm mt-1'>{error.confirmPassword}</div>}
            </div>
            <Button type='submit' className='w-full bg-green-700 text-white hover:bg-green-300 p-5' disabled={pending}>
            {pending ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
            {error.form && <div className='text-red-500 text-sm mt-1'>{error.form}</div>}
            <Link href={'/login'} className='flex justify-center text-green-700 text-sm mt-5'>Ja tem conta? faça login!</Link>

        </form>
    )

}