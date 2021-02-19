import AuthorDetail from 'components/AuthorDetail'
import Container from 'components/Container'
import Image from 'next/image'

export default function PageHeader({ meta }) {
    return (
        <>
            <div className="relative w-full h-96 mb-12">
                <Image
                    src={`/assets/cover/${meta.image}`}
                    className="grayscale"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <Container>
                <div className="pb-8">
                    <h1 className="block">{meta.title}</h1>
                    {meta.description ? <p className="italic">{meta.description}</p> : ""}
                    {meta.author.name ? <AuthorDetail author={meta.author} date={meta.date} /> : ""}
                </div>
            </Container>
        </>
    )
}