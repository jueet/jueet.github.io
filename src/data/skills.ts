export type Skill = {
    title: string;
    techs: string[];
  };
  
  const skills: Skill[] = [
    {
      title: "Programming Languages",
      techs: ["js", "ts", "cs", "java", "php"],
    },
    {
      title: "Frameworks and Libraries",
      techs: ["bootstrap", "nodejs", "react", "laravel", "astro", "tailwind"],
    },
    {
      title: "Data Base Management Systems",
      techs: ["mysql"],
    },
    {
      title: "Tools",
      techs: ["vscode", "idea", "figma", "linux"],
    },
  ];
  
  export default skills;
  