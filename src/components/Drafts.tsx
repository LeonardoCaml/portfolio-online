import { Container } from "@mui/material";
import Project from "@/components/project";
import { images } from "@/constant/photos";
import { icons } from "@/constant/technologies";

const projectsActive = [
  {
    id: 1,
    image: images.PittyFinder,
    title: "Pitty Finder",
    description: [icons.javascript, icons.html, icons.css, icons.react],
    link: "https://pitty-finder.vercel.app/",
    github:
      "https://github.com/LeonardoCaml/Pitty-Finder/tree/main/pitty-finder",
  },
  {
    id: 2,
    image: images.CodeLearner,
    title: "CodeLearn",
    description: [
      icons.javascript,
      icons.html,
      icons.css,
      icons.react,
      icons.styledComponents,
    ],
    link: "https://blog-code-learner.vercel.app/",
    github: "https://github.com/LeonardoCaml/blog",
  },
  {
    id: 3,
    image: images.SiteXbox,
    title: "Xbox Series X",
    description: [
      icons.javascript,
      icons.html,
      icons.css,
      icons.next,
      icons.tailwind,
    ],
    link: "https://landing-page-xbox.vercel.app/",
    github: "https://github.com/LeonardoCaml/landing-page-xbox",
  },
];

export default function Drafts() {
  return (
    <div className="min-h-svh h-fit flex flex-col items-center justify-evenly">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-2 md:mb-10">
        Projetos
      </h1>
      <Container
        maxWidth="lg"
        className="grid md:grid-cols-2 justify-center gap-16 my-10"
      >
        {projectsActive.map((props) => (
          <Project
            key={props.id}
            id={props.id}
            image={props.image}
            title={props.title}
            description={props.description}
            github={props.github}
            link={props.link}
          />
        ))}
      </Container>
    </div>
  );
}
