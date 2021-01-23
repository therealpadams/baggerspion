import Abstract from 'components/Abstract'
import { posts } from '../lib/getAllPosts'

export default function Year({ year }) {
    const content = posts.filter(post => {
        return post.module.meta.date.substring(0, 4) == year
    })

    return (
        <details className="pb-2">
            <summary className="focus:outline-none">{year}</summary>
            <div className="flex flex-col space-y-4">
                {content.map(post =>
                    <Abstract meta={post.module.meta} link={post.link} />
                )}
            </div>
        </details>
    )
}