import Archive from 'components/sections/blog/Archive'
import Page from 'components/layouts/page/Page'
import RecentPosts from 'components/sections/blog/RecentPosts'

export const meta = {
    title: 'Blog',
    description: 'Baggerspion is the much-neglected blog of Paul Adams with the ocassional guest post. Baggerspion is a blog on software engineering leadership and culture.',
    image: 'writing.webp',
    author: {
        twitter: '@therealpadams'
    }
}

export default function BlogPage() {
    return (
        <Page meta={meta}>
            <RecentPosts />
            <Archive />
        </Page>
    )
}