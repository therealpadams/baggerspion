import { buildUrl } from 'cloudinary-build-url'
import DateFormatter from 'components/DateFormatter'
import Image from 'next/image'

export default function AuthorDetail({ author, date }) {
    const url = buildUrl(`authors/${author.avatar}`, {
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
        <div className="flex flex-row space-x-4 items-center">
            <Image
                className="block rounded-full"
                src={url}
                width={45}
                height={45}
                layout="fixed"
                priority
            />
            <div className="flex flex-col">
                <span className="font-bold text-sm">by {author.name}</span>
                <span className="text-sm"><DateFormatter dateString={date} /></span>
            </div>
        </div>
    )
}