import Image from 'next/image'
import Link from 'next/link'

export default function Card({ article }) {
    return (
        <article className="bg-gray-400 w-full h-24 rounded relative">
            <Image
                src={`/assets/cover/${article.module.meta.image}`}
                layout="fill"
                objectFit="cover"
            />
            <div className="flex flex-col p-4 h-full relative justify-between">
                <div className="flex-grow">
                    <Link className="w-2/3" href={`/blog${article.link}`}>
                        <a>
                            <span className="hover:text-yellow-500 font-bold text-lg">{article.module.meta.title}</span>
                        </a>
                    </Link>
                </div>
            </div>
        </article>
    )
}