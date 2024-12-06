import { Container } from "@mui/material";
import Image from "next/image";

export default function Project({ image, title, description, link }) {
  return (
    <Container
      maxWidth="lg"
      className="h-1/2 md:h-80 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="w-4/5 md:w-1/2 overflow-hidden drop-shadow-lg rounded-xl">
        <Image
          src={image}
          className="duration-300 w-full h-72 md:h-72 object-cover hover:scale-110"
          alt="tela"
        />
      </div>
      <div className="w-4/5 md:w-1/2 h-4/5 flex flex-col justify-between gap-4">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="w-full h-fit md:h-40 text-sm md:text-xl">{description}</p>
        <p className="text-xl font-semibold">
          Confira Aqui:{" "}
          <a href={link} target="_blank">
            {title}.com
          </a>
        </p>
      </div>
    </Container>
  );
}
