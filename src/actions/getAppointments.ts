

import { api } from "@/lib/axios";
import { AppointmentType } from "@/types/getAppointments";



export const getAppointments = async (token: string): Promise<AppointmentType[]> => {
   try{
        const response=await api.get('/appointments',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        if(response.status === 200){
            return response.data as AppointmentType[]
        }
    }catch(err){
        console.error("Erro ao buscar consultas:", err);
    }
    return []
};