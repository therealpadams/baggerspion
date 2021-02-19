import Head from 'next/head'
import Hero from 'components/Hero'
import Instagram from "instagram-web-api"
import InstagramFeed from 'components/InstagramFeed'
import Intro from 'components/Intro'
import Layout from 'components/Layout'
import { posts } from 'lib/getAllPosts'

export default function Home({ instaPosts }) {
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
                <InstagramFeed instagramPosts={instaPosts} />
            </Layout>
        </>
    )
}

export async function getStaticProps(context) {
    const client = new Instagram({
        username: process.env.IG_USERNAME,
        password: process.env.IG_PASSWORD,
    })

    let posts= []
    try {
        await client.login()
        const instagram = await client.getPhotosByUsername({
            username: process.env.IG_USERNAME
        })

        if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
            posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
        }
    } catch (err) {
        console.log(
            "Something went wrong while fetching content from Instagram",
            err
        )
    }

    return {
        props: {
            instaPosts: posts,
        }
    }
}