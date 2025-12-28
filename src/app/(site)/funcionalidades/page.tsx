"use client"

import { IconRight } from "@/components/funcionalidades/iconsRight";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Page() {
    const {token}=useAuthStore()
    const handleClick =()=>{
        if(token){
            redirect('/appointments')
        }else{
            redirect('/register')
        }
    }
  return (
    <div className="max-w-6xl mx-auto">
      <header className="mt-16 px-4 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-4xl md:text-6xl leading-tight">
          Funcionalidades que
        </h1>

        <h2
          className="font-extrabold text-4xl md:text-6xl leading-tight bg-linear-to-r from-green-500 to-emerald-700 bg-clip-text text-transparent mb-6">
          Transformam
        </h2>

        <div className="max-w-3xl ">
          <p className="text-base md:text-2xl text-gray-500">
           Atendimento 12 horas por dia 7 dias por semana
          </p>
          <p className="text-base md:text-2xl text-gray-500">
            para criar a experiência nutricional mais personalizada do mercado.
          </p>
        </div>
      </header>
      <main>
        <section className="max-w-6xl mx-auto mt-20 flex flex-col gap-10">   

            <div className="flex self-start flex-col">
                <div className="p-3 bg-green-200 size-16 rounded-md">
                    <Image src={"/images/atendimento-ao-cliente.png"} alt={""} height={48} width={48}/>
                </div>
                <h1 className="text-3xl font-bold mt-2">Atendimento personalizado</h1>
                <p className="text-xl text-gray-400 mt-2 mb-2">Analise completa dos seus dados e cria um plano único para você</p>
               <IconRight description={"Análise de preferências alimentares"}/>
               <IconRight description={"Adaptação automática aos seus objetivos"}/>
               <IconRight description={"Aprendizado contínuo dos seus hábitos"}/>
            </div>

            <div className="flex self-end  flex-col">
               <div className="p-3 bg-green-200 size-16 rounded-md">
                    <Image src={"/images/livro.png"} alt={""} height={48} width={48}/>
                </div>
                <h1 className="text-3xl font-bold mt-2">Receitas Inteligentes</h1>
                <p className="text-xl text-gray-400 mt-2 ">Milhares de receitas adaptadas ao seu perfil nutricional e</p>
                <p className="text-xl text-gray-400 mb-2">preferências</p>
               <IconRight description={"Receitas baseadas nos seus gostos"}/>
               <IconRight description={"Instruções passo a passo"}/>
               <IconRight description={"Informações nutricionais completas"}/>
            </div>

            <div className="flex self-start flex-col">
                <div className="p-3 bg-green-200 size-16 rounded-md">
                    <Image src={"/images/planejamento.png"} alt={""} height={48} width={48}/>
                </div>
                <h1 className="text-3xl font-bold mt-2">Planejamento Semanal</h1>
                <p className="text-xl text-gray-400 mt-2 ">Organize suas refeições com antecedência e nunca mais</p>
                <p className="text-xl text-gray-400 mb-2">fique sem saber o que comer</p>
               <IconRight description={"Cardápio semanal personalizado"}/>
               <IconRight description={"Flexibilidade para mudanças"}/>
               <IconRight description={"Sincronização com sua agenda"}/>
            </div>

        </section>
        <section className="mt-20 ">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Como Funciona</h1>
                <p className="text-xl md:text-2xl text-gray-400 mt-5">Em apenas 3 passos simples, você terá sua dieta personalizada</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between mt-20 gap-10">

                <div className="flex items-center flex-col">
                <div className="bg-green-700 rounded-full text-2xl p-2 size-16 flex items-center justify-center font-bold">1</div>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-xl font-bold mt-2 mb-2">Conte-nos sobre você</h1>
                    <p className="text-gray-400 font-bold">Informe suas medidas, objetivos e</p>
                    <p className="text-gray-400 font-bold">preferências alimentares</p>
                </div>
                </div>
                 <div className="flex items-center flex-col">
                <div className="bg-green-700 rounded-full text-2xl p-2 size-16 flex items-center justify-center font-bold">2</div>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-xl font-bold mt-2 mb-2">Planejamento</h1>
                    <p className="text-gray-400 font-bold">Nosso sistema e nossa nutricionista gera um</p>
                    <p className="text-gray-400 font-bold">plano personalizado para você</p>
                </div>
                </div>
                 <div className="flex items-center flex-col">
                <div className="bg-green-700 rounded-full text-2xl p-2 size-16 flex items-center justify-center font-bold">3</div>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-xl font-bold mt-2 mb-2">Comece a transformação</h1>
                    <p className="text-gray-400 font-bold">Siga seu plano e acompanhe sua evolução</p>
                    <p className="text-gray-400 font-bold">com nosso suporte</p>
                </div>
                </div>
            </div>
        </section>
        <section className="mt-14 md:mt-20 px-4">
  <div className="flex flex-col items-center text-center">
    <h1 className=" text-lg sm:text-xl  md:text-4xl  text-green-700 mb-3 leading-tight font-bold">
      Experimente Todas as Funcionalidades
    </h1>
    <p className="text-sm sm:text-base md:text-2xl  text-gray-400 max-w-xs sm:max-w-md  md:max-w-none">
      Comece sua jornada de transformação hoje mesmo
    </p>
    <Button
      className="rounded-full mt-6 w-full sm:w-auto px-6 py-3" onClick={handleClick}>
      Agendar consulta agora
    </Button>
  </div>
</section>
      </main>
    </div>
  );
}
