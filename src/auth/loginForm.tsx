"use client"

import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import { ErrorStructure, schema } from "./schema/loginSchema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { login } from "@/actions/login"
import { setAuthCookies } from "@/actions/setAuthCookies"
import { redirect } from "next/navigation"
import { useAuthStore } from "@/store/auth"

export const LoginForm = () =>{
    const [form,setForm]=useState({email:"",password:""})
    const [error,setError]=useState<ErrorStructure>({})
    const [pending,startTransition]=useTransition()
    const authStore=useAuthStore(state=>state)

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
            return setError(fieldError)
        }
        setError({})
        startTransition(async()=>{
            const res = await login(form)
            if(res.error){
                setError({form:res.error})
            }else if(res.token){
               await setAuthCookies(res.token)
               authStore.setToken(res.token)
               redirect('/')
            }
        })
    }

    return(
        <form action="" onSubmit={handleSubmit} className="p-8 border border-gray-100 rounded-sm ">
            <h2 className="text-2xl font-bold flex text-green-700 justify-center mb-5">Login</h2>
            <div className="mb-5 ">
                <Input type="email" name="email" placeholder="Digite seu email" className="p-5" autoFocus onChange={handleChange} disabled={pending}/>
               {error.email && <div className='text-red-500 text-sm mt-1'>{error.email}</div>}
            </div>
             <div className="mb-5">
                <Input type="password" name="password" placeholder="Digite sua senha" className="p-5" onChange={handleChange} disabled={pending}/>
                 {error.password && <div className='text-red-500 text-sm mt-1'>{error.password}</div>}
            </div>
            <Button type='submit' className='w-full bg-green-700 text-white hover:bg-green-300 p-5' disabled={pending}>
            {pending ? 'Entrando...' : 'Entrar'}
            </Button>
            {error.form && <div className='text-red-500 text-sm mt-1'>{error.form}</div>}
            <Link href={'/register'} className='flex justify-center text-green-700 text-sm mt-5'>Não tem conta? cadastre-se!</Link>
        </form>

    )
}