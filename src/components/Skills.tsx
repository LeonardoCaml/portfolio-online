import Image from "next/image";
import { Tooltip } from "@mui/material";
import { icons } from "@/constant/technologies";

const technologies = [
  { id: 1, code: icons.html, name: "Html" },
  { id: 2, code: icons.css, name: "Css" },
  { id: 3, code: icons.javascript, name: "Javascript" },
  { id: 4, code: icons.react, name: "ReactJS" },
  { id: 5, code: icons.next, name: "NextJS" },
  { id: 6, code: icons.tailwind, name: "Tailwind" },
  { id: 7, code: icons.redux, name: "Redux" },
  { id: 8, code: icons.styledComponents, name: "Styled Components" },
  { id: 9, code: icons.materialUI, name: "Material UI" },
];

export default function Skills() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-10">
        Habilidades
      </h1>
      <div className="bg-red-200 w-96 md:w-full grid grid-cols-3 gap-6 ">
        {technologies.map((icon) => (
          <Tooltip title={icon.name} arrow key={icon.id}>
            <Image
              className="w-1/2 transition-all hover:scale-[1.2] duration-500"
              src={icon.code}
              alt="icon"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
