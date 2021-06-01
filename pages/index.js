import Archive from 'components/sections/home/Archive'
import Head from 'next/head'
import Hero from 'components/sections/home/Hero'
import Instagram from "instagram-web-api"
import Gallery from 'components/sections/home/Gallery'
import Intro from 'components/sections/home/Intro'
import Layout from 'components/layouts/primary/Primary'
import { posts } from 'lib/getAllPosts'

export default function Home({ instagramPosts }) {
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
                <Archive posts={posts.slice(3, 9)} />
                <Gallery posts={instagramPosts} />
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    const client = new Instagram({
        username: process.env.IG_USERNAME,
        password: process.env.IG_PASSWORD,
    })
    
    let posts = []
    try {
        await client.login()
        
        const instagram = await client.getPhotosByUsername({
            username: process.env.IG_USERNAME,
        })
    
        if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
            posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
        }
      } catch (err) {
        console.log("Something went wrong while fetching content from Instagram", err)
      }
    
      return {
        props: {
            instagramPosts: posts,
        },
    }
}