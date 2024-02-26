import type { TailwindColor } from "@/types/tailwind";

export interface Theme {
  colors: {
    primary: TailwindColor;
    blur: {
      top: TailwindColor;
      bottom: TailwindColor;
    };
  };
};

export interface Skill {
  title: string;
  techs: string[];
};

export interface Social {
  label: string;
  link: string;
};

export interface Presentation {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

export interface Project {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

export interface Certification extends Project {}
