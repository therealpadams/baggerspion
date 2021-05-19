import Archive from 'components/Archive'
import Page from 'components/layouts/Page'
import RecentPosts from 'components/RecentPosts'

export const meta = {
    title: 'Blog',
    description: 'Baggerspion is the much-neglected blog of Paul Adams with the ocassional guest post. Baggerspion is a blog on software engineering leadership and culture.',
    image: 'writing.jpg',
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