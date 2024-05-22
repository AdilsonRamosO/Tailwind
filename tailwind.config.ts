import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.tsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        adilson: '#8257e6'
      }
    }
  },
  plugins: [],
};
export default config;
