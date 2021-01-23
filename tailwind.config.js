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
                        },
                    },
                },
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
    ],
}