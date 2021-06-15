import cx from 'clsx'
import DateFormatter from '../../DateFormatter'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from 'lib/getAllPosts'
import { useState } from 'react'
import { useInterval } from 'react-use'

export default function Hero({ count = 3, delay = 6500 }) {
    const [pointer, setPointer] = useState(1)
    const usePosts = posts.slice(0, count)

    // Advance the slide
    function nextHero() {
        pointer === count ? setPointer(1) : setPointer(pointer + 1)
    }

    // Retreat the slide
    function prevHero() {
        pointer === 1 ? setPointer(3) : setPointer(pointer - 1)
    }

    // Automatically advance the slide every {delay}
    useInterval(() => { nextHero() }, delay)

    return (
        <div style={{height: '400px'}} className="relative w-full">
            {usePosts.map((post, index) =>
                <div key={index} className={pointer == index + 1 ? "block" : "hidden"}>
                    <Image
                        src={`/covers/${post.module.meta.image}`}
                        className="grayscale"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute flex w-full h-full justify-center items-center z-10">
                        <div className="flex flex-col text-center bg-black bg-opacity-50 w-full py-4 px-24">
                            <Link href={`/blog${post.link}`}>
                                <a className="text-3xl font-bold text-white hover:text-yellow-500 opacity-100">{post.module.meta.title}</a>
                            </Link>
                            <span className="text-white font-thin text-lg pt-4"><DateFormatter dateString={post.module.meta.date} /> by {post.module.meta.author.name}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="absolute flex h-full items-center left-6 md:left-12 z-10 rounded-full">
                <button onClick={prevHero} type="button" className="block focus:outline-none text-yellow-500 opacity-50 hover:opacity-100 text-2xl">                        
                    <FontAwesomeIcon icon={faChevronCircleLeft} />
                </button> 
            </div> 
            <div className="absolute flex h-full items-center right-6 md:right-12 z-10">
                <button onClick={nextHero} type="button" className="block focus:outline-none text-yellow-500 opacity-50 hover:opacity-100 text-2xl">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                </button>
            </div>
            <ul className="absolute flex w-full justify-center space-x-6 list-style-none bottom-12">
                {usePosts.map((_post, index) => 
                    <li key={index} className="text-4xl inline-block z-10">
                        <button
                            onClick={() => setPointer(index + 1)}
                            className={cx("focus:outline-none", {
                                "text-yellow-500": pointer === index + 1,
                                "text-black": pointer !== index + 1
                            })}
                        >•</button>
                    </li>
                )}
            </ul>
        </div>
    )
}