import DateFormatter from '../../DateFormatter'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero({ posts }) {
    const [pointer, setPointer] = useState(1)
    function nextHero() {
        if(pointer === 3) {
            setPointer(1)
        } else {
            setPointer(pointer + 1)
        }
    }
    function prevHero() {
        if(pointer === 1) {
            setPointer(3)
        } else {
            setPointer(pointer - 1)
        }
    }

    return (
        <div style={{height: '500px'}} className="relative w-full">
            {[0, 1, 2].map(position =>
                <div key={position} className={pointer == position + 1 ? "block" : "hidden"}>
                    <Image
                        src={`/covers/${posts[position].module.meta.image}`}
                        className="grayscale"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute flex w-full h-full justify-center items-center z-10">
                        <div className="flex flex-col text-center rounded bg-black bg-opacity-50 w-full py-4 px-24">
                            <Link href={`/blog${posts[position].link}`}>
                                <a className="text-3xl font-bold text-white hover:text-yellow-500 opacity-100">{posts[position].module.meta.title}</a>
                            </Link>
                            <span className="text-white font-thin text-lg pt-4"><DateFormatter dateString={posts[position].module.meta.date} /> by {posts[position].module.meta.author.name}</span>
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
                {[1, 2, 3].map(position => 
                    <li key={position} className="text-4xl inline-block z-10">
                        <button onClick={() => setPointer(position)} className={pointer === position ? "text-yellow-500 focus:outline-none" : "text-black focus:outline-none"}>•</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
