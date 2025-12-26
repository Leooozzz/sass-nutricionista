import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <main>
        <div className="p-4 mt-10 flex flex-col items-center text-center md:flex-row md:justify-center md:items-center md:text-leftmd:gap-10">
          <Image
            src="/images/logo.png"
            alt="Logo Nutribem"
            width={450}
            height={450}
            className="mb-6 md:mb-0 "
          />
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-3 text-green-700 text-sm md:text-base">
              O maior site de dietas do Brasil
            </div>
            <span className="text-4xl md:text-6xl font-bold">NUTRIBEM</span>
            <div className="text-lg md:text-2xl mt-2">
              sua dieta, do seu jeito!
            </div>
            <Button className="bg-green-600 text-white rounded-full mt-6 p-6 text-lg md:text-2xl hover:bg-green-700 flex gap-3">
              Criar uma conta
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
                
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-10 bg-green-700 p-3">
          ...
        </div>
      </main>
    </div>
  );
}
