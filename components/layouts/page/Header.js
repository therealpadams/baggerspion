import Image from 'next/image'

export default function PageHeader({ meta }) {
    return (
        <>
            <div className="relative w-full h-96 mb-12">
                <Image
                    src={`/covers/${meta.image}`}
                    className="grayscale"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className="pb-4">
                <h1 className="block">{meta.title}</h1>
                {meta.description ? <p className="italic">{meta.description}</p> : <></>}
            </div>
        </>
    )
}