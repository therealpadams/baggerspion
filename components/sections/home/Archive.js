import Card from './Card'
import Link from 'next/link'

export default function Archive({ posts }) {
    return (
        <section className="mx-auto prose px-6">
            <h2>Older Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {posts.map(post => (
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