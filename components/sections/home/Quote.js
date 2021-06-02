import Testimonial from 'components/sections/testimonials/Testimonial'

export default function Quote({ data }) {
    return (
        <div className="border border-r-0 border-l-0 border-gray-300 bg-gray-100">
            <section className="mx-auto prose px-6 pb-10">
                <Testimonial data={data} />
            </section>
        </div>
    )
}