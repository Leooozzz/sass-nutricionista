import { RegisterForm } from "@/auth/registerForm";
import Image from "next/image";

export default function Page () {
    return(
        <div className="max-w-md mx-auto bg-white dark:bg-black p-5 rounded-md">
            <div className="flex justify-center items-center">
                <Image src={"/images/image_LogoSingIn_Up.png"} alt={""} height={400} width={400} />
            </div>
                <RegisterForm/>
        </div>
    )
}