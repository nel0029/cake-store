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
        "4/5": "4/5",
        "1/2": "1/2",
        "2/1": "2/1",
        "8/7": "8/7",
      },
    },
  },
  plugins: [],
};
