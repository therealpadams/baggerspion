import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Testimonial({ data }) {
    return (
        <div className="flex flex-col pt-8">
            <div>
                <span className="text-yellow-500 text-2xl inline mr-4">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                <p className="prose inline">{data.content}</p>
            </div>
            <div className="flex flex-col pt-6">
                <Image
                    className="block rounded-full"
                    src={`/assets/testimonials/${data.image}`}
                    width={65}
                    height={65}
                    layout="fixed"
                />
                <span className="font-bold text-sm">{data.name}</span>
                <span className="text-sm">{data.affilliation}</span>
            </div>
        </div>
    )
}