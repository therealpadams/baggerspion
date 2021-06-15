import Card from './Card'
import Link from 'next/link'
import { posts } from 'lib/getAllPosts'

export default function Archive({ start = 3, end = 9}) {
    return (
        <section className="mx-auto prose px-6 w-full">
            <h2>Older Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {posts.slice(start, end).map(post => (
                    <Card key={post.module.meta.title} article={post} />
                ))}
            </div>
            <p className="text-right">
                <Link href="/blog">
                    <a>Read more here →</a>
                </Link>
            </p>
        </section>
    )
}