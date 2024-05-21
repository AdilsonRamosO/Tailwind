import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        adilson: '#8257e6'
      }
    }
  },
  plugins: [],
};
export default config;
