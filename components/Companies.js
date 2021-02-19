import Image from 'next/image'

export default function Companies({ data }) {
    return (
        <>
            <h2>Organisations With Which I've Worked</h2>
            <div className="grid grid-cols-5 gap-4">
                {data.map(company =>
                    <Image
                        key={company.name}
                        className="grayscale"
                        width={70}
                        height={70}
                        layout="fixed"
                        src={`/assets/work/${company.logo}`}
                    />
                )}
            </div>
        </>
    )
}