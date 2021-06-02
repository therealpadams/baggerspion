import Figure from 'components/Figure'
import Layout from 'components/layouts/primary/Primary'
import { MDXProvider } from '@mdx-js/react'
import PageHeader from './Header'

export default function Page({ meta, children }) {
    const components = {
        img: Figure
    }

    return (
        <Layout meta={meta}>
            <div className="px-6 pt-8 pb-12 prose mx-auto">
                <PageHeader meta={meta} />
                <MDXProvider components={components}>
                    {children}
                </MDXProvider>
            </div>
        </Layout>
    )
}