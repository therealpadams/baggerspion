import Image from 'next/image'
import DateFormatter from './DateFormatter'
import Link from 'next/link'

export default function Abstract({ link, meta }) {
    return (
        <div className="flex flex-row space-x-4">
            <div className="flex-shrink-0">
                <Image
                    src={`/assets/cover/${meta.image}`}
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
                <span className="block font-thin">by {meta.author.name} / <DateFormatter dateString={meta.date} /></span>
            </div>
        </div>
    )
}