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
        4: "repeat(4, auto)",
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
        15: "0.15rem",
        "1/2": "0.5rem",
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
        16: "4rem",
      },
      minWidth: {
        1: "1px",
        64: "16rem",
      },
      maxHeight: {
        "1/3": "33.333333%",
        "6/10": "60%",
        "6/10-screen": "60vh",
      },
      maxWidth: {
        24: "6rem",
        32: "8rem",
        48: "12rem",
      },
      inset: {
        "15p": "15%",
      },
      padding: {
        0.5: "0.2rem",
      },
      flex: {
        "nochange-3/4": "0 0 75%",
        "nochange-full": "0 0 100%",
      },
      zIndex: {
        "-90": "-90",
      },
      backgroundImage: (theme) => ({
        clouds: "url('/images/clouds.png')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      gridRow: ["children-first"],
      inset: ["even"],
    },
  },
  plugins: [require("tailwindcss-children")],
}
