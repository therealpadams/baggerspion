import Figure from 'components/Figure'
import Head from 'next/head'
import Layout from 'components/layouts/primary/Primary'
import { MDXProvider } from '@mdx-js/react'
import PageHeader from './Header'
import { useRouter } from 'next/router'

export default function Page({ meta, children }) {
    const components = {
        img: Figure
    }
    const router = useRouter()

    return (
        <>
            <Head>
                <meta name="twitter:card"       content="summary" key="twcard" />
                <meta name="twitter:creator"    content={meta.author.twitter} key="twhandle" />

                <meta property="og:url"         content={`https://baggerspion.net${router.pathname}`} key="ogurl" />
                <meta property="og:type"        content="article" />
                <meta property="og:title"       content={meta.title} key="ogtitle" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta property="og:image"       content={`https://res.cloudinary.com/baggerspion/covers/${meta.image}`} key="ogimage" />
                <meta property="og:site_name"   content="Baggerspion" key="ogsitename" />

                <title>{`Baggerspion: ${meta.title}`}</title>
            </Head>
            <Layout>
                <div className="px-6 pt-8 pb-12 prose mx-auto">
                    <PageHeader meta={meta} />
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </div>
            </Layout>
        </>
    )
}