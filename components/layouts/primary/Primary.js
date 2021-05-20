import Head from 'next/head'
import Footer from 'components/layouts/primary/Footer'
import Menu from 'components/layouts/primary/Menu'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div className="flex flex-col h-screen">
                <Menu />
                <div className="flex-grow w-full">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}