/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    // block all animations
    blocklist: [
        "animate-spin",
        "animate-ping",
        "animate-pulse",
        "animate-bounce",
        
    ]
}

