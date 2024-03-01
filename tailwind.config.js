// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { withMaterialColors } = require('tailwind-material-colors');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default withMaterialColors(config, {
  primary : "#008bff"
})