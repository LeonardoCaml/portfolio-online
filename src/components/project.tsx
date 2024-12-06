import { Container } from "@mui/material";
import Image from "next/image";

export default function Project({ image, title, description, link }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: 300,
        display: "flex",
        gap: 4,
        alignItems: "center",
      }}
    >
      <div className="w-1/2 overflow-hidden drop-shadow-lg rounded-xl">
        <Image
          src={image}
          className="duration-300 w-full h-72 object-cover hover:scale-110"
          alt="tela"
        />
      </div>
      <div className="w-1/2 h-4/5 flex flex-col justify-between">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="w-full h-40">{description}</p>
        <p className="text-xl font-semibold">
          Confira Aqui: <a href={link} target="_blank">{title}</a>
        </p>
      </div>
    </Container>
  );
}
