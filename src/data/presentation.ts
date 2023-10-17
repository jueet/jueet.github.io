type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "edwin@olivo.moe",
  title: "Hi, I'm Edwin Olivo 👋",
  profile: "https://avatars.githubusercontent.com/u/46498127?v=4",
  description:
    "A *software developer* and well-known *bookworm*. I love new technologies, and I'm constantly looking for something interesting to play around with. If you've got something, let me know!",
  socials: [
    {
      label: "Behance",
      link: "https://behance.net/xconnect",
    },
    {
      label: "Bento",
      link: "https://bento.me/xconnect",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/edwin-olivo-garcia/",
    },
    {
      label: "GitHub",
      link: "https://github.com/MrOlivo",
    },
  ],
};

export default presentation;
