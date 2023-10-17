export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Extension / Manga Mexico",
    techs: ["React", "TypeScript", "Raycast"],
    link: "https://www.raycast.com/mrolivo/manga-calendar",
  },
  {
    title: "Portfolio / Brutalism Concept Website",
    techs: ["Astro", "CSS3"],
    link: "https://github.com/MrOlivo/Brutalism-UI",
  },
  {
    title: "Portfolio / Personal",
    techs: ["Astro", "Tailwind"],
    link: "/",
  },
  {
    title: "Portfolio / Jokes",
    techs: ["Laravel", "Bootstrap"],
    link: "https://github.com/MrOlivo/bromas-laravel",
  },
  {
    title: "Portfolio / Password Generator",
    techs: ["React", "CSS3"],
    link: "https://github.com/MrOlivo/password-generator",
  },
];

export default projects;
