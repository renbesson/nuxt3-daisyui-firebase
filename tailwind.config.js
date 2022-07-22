/** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3b82f6",
          secondary: "#d1d5db",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#16a34a",
          warning: "#eab308",
          error: "#ef4444",
        },
      },
    ],
  },
  content: ["./{pages,components,layouts,plugins}/**/*.{vue,js,ts}", "app.vue"],
  plugins: [require("daisyui")],
  //...
};
