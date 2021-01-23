import Image from 'next/image'
import Link from 'next/link'

export default function Figure(props) {
    return (
        <figure>
            <div className="flex flex-col text-center">
                <div className="flex flex-row justify-center">
                    <Link href={props.src}>
                        <a>
                            <Image
                                src={props.src}
                                width={500}
                                height={200}
                                objectFit='cover'
                            />
                        </a>
                    </Link> 
                </div>
                <figcaption>
                    <span className="text-sm">
                        {props.alt}
                    </span><br/>
                    <span className="text-sm font-thin">
                        Click image to enlarge.
                    </span><br/>
                </figcaption>
            </div>
        </figure>
    )
}