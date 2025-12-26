import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "../ui/button";

export function Header (){
    return(
        <header  className=" bg-white dark:bg-black">
            <div className="bg-green-700 text-lg flex justify-center">
                    Agende sua primeira consulta gratis
            </div>
            <div className="w-full p-6 flex justify-between max-w-6xl items-center mx-auto">
                <Link href={'/'}>
                    <Image src={"/images/logo.png"} alt={""} height={50} width={50}></Image>
                </Link>
                <div className="flex justify-center items-center gap-6">
                    <ModeToggle/>
                <Button className="bg-transparent text-green-600 text-lg p-4 border border-green-600 rounded-full hover:bg-green-600 hover:text-white ">
                   <Link href={"/register"}>Agendar consulta</Link>
                </Button>
                </div>
            </div>
        </header>
    )
}