/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#884A39",
        darkBrown: "#321E1E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      aspectRatio: {
        "3/2": "3/2",
        "2/3": "2/3",
      },
    },
  },
  plugins: [],
};
