import Image from 'next/image'

export default function Companies({ data }) {
    return (
        <>
            <h2>Organisations With Which I've Worked</h2>
            <div className="grid grid-cols-5 gap-2">
                {data.map((company, index) => (
                    <Image
                        key={index}
                        className="grayscale"
                        width={120}
                        height={120}
                        src={`/employers/${company.logo}`}
                        layout="responsive"
                    />
                ))}
            </div>
        </>
    )
}