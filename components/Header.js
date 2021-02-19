import AuthorDetail from 'components/AuthorDetail'
import Image from 'next/image'

export default function Header({ meta }) {
    return (
        <>
            <h1 className="block pt-20">{meta.title}</h1>
            {meta.description ? <p className="italic">{meta.description}</p> : ""}
            <div className="relative w-full h-96 mt-12 mb-12">
                <Image
                    src={`/assets/cover/${meta.image}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            {meta.author.name ? <AuthorDetail author={meta.author} date={meta.date} /> : ""}
        </>
    )
}