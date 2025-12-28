"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/actions/logout";
import { useAuthStore } from "@/store/auth";

export const UserLoggedSelect = () => {
    const {clearToken} = useAuthStore()
    const handleLogout = async () =>{
        clearToken()
        await logout()
    }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-green-400 rounded-full p-2">
          <Image src="/images/user-avatar.png" alt="User" height={24} width={24}/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem><Link href={"/appointments"}>Agendar consulta</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={"/Allappointments"}>Minhas consultas</Link></DropdownMenuItem>
        <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};