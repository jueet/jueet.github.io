const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /shadow-(orange|violet|red|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|purple|fushia|pink|rose)-500/,
      variants: ["hover"]
    },
    {
      pattern: /border-(orange|violet|red|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|purple|fushia|pink|rose)-500/,
      variants: ["hover"]
    },
    {
      pattern: /text-(orange|violet|red|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|purple|fushia|pink|rose)-500/,
    },
    {
      pattern: /bg-(orange|violet|red|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|purple|fushia|pink|rose)-500/,
    }
  ]
};
