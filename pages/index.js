import Archive from 'components/sections/home/Archive'
import Head from 'next/head'
import Hero from 'components/sections/home/Hero'
import Gallery from 'components/sections/home/Gallery'
import Intro from 'components/sections/home/Intro'
import Layout from 'components/layouts/primary/Primary'
import { posts } from 'lib/getAllPosts'
import Quote from 'components/sections/home/Quote'

import fs from 'fs'
import path from 'path'

export default function Home({ testimonial }) {
    const meta = {
        title: "Home",
        image: "paul.webp",
        description: "The website of Paul Adams; an engineering lead based in Berlin.",
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
                <div className="grid grid-cols-1 gap-y-12 py-12">
                    <Intro />
                    <Archive posts={posts.slice(3, 9)} />
                    <Quote data={testimonial} />
                    <Gallery />
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
	const filePath = path.join(process.cwd(), 'data/testimonials.json')
	const rawData = fs.readFileSync(filePath)
	const testimonials = Array.from(JSON.parse(rawData)['testimonials'])
    const rn = Math.floor(Math.random() * testimonials.length)

	return {
		props: {
			testimonial: testimonials[rn]
		}
	}
}