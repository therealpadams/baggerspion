import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function HeroBlock(props) {
    return (
        <div className="hero relative bg-center bg-no-repeat bg-cover" style={{height: '500px', backgroundImage: `url('${props.coverImage}')`}}>
            <div className="label bottom-0 absolute w-full bg-black opacity-75 px-4 md:px-8 py-4">
                <h3 className="text-white font-bold text-xl md:text-2xl lg:text-5xl xl:text-6xl">
                    <Link href={`/posts/${props.link}`}>
                        <a className="hover:text-orange-500">{props.title}</a>
                    </Link>
                </h3>
                <div className="text-white text-base">
                    <DateFormatter dateString={props.date} /> 
                </div>
            </div>
        </div>
    )
}