import Abstract from 'components/Abstract'
import { posts } from 'lib/getAllPosts'

export default function RecentPosts() {
    return (
        <>
            <h2>Recent Posts</h2>
            <div className="flex flex-col space-y-4">
                {[0,1,2].map(article =>
                    <Abstract meta={posts[article].module.meta} link={posts[article].link} />
                )}
            </div>
        </>
    )
}