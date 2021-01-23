import fs from 'fs'
import path from 'path'
import Page from 'components/Page'
import Testimonials from 'components/Testimonials'

export const meta = {
    title: 'Testimonials',
    description: "I'm lucky to have collaborated with so many excellent professionals over the years; here are some of their thoughts on my work. These have been edited for brevity and the complete recmmendations can be found on my LinkedIn profile.",
    image: 'group.jpg',
    author: {
        twitter: '@therealpadams'
    }
}

export default function TestimonialsPage({ testimonials }) {
    return (
        <Page meta={meta}>
            <Testimonials data={testimonials} />
        </Page>
    )
} 

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data/testimonials.json')
	const rawData = fs.readFileSync(filePath)
	const testimonials = JSON.parse(rawData)['testimonials']

	return {
		props: {
			testimonials
		}
	}
}