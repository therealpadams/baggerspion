import Figure from 'components/Figure'
import Footnotes from 'components/sections/blog/Footnotes'
import Header from 'components/layouts/blog/Header'
import Layout from 'components/layouts/primary/Primary'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function BlogPost({ meta, children }) {
    const router = useRouter()
    const route = router.pathname.split('/')
    const slug = route[route.length - 1]
    
    useEffect(() => {
        const registerView = () =>
            fetch(`/api/views/${slug}`, {
            method: 'POST'
        })
    
        registerView();
    }, [slug])

    const components = {
        img: Figure,
        div: ({ children, className }) => {
            if (className === "footnotes") {
                const updatedFootnotes = children.map(child => {
                    if (child.props.originalType === "ol") {
                        const updatedNotes = child.props.children.map((note, index) => {
                            return (
                                <li key={index} id={note.props.id} className="text-sm">{note.props.children[0]} <Link href={note.props.children[1].props.href}><a className="text-black">▲</a></Link></li>
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
        <Layout meta={meta}>
            <div className="px-6 pt-8 pb-12 prose mx-auto">
                <Header meta={meta} />
                <MDXProvider components={components}>
                    {children}
                </MDXProvider>
            </div>
        </Layout>
    )
}