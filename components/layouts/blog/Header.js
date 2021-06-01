import AuthorDetail from 'components/layouts/blog/AuthorDetail'
import Image from 'next/image'

export default function Header({ meta }) {
    return (
        <>
            <h1 className="block">{meta.title}</h1>
            {meta.author.name ? <AuthorDetail author={meta.author} date={meta.date} /> : ""}
            <hr />
            {meta.description ? <p className="italic pt-6">{meta.description}</p> : <></>}
            <div className="relative w-full h-96 my-8">
                <Image
                    src={`/covers/${meta.image}`}
                    className="grayscale"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
        </>
    )
}