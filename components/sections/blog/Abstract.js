import { buildUrl } from 'cloudinary-build-url'
import Image from 'next/image'
import DateFormatter from '../../DateFormatter'
import Link from 'next/link'

export default function Abstract({ link, meta }) {
    const url = buildUrl(`covers/${meta.image}`, {
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
        <div className="flex flex-row space-x-4">
            <div className="flex-shrink-0">
                <Image
                    src={url}
                    width={125}
                    height={70}
                    layout="fixed"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col">
                <Link href={`/blog${link}`}>
                    <a className="hover:text-yellow-500">
                        <span className="block font-bold text-xl">{meta.title}</span>
                    </a>
                </Link>
                <span className="block font-thin"><DateFormatter dateString={meta.date} /></span>
            </div>
        </div>
    )
}