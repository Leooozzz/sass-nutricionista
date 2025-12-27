import { cookies } from "next/headers";

export const getServerAuthToken = async(token:string)=>{
    const cookie=await cookies()
    return cookie.get('auth_token')?.value || null;
}
export const setServerAuthToken = async (token:string)=>{
    const cookie = await cookies()
    cookie.set('auth_token',token,{httpOnly:true})
}
export const clearServerAuthToken = async ()=> {
    const cookie = await cookies()
    cookie.delete('auth_token')
}