import Container from 'components/Container'
import DateFormatter from './DateFormatter'
import Image from 'next/image'

export default function AuthorDetail({ author, date }) {
    return (
        <Container>
            <div className="flex flex-row space-x-4 items-center pb-12">
                <Image
                    className="block rounded-full"
                    src={`/assets/author/${author.avatar}`}
                    width={45}
                    height={45}
                    layout="fixed"
                />
                <div className="flex flex-col">
                    <span className="font-bold text-sm">by {author.name}</span>
                    <span className="text-sm"><DateFormatter dateString={date} /></span>
                </div>
            </div>
        </Container>
    )
}