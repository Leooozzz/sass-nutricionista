import { Button } from "@/components/ui/button";
import { CardAbout } from "@/components/layout/cardAbout";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/layout/cardQuestion";

export default function Page() {
  return (
    <div>
      <main>
        <div className="p-4 mt-10 flex flex-col items-center  text-center md:flex-row md:justify-center md:items-center md:text-leftmd:gap-10">
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
            <Link href={"/Register"}>
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

        <div className="mt-15 p-4 justify-center flex md:flex-row flex-col items-center gap-8">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div>
            <div className="max-w-2xl p-3 ">
              <h1 className="text-4xl font-bold text-green-700">
                Sua saúde começa com suas escolhas.
              </h1>
              <p className="mt-5 text-xl text-gray-700">
                Criamos um plano que respeita seus gostos, seu ritmo e oferece
                suporte com o nutricionista no caminho.
              </p>
            </div>
            <CardAbout
              title={"Alimentos Favoritos"}
              description={
                "Uma dieta elaborada especialmente com base nos alimentos que você mais gosta."
              }
            />
            <CardAbout
              title={"Sua dieta, do seu jeito"}
              description={
                "Plano alimentar totalmente personalizado com base nas suas preferências e objetivo."
              }
            />
            <CardAbout
              title={"Consulta com nutricionista"}
              description={
                "Acesso a nutricionistas qualificados para orientação personalizada quando você precisar."
              }
            />
          </div>
          <div>
            <Image
              src={"/images/cenouracoraçao.png"}
              alt={""}
              height={540}
              width={420}
              className="hover:scale-105"
            />
          </div>
        </div>
        <Separator className="mt-5" />
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-4xl font-bold">Perguntas Frequentes</h1>
          <p className="mt-5 text-xl">
            Tudo o que você precisa saber sobre a NutriBem
          </p>
        </div>
        <div>
          <Accordion
            title={"Como funciona a NutriBem?"}
            children={
              "A NutriBem é uma plataforma online de nutrição que conecta você a nutricionistas de forma prática e segura Após um cadastro rápido, você responde a um questionário e recebe um plano alimentar personalizado.O acompanhamento é feito totalmente online, com consultas por vídeo e suporte pelo app.Tudo para cuidar da sua alimentação de forma simples, flexível e acessível."
            }
            defaultOpen={false}
          />
          <Accordion
            title={"Formas de pagamento"}
            children={"A NutriBem aceita pagamentos via cartão de crédito, cartão de débito e PIX.Também é possível parcelar os planos no cartão de crédito.  Os pagamentos são 100% online, seguros e rápidos."}
            defaultOpen={false}
          />
          <Accordion
            title={"Precisa de ajuda? Onde conseguir suporte?"}
            children={"Se precisar de ajuda, nosso suporte está disponível pelo WhatsApp, com atendimento rápido e personalizado.Basta entrar em contato pelo número exclusivo de suporte da NutriBem e nossa equipe estará pronta para ajudar."}
            defaultOpen={false}
          />
          <Accordion
            title={"Qual o valor da NutriBem"}
            children={"Os valores variam conforme o tipo de atendimento escolhido:Consulta avulsa online: R$ 120 por consulta Sessão por hora (atendimento estendido): R$ 200 por hora Você pode agendar conforme sua necessidade — uma vez por mês, semanalmente, ou na frequência que preferir.Planos com pacotes de consultas também estão disponíveis com descontos especiais."}
            defaultOpen={false}
          />
          <Accordion
            title={"Qual o CNPJ da NutriBem?"}
            children={"CNPJ (fictício – apenas ilustrativo):12.345.678/0000-00"}
            defaultOpen={false}
          />
          <Accordion
            title={"Modelo de atendimento"}
            children={"O atendimento da NutriBem é 100% online e personalizado.As consultas são realizadas por videochamada, com acompanhamento contínuo pelo app.O cliente recebe um plano alimentar individual e suporte via WhatsApp.A frequência pode ser semanal ou mensal, conforme a necessidade do paciente."}
            defaultOpen={false}
          />
        </div>
      </main>
    </div>
  );
}
