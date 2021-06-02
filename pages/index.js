import Archive from 'components/sections/home/Archive'
import Head from 'next/head'
import Hero from 'components/sections/home/Hero'
import Gallery from 'components/sections/home/Gallery'
import Intro from 'components/sections/home/Intro'
import Layout from 'components/layouts/primary/Primary'
import { posts } from 'lib/getAllPosts'

export default function Home() {
    const meta = {
        title: "Home",
        image: "paul.webp",
        description: "The website of Paul Adams; an engineering leader based in Berlin.",
        author: {
            name: 'Paul Adams',
            avatar: 'paul.png',
            twitter: '@therealpadams'    
        }
    }

    return (
        <>
            <Head>
                <title>Baggerspion: Home</title>
            </Head>
            <Layout meta={meta}>
                <Hero posts={posts.slice(0, 3)} />
                <Intro />
                <Archive posts={posts.slice(3, 9)} />
                <Gallery />
            </Layout>
        </>
    )
}