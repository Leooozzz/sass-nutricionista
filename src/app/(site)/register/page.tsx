import { RegisterForm } from "@/auth/registerForm";
import Image from "next/image";

export default function Page () {
    return(
        <div className="max-w-md mx-auto">
            <Image src={"/images/image_LogoSingIn_Up.png"} alt={""} height={400} width={400}/>
                <RegisterForm/>
        </div>
    )
}