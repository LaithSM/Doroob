module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            colors: {
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#657786',
                danger: '#E0245E',
                test: '#277b9d',
            },
            fontFamily: {
                sans: ['Helvetica', 'Arial', 'sans-serif'],
                serif: ['Georgia', 'Cambria', 'serif'],
                mono: ['SFMono-Regular', 'Menlo', 'monospace'],
                doroob: ["Doroob SSTArabic Roman", "sans-serif"],
                'akzidenz': ['Berthold Akzidenz Grotesk BE Regular', 'sans-serif'],  // Add your font here
            },
        },
    },
    variants: {},
    plugins: [],
}