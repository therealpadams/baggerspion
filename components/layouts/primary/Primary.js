import { buildUrl } from 'cloudinary-build-url'
import Head from 'next/head'
import Footer from 'components/layouts/primary/Footer'
import Menu from 'components/layouts/primary/Menu'
import { useRouter } from 'next/router'

export default function Layout({ children, meta }) {
    const router = useRouter()
    const url = buildUrl(`covers/${meta.image}`, {
        cloud: {
            cloudName: 'baggerspion'
        },
        transformations: {
            effect: {
                name: 'grayscale'
            }
        }
    })

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />

                <meta name="twitter:card"       content="summary" key="twcard" />
                <meta name="twitter:creator"    content={meta.author.twitter} key="twhandle" />

                <meta property="og:url"         content={`https://baggerspion.net${router.pathname}`} key="ogurl" />
                <meta property="og:type"        content="article" />
                <meta property="og:title"       content={meta.title} key="ogtitle" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta property="og:image"       content={url} key="ogimage" />
                <meta property="og:site_name"   content="Baggerspion" key="ogsitename" />

                <title>{`Baggerspion: ${meta.title}`}</title>
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