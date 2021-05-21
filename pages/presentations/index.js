import fs from 'fs'
import Page from 'components/layouts/page/Page'
import path from 'path'
import Presentations from 'components/sections/presentations/Presentations'

export const meta = {
    title: 'Presentations',
    description: "Public speaking: not terrible at it, don't enjoy it. Frequently I allow myself to be talked into it, though. Before offering me speaking opportunities, please consider offering it to someone from an underrepresented group in tech.",
    image: 'speaking.webp',
    author: {
        twitter: '@therealpadams'
    }
}

export default function PresentationsPage({ presentations }) {
    return (
        <Page meta={meta}>
            <Presentations data={presentations} />
        </Page>
    )
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data/presentations.json')
	const rawData = fs.readFileSync(filePath)
	const presentations = JSON.parse(rawData)['presentations']

	return {
		props: {
			presentations
		}
	}
}