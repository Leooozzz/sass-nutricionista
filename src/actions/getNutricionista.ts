"use server";

import { api } from "@/lib/axios";
import { Nutricionista } from "@/types/nutricionista";

export const getNutricionistas = async (token: string) => {
   try{
        const response=await api.get('/nutricionistas',{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        if(response.status ===200){
            return response.data as Nutricionista[]
        }
    }catch{}
    return []
};