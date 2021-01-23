import Testimonial from 'components/Testimonial'

export default function Testimonials({ data }) {
    return (
        <div className="grid grid-cols-1 gap-8">
            {data.map(testimonial =>
                <Testimonial data={testimonial} />
            )}
        </div>
    )
}