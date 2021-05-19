import Head from 'next/head'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div className="flex flex-col h-screen">
                <Menu />
                <div className="flex-grow">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}