import { buildUrl } from 'cloudinary-build-url'
import Image from 'next/image'
import Link from 'next/link'

export default function Figure(props) {
    const bw_url = buildUrl(`figures/${props.src}`, {
        cloud: {
            cloudName: 'baggerspion'
        },
        transformations: {
            effect: {
                name: 'grayscale'
            }
        }
    })
    const link_url = buildUrl(`figures/${props.src}`, {
        cloud: {
            cloudName: 'baggerspion'
        }
    })

    return (
        <figure>
            <div className="flex flex-col text-center">
                <div className="flex flex-row justify-center">
                    <Link href={link_url}>
                        <a>
                            <Image
                                src={bw_url}
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