/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-slide-4":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide-4": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
      },
    },
    fontFamily: {
      code: ["Source Code Pro", "monospace"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter", "synthwave"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    theme: "winter",
    darkTheme: "synthwave", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
