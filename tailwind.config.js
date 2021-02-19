const { faUnderline, faBorderNone } = require('@fortawesome/free-solid-svg-icons')

module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],  
    darkMode: false,
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            "text-decoration": "none",
                            "color": "#f59e0b",
                        },
                    },
                },
            },
        },
    },
    variants: {},
    plugins: [
        require('tailwind-filter-utilities'),
        require('@tailwindcss/typography'),
    ],
}