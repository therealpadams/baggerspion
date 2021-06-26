import Archive from 'components/sections/home/Archive'
import Head from 'next/head'
import Hero from 'components/sections/home/Hero'
import Gallery from 'components/sections/home/Gallery'
import Intro from 'components/sections/home/Intro'
import Layout from 'components/layouts/primary/Primary'
import Quote from 'components/sections/home/Quote'

export default function Home() {
    const meta = {
        title: 'Home',
        image: 'paul.webp',
        description: 'The website of Paul Adams; an engineering lead based in Berlin.',
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
                <Hero />
                <div className="grid grid-cols-1 gap-y-12 py-12 px-6">
                    <Intro />
                    <Archive />
                    <Quote />
                    <Gallery />
                </div>
            </Layout>
        </>
    )
}