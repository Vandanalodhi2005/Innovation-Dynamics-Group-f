/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-orange': '#df762b',
                'active-orange': '#ffa143',
            }
        },
    },
    plugins: [],
}
