import Head from 'next/head'
import Hero from 'components/Hero'
import Intro from 'components/Intro'
import Layout from 'components/layouts/Layout'
import { posts } from 'lib/getAllPosts'

export default function Home() {
    const meta = {
        title: "Home"
    }

    return (
        <>
            <Head>
                <title>Baggerspion: Home</title>
            </Head>
            <Layout meta={meta}>
                <Hero posts={posts.slice(0, 3)} />
                <Intro />
            </Layout>
        </>
    )
}