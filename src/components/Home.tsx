import Image from "next/image";
import { images } from "@/constant/photos";

export default function Home() {
  return (
    <div className="md:h-[500px] flex flex-col md:flex-row items-center justify-between md:justify-center">
      <div className="h-20 md:h-48 w-4/5 md:w-96 flex flex-col justify-between items-start gap-2 m-16 md:my-48">
        <p className="text-2xl">Olá, eu sou</p>
        <h1 className="text-5xl">Leonardo Camelo</h1>
        <p className="text-2xl">Desenvolvedor Frontend</p>
        <div className="w-full flex gap-2 mt-2">
          <a
            href="/curriculo.pdf"
            download="Leonardo_Camelo_Dev.pdf"
            className="flex items-center justify-center border-solid border-2 border-black w-1/2 h-10 rounded-lg text-sm md:text-base font-semibold"
          >
            Baixar currículo
          </a>
          <a
            href="https://github.com/LeonardoCaml"
            target="_blank"
            className="flex items-center justify-center border-solid border-2 border-black bg-black text-white w-1/2 h-10 rounded-lg text-sm md:text-base font-semibold"
          >
            GitHub
          </a>
        </div>
      </div>
      <div>
        <div className="mt-20 md:m-0 flex items-center justify-center">
          <Image width={600} src={images.Ilustraçao} alt="icon" />
        </div>
      </div>
    </div>
  );
}
