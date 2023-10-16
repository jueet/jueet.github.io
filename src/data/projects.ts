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
    techs: ["Astro", "Vanilla CSS"],
    link: "https://github.com/MrOlivo/Brutalism-UI",
  },
  {
    title: "Portfolio / Personal",
    techs: ["Astro", "Tailwind"],
    link: "/",
  },
  {
    title: "Portfolio / Kawaii web",
    techs: ["Next.js", "Tailwind"],
    link: "/",
    isComingSoon: true
  },
];

export default projects;
