import Testimonial from 'components/sections/testimonials/Testimonial'

export default function Quote({ data }) {
    return (
        <div>
            <hr />
            <section className="mx-auto prose px-6 pb-10">
                <Testimonial data={data} />
            </section>
            <hr />
        </div>
    )
}