import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
            <Link href={"/register"}>
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
            </Link>
          </div>
        </div>

        <div className="mt-15 justify-center flex md:flex-row flex-col items-center gap-8">
          <Image
            src="/images/nutribemimagem.png"
            alt="Nutricionista que entende você"
            height={480}
            width={480}
            className="flex"
          />

          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Nutri que entende você
            </h1>

            <p className="text-gray-600 mb-4">
              Aqui você não recebe dietas impossíveis ou cheias de regras. O
              acompanhamento é feito pensando na sua rotina, no que você gosta
              de comer e no que realmente funciona para você.
            </p>

            <p className="text-gray-600 mb-6">
              Mais do que emagrecer, o objetivo é criar uma relação saudável com
              a comida, sem culpa, sem sofrimento e com resultados reais.
            </p>

            <Button>Agendar consulta</Button>
          </div>
        </div>
        <div>
          ....
        </div>
      </main>
    </div>
  );
}
