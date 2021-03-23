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
    extend: {
      gridTemplateRows: {
        2: "repeat(2, auto)",
      },
      gridTemplateColumns: {
        2: "repeat(2, minmax(0, 1fr))",
        "2/3": "2fr 3fr",
        "3/1": "3fr 1fr",
      },
      borderRadius: {
        xl2: "2rem",
        xl4: "4rem",
      },
      borderWidth: {
        1: "0.1rem",
      },
      width: {
        1: "1px",
      },
      height: {
        full: "100%",
        1: "1px",
      },
      minHeight: {
        1: "1px",
      },
      minWidth: {
        1: "1px",
        64: "16rem",
      },
      maxHeight: {
        "1/3": "33.333333%",
        "6/10": "60%",
      },
      inset: {
        "15p": "15%",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      gridRow: ["children-first"],
      inset: ["even"],
    },
  },
  plugins: [require("tailwindcss-children")],
}
