import DateFormatter from 'components/DateFormatter'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ article }) {
    return (
        <article className="flex flex-col">
            <div className="relative w-full h-20">
                <Image
                    src={`/assets/cover/${article.module.meta.image}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="pt-1">
                <Link className="w-2/3" href={`/blog${article.link}`}>
                    <a>
                        <span className="font-bold">{article.module.meta.title}</span>
                    </a>
                </Link>
            </div>
            <span className="text-xs font-thin"><DateFormatter dateString={article.module.meta.date} /></span>
        </article>
    )
}

