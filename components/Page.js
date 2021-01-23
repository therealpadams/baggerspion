import Container from 'components/Container'
import Figure from 'components/Figure'
import Head from 'next/head'
import Header from 'components/Header'
import Layout from 'components/Layout'
import { MDXProvider } from '@mdx-js/react'
import { useRouter } from 'next/router'

export default function BlogPostLayout({ meta, children }) {
    const components = {
        img: Figure
    }
    const router = useRouter()
    const domain = router.asPath

    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary" key="twcard" />
                <meta name="twitter:creator" content={meta.author.twitter} key="twhandle" />

                <meta property="og:url" content={domain} key="ogurl" />
                <meta property="og:image" content={`${router.pathname}/assets/cover/${meta.image}`} key="ogimage" />
                <meta property="og:site_name" content="Baggerspion" key="ogsitename" />
                <meta property="og:title" content={meta.title} key="ogtitle" />
                <meta property="og:description" content={meta.description} key="ogdesc" />

                <title>{`Baggerspion: ${meta.title}`}</title>
            </Head>
            <Layout>
                <Header meta={meta} />
                <Container>
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </Container>
            </Layout>
        </>
    )
}