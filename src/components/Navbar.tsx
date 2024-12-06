import Image from "next/image";

import logo from "../app/assets/logo.png";

const link = [
  {id: 1, name: 'home'},
  {id: 2, name: 'sobre mim'},
  {id: 3, name: 'projetos'},
  {id: 4, name: 'contato'}
]

export default function Navbar() {
  return (
    <div className="flex items-center justify-center h-28">
      <Image src={logo} className="w-24 m-8 left-10 absolute" alt="logo" />
      <ul className="flex items-center w-fit h-20 text-lg gap-4">
        {link.map( item => (
          <li className="w-40 text-center" key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
