import DateFormatter from 'components/DateFormatter'
import Image from 'next/image'

export default function AuthorDetail({ author, date }) {
    return (
        <div className="flex flex-row space-x-4 items-center">
            <Image
                className="block rounded-full grayscale"
                src={`/assets/author/${author.avatar}`}
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