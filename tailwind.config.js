const { faUnderline, faBorderNone } = require('@fortawesome/free-solid-svg-icons')

module.exports = {
    mode: 'jit',
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
                            "&:hover": {
                                color: "black",
                            },
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