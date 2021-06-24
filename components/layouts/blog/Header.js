import AuthorDetail from 'components/layouts/blog/AuthorDetail'
import { buildUrl } from 'cloudinary-build-url'
import Image from 'next/image'

export default function Header({ meta }) {
    const url = buildUrl(`covers/${meta.image}`, {
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
        <>
            <h1 className="block">{meta.title}</h1>
            {meta.author.name ? <AuthorDetail author={meta.author} date={meta.date} /> : ""}
            <hr />
            {meta.description ? <p className="italic pt-6">{meta.description}</p> : <></>}
            <div className="relative w-full h-96 my-8">
                <Image
                    src={url}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </>
    )
}