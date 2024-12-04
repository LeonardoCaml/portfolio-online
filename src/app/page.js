import Image from "next/image";

import title from "./assets/title.png";
import javascript from "./assets/Javascript.png";
import next from "./assets/nextjs.png";
import redux from "./assets/redux.png";
import react from "./assets/React.png";
import tailwind from "./assets/Tailwind.png";
import tela from "./assets/telainicial.png";

import Navbar from "../components/Navbar";
import { Container, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar />
          <Image src={title} width={400} />
        </Stack>
        <Stack>
          <Image
            className="transition-all hover:-translate-y-4 duration-500"
            src={javascript}
            width={50}
          />
          ;
        </Stack>
      </Container>
      <div className="h-svh flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl">Sobre mim</h1>
          <p className="text-xl w-[60rem]">
            Sempre fui um entusiasta da tecnologia, desde muito cedo tive
            contato com manuntenção de eletrônicos e outros programas de
            computador. Porém, nunca encherguei o mercado da tecnologia como uma
            profissão, apenas como um passa tempo, visão essa que foi mudando ao
            longo dos anos.
            <br></br>
            <br></br>
            Iniciei minha jornada no desenvolvimento web somente em 2021 após
            conhecer de perto como funcionava a estrutura de um site e as
            tecnologias que rodavam por trás de uma aplicação. Desde então,
            comecei a desenvolver minhas próprias landing pages e aperfeiçoar
            minhas skills como desenvolvedor Front-end afim de me tornar um
            excelente profissional.
            <br></br>
            <br></br>
            Em 2022 tive meu primeiro cliente, dono de uma empresa de
            contabilidade que precisava de uma landing page para exibir seus
            serviços e apresentar sua historia para potenciais clientes. Foi uma
            excelente oportunidade de aplicar meus conhecimentos e compreender
            onde precisava melhorar
            <br></br>
            <br></br>
            Hoje, busco atuar como desenvolvedor front-end e, talvez em alguns
            anos, começar a liderar meu proprio time de desenvolvedores
          </p>
        </div>
      </div>
      <div className="h-svh flex flex-col items-center justify-evenly">
        <h1 className="text-8xl">Projetos</h1>
        <div className="flex gap-32">
          <div className="w-80 h-96  border-2">
            <div>
              <Image src={tela} className="w-full h-56 object-cover" />
            </div>
            <div className="p-5 bg-gray-300">
              <h1 className="text-2xl">título</h1>
              <p className="text-lg">descrição basica do projeto</p>
              <p className="text-lg">link: www.site-exemplo.com.br</p>
            </div>
          </div>

          <div className="bg-gray-300 w-80 h-96 overflow-hidden border-2 border-black">
            <div className="bg-white w-full h-56 border-black"></div>
            <div className="p-5">
              <h1 className="text-2xl">título</h1>
              <p className="text-lg">descrição basica do projeto</p>
              <p className="text-lg">link: www.site-exemplo.com.br</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-svh flex flex-col items-center justify-center">
        <h1>Envie sua mensagem</h1>
      </div>
    </>
  );
}
