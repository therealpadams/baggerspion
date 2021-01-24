import Testimonial from 'components/Testimonial'

export default function Testimonials({ data }) {
    return (
        <div className="grid grid-cols-1 gap-8 divide-y divide-gray-300">
            {data.map(testimonial =>
                <Testimonial key={testimonial.name} data={testimonial} />
            )}
        </div>
    )
}