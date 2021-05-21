import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "tailwindcss/tailwind.css"

fontawesomeConfig.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp
