"use server"

import { setServerAuthToken } from "@/lib/serverCookies"

export const setAuthCookies = async (token:string)=>{
    await setServerAuthToken (token)
}