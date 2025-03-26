export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,sass,scss}"],
  safelist: ['font-universal'],
  theme: {
    extend: {
      fontFamily: {
        universal: ['Universal Sans Display 380', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
