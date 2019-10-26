import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Varela Round",
      styles: [],
    },
    {
      name: "Open Sans",
      styles: [],
    },
  ],
  headerFontFamily: ["Varela Round", "sans-serif"],
  bodyFontFamily: [
    "Open Sans",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
})

export default typography
