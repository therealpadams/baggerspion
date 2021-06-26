import Testimonial from 'components/sections/testimonials/Testimonial'
import useSWR, { cache } from 'swr'

export default function Quote() {
    // Fetch quote data once (and only once!)
    const quoteFetcher = url => fetch(url).then(_ => _.json())
    const { data } = useSWR('/api/quote', quoteFetcher, {
        revalidateOnMount: !cache.has('/api/quote'),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    return (
        <div className="border border-r-0 border-l-0 border-gray-300 bg-gray-100 -mx-6 px-6">
            <section className="mx-auto prose pb-10">
                {data ? <Testimonial data={data.quote} /> : <p>Loading...</p>}
            </section>
        </div>
    )
}