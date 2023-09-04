/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            Fraunces: "Fraunces",
            Belanosima: "Belanosima",
            Montserrat: "Montserrat",
            Roboto: "Roboto",
        },
    },
      plugins: [require("daisyui")],
}

