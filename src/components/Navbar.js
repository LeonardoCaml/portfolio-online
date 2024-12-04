import Image from "next/image"

import logo from "../app/assets/logo.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-3 items-center justify-center">
      <Image src={logo} className="w-28 m-8"/>
      <ul className="flex items-center  w-fit h-20 text-lg gap-4">
        <li className="w-40 text-center">home</li>
        <li className="w-40 text-center">sobre mim</li>
        <li className="w-40 text-center">projetos</li>
        <li className="w-40 text-center">contato</li>
      </ul>
    </div>
  );
}
