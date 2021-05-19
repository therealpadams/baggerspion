import Container from 'components/Container'
import Figure from 'components/Figure'
import Head from 'next/head'
import Layout from 'components/layouts/Layout'
import { MDXProvider } from '@mdx-js/react'
import PageHeader from 'components/PageHeader'
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

                <meta property="og:url"         content={`https://baggerspion.therealpadams.vercel.app${router.pathname}`} key="ogurl" />
                <meta property="og:type"        content="article" />
                <meta property="og:title"       content={meta.title} key="ogtitle" />
                <meta property="og:description" content={meta.description} key="ogdesc" />
                <meta property="og:image"       content={`https://baggerspion.therealpadams.vercel.app/assets/cover/${meta.image}`} key="ogimage" />
                <meta property="og:site_name"   content="Baggerspion" key="ogsitename" />

                <title>{`Baggerspion: ${meta.title}`}</title>
            </Head>
            <Layout>
                <PageHeader meta={meta} />
                <Container>
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </Container>
            </Layout>
        </>
    )
}