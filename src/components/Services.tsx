import { Code, Architecture, PhoneIphone } from "@mui/icons-material";

const services = [
  {
    id: 1,
    icon: <Code sx={{ fontSize: "inherit" }} />,
    service: "Criação de sites",
  },
  {
    id: 2,
    icon: <Architecture sx={{ fontSize: "inherit" }} />,
    service: "UI / UX Designer",
  },
  {
    id: 3,
    icon: <PhoneIphone sx={{ fontSize: "inherit" }} />,
    service: "Sites responsivos",
  },
];

export default function Services() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-10">
      <h1 className="text-2xl md:text-4xl text-center font-bold my-10">
        Serviços
      </h1>
      <div className="md:w-full flex flex-col md:flex-row justify-between md:mb-10 gap-5 md:gap-0">
        {services.map((props) => (
          <div
            key={props.id}
            className="flex flex-col items-start justify-center border border-b-4 border-black bg-gray-200 w-80 md:w-[370px] h-60 p-10 gap-4"
          >
            <span className="text-5xl font-semibold">{props.icon}</span>
            <h1 className="text-2xl md:text-3xl font-semibold w-24 md:w-32">
              {props.service}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
