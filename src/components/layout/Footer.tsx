import { SocialMediaTypes } from "@/types/socialMedia";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const socialMedia: SocialMediaTypes[] = [
  {
    name: "Facebook",
    img: "/images/facebook.png",
    href: "https://www.facebook.com/Nutribem",
  },
  {
    name: "Instagram",
    img: "/images/instagram.png",
    href: "https://www.instagram.com/Nutribem",
  },
  {
    name: "LinkedIN",
    img: "/images/linkedin.png",
    href: "https://www.linkeddin.com/Nutribem",
  },
  { name: "X", img: "/images/twitter.png", href: "https://x.com/Nutribem" },
];
export const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-10 md:grid-cols-2  border-b border-gray-200">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo.png"
            alt="Logo do site"
            width={48}
            height={48}
          />
          <h1 className="text-xl font-semibold">
            O maior site de dietas do Brasil.
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Produto</h2>
            <Link
              href="/funcionalidades"
              className="hover:underline opacity-90"
            >
              Funcionalidades
            </Link>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Empresa</h2>
            <Link href="/sobre" className="hover:underline opacity-90">
              Sobre
            </Link>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Legal</h2>
            <Link href="/termos" className="hover:underline opacity-90">
              Termos
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-200">
        <p className="text-lg text-center md:text-left">
          Contate-nos por nossas redes sociais
        </p>

        <div className="flex gap-6">
          {socialMedia.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              aria-label={item.name}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Image src={item.img} alt={item.name} width={24} height={24} />
              <span className="hidden sm:inline">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1>Feito meramente para exibição em portifolio</h1>
        <Button className="bg-transparent hover:bg-transparent">
            <Image src={'/images/github.png'} alt={'github'} width={24} height={24} />
            <a href="https://github.com/Leooozzz">https://github.com/Leooozzz</a>
        </Button>
      </div>
    </footer>
  );
};
