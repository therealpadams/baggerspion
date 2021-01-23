import AuthorDetail from 'components/AuthorDetail'
import Container from 'components/Container'
import Image from 'next/image'

export default function Header({ meta }) {
    return (
        <>
            <Container>
                <h1 className="block pt-20">{meta.title}</h1>
                {meta.description ? <p className="italic">{meta.description}</p> : ""}
            </Container>
            <div style={{height: '300px'}} className="relative mt-12 mb-12">
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