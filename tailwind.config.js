module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFF",
      pink: "#E27996",
      blue: {
        DEFAULT: "#1B8E8A",
        light: "#6CBEBB",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("postcss-import")],
}
