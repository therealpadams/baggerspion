import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function MoreBlock(props) {
    return (
        <div className="more relative bg-center bg-no-repeat bg-cover" style={{height: '248px', backgroundImage: `url('${props.coverImage}')`}}>
            <div className="label top-0 absolute w-full bg-black opacity-75 px-8 py-4">
                <h3 className="text-white lg:text-base xl:text-lg">
                    <Link href={`/posts/${props.link}`}>
                        <a className="hover:text-orange-500">{props.title}</a>
                    </Link>
                </h3>
                <div className="text-white font-thin lg:text-sm xl:text-base">
                    <DateFormatter dateString={props.date} /> 
                </div>
            </div>
        </div>
    )
}