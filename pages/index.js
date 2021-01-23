import Head from 'next/head'
import Hero from 'components/Hero'
import Intro from 'components/Intro'
import Layout from 'components/Layout'
import { posts } from 'lib/getAllPosts'

export default function Home() {
    var morePosts = []
    posts.length > 9 ? morePosts = posts.slice(3, 9) : morePosts = posts.slice(3)

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