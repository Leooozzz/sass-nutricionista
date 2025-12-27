"use client"

import { ChangeEvent, FormEvent, useState, useTransition } from "react"
import { ErrorStructure, schema } from "./schema/registerSchema"
import { register } from "@/actions/register"
import { redirect } from "next/navigation"


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
            if(result.error){
                setError({form  : res.error})
            }else{
                redirect('/login')
            }
        })
    }


    return(
        <form action="" onSubmit={handleSubmit}>


        </form>
    )

}