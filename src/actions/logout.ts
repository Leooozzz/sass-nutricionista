"use server"

import { clearServerAuthToken } from "@/lib/serverCookies"
import { redirect } from "next/navigation"

export const logout = async()=>{
    await clearServerAuthToken()
    redirect('/login')
}