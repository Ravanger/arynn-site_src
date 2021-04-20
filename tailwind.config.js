module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
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
      keyframes: {
        growDown: {
          "0%": { maxHeight: 0, opacity: 0 },
          "100%": { maxHeight: "100vh", opacity: 1 },
        },
        scaleExpandOut: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        scaleExpandIn: {
          to: { transform: "scale(1)" },
          from: { transform: "scale(1.1)" },
        },
      },
      animation: {
        growDown: "growDown 300ms ease-in-out forwards",
        scaleExpandIn: "scaleExpandIn 60ms ease-in-out forwards",
        scaleExpandOut: "scaleExpandOut 60ms ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      gridRow: ["children-first"],
      inset: ["even"],
      animation: ["hover", "group-hover"],
      position: ["children"],
    },
  },
  plugins: [require("tailwindcss-children")],
}
