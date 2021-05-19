import Container from 'components/Container'
import Figure from 'components/Figure'
import Footnotes from 'components/Footnotes'
import Head from 'next/head'
import Header from 'components/Header'
import Layout from 'components/Layout'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import { useRouter } from 'next/router'

export default function BlogPost({ meta, children }) {
    const router = useRouter()
    const components = {
        img: Figure,
        div: ({ children, className }) => {
            if (className === "footnotes") {
                const updatedFootnotes = children.map(child => {
                    if (child.props.originalType === "ol") {
                        const updatedNotes = child.props.children.map(note => {
                            return (
                                <li key={note.props.id} id={note.props.id} className="text-sm">{note.props.children[0]} <Link href={note.props.children[1].props.href}><a className="text-black">▲</a></Link></li>
                            )
                        })

                        return (
                            <ol>{updatedNotes}</ol>
                        )
                    }
                    return child
                })

                return (
                    <Footnotes>{updatedFootnotes}</Footnotes>
                )
            }
        }
    }

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
                <Container>
                    <Header meta={meta} />
                    <MDXProvider components={components}>
                        {children}
                    </MDXProvider>
                </Container>
            </Layout>
        </>
    )
}