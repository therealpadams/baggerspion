import Container from 'components/Container'
import Figure from 'components/Figure'
import Head from 'next/head'
import Header from 'components/Header'
import Layout from 'components/Layout'
import { MDXProvider } from '@mdx-js/react'

export default function BlogPostLayout({ meta, children }) {
    const components = {
        img: Figure
    }

    return (
        <>
            <Head>
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