import { buildUrl } from 'cloudinary-build-url';
import DateFormatter from 'components/DateFormatter'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ article }) {
    const url = buildUrl(`covers/${article.module.meta.image}`, {
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
        <article className="flex flex-col">
            <div className="relative w-full h-36">
                <Image
                    src={url}
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

