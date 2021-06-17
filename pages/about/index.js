import Companies from 'components/sections/about/Companies'
import fs from 'fs'
import Link from 'next/link'
import Page from 'components/layouts/page/Page'
import path from 'path'

export const meta = {
    title: 'About',
    description: 'Paul Adams is an engineering lead based in Berlin.',
    image: 'paul.webp',
    author: {
        twitter: '@therealpadams'
    }
}

export default function AboutPage({ companies }) {
    return (
        <Page meta={meta}>
            <p>
                Baggerspion started out as a blog called &quot;Green Eggs and Ham&quot; in about 2004 when I wanted to write about
                the early results coming out of my research into Free Software productivity. Content so terrible, even
                the Wayback Machine could not be bothered to archive it.
            </p>
            <p>
                Since moving to Germany, Baggerspion has becomed focused on engineering leadership and engineering culture,
                with some infrequent posts on life in Berlin. It has had a visual update prety much every time I found
                myself switching jobs. But the content is staler than that single slice of bread at the back of the 
                cupbpard.
            </p>
            <h2>What&apos;s In A Name?</h2>
            <p>
            &quot;Baggerspion&quot; is a <Link href="https://archive.nytimes.com/www.nytimes.com/interactive/2013/10/12/opinion/international/20131011_Schott.html"><a>fictional German word</a></Link> from the mind of Ben Schott. I find that it describes my attitude
                towards engineering teams quite well.
            </p>
            <h2>Biography</h2>
            <p>
                Paul Adams is a senior engineering leader based in Berlin. He draws upon both academic and industrial backgrounds.
                Notably, Paul has been active in Open Source since the late 90s, having contibuted to Zope/Plone, CrateDB,
                Postgres and, most notably, KDE. Paul is a Fellow of the FSFE and the Openforum Academy.
            </p>
            <p>
                Paul began his career as an academic, obtaining both BSc and PhD in the UK. Since joining industry he has
                focused on engineering leadership and culture, with a focus on agility. Paul has worked for many 
                internationally-renowned companies, particularly in ecommerce: Zalando, Wayfair and Scout24 Group.
            </p>
            <p>
                Today, Paul is Managing Director for Vercel&apos;s German subsidiary. Taking care of all legal/regulatory compliance and
                ensuring smooth day-to-day business operations for a small team of engineers and product managers in Berlin.
            </p>
            <Companies data={companies} />
        </Page>
    )
}

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), 'data/companies.json')
	const rawData = fs.readFileSync(filePath)
	const companies = JSON.parse(rawData)['companies']

	return {
		props: {
			companies
		}
	}
}