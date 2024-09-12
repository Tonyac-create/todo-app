/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryBrightBlue: "hsl(220, 98%, 61%)",
        LTLightGray: "hsl(0, 0%, 98%)",
        LTVeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LTLightGrayishBlue: "hsl(233, 11%, 84%)",
        LTDarkGrayishBlue: "hsl(236, 9%, 61%)",
        LTVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        DTDarkGrayBlue: "hsl(235, 21%, 11%)",
        DTVeryDarkDesaturedBlue: "hsl(235, 24%, 19%)",
        DTLightGrayishBlue: "hsl(234, 39%, 85%)",
        DTLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        DTDarkGrayishBlue: "hsl(234, 11%, 52%)",
        DTVeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        linearGradient1: "hsl(192, 100%, 67%)",
        linearGradient2: "hsl(280, 87%, 65%)",
      },
    },
  },
  plugins: [],
};
