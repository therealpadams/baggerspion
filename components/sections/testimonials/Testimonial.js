import { buildUrl } from 'cloudinary-build-url';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Testimonial({ data }) {
    const url = buildUrl(`testimonials/${data.image}`, {
        cloud: {
            cloudName: 'baggerspion'
        },
        transformations: {
            effect: {
                name: 'grayscale'
            }
        }
    })

    return (
        <div className="flex flex-col pt-8">
            <div>
                <span className="text-yellow-500 text-2xl inline mr-4">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                </span>
                <p className="prose inline">{data.content}</p>
                <span className="text-yellow-500 text-2xl inline ml-4 align-bottom">
                    <FontAwesomeIcon icon={faQuoteRight} />
                </span>
            </div>
            <div className="flex flex-col pt-6">
                <Image
                    className="block rounded-full"
                    src={url}
                    width={65}
                    height={65}
                    layout="fixed"
                />
                <span className="font-bold text-sm block pt-2">{data.name}</span>
                <span className="text-sm">{data.affilliation}</span>
            </div>
        </div>
    )
}