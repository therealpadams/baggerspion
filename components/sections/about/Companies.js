import { buildUrl } from 'cloudinary-build-url'
import Image from 'next/image'

export default function Companies({ data }) {
    const urls = data.map(company => {
        return buildUrl(`employers/${company.logo}`, {
            cloud: {
                cloudName: 'baggerspion'
            },
            transformations: {
                effect: {
                    name: 'grayscale'
                }
            }
        })
    })

    return (
        <>
            <h2>Organisations With Which I&apos;ve Worked</h2>
            <div className="grid grid-cols-5 gap-2">
                {data.map((company, index) => (
                    <Image
                        key={index}
                        width={120}
                        height={120}
                        src={urls[index]}
                        layout="responsive"
                    />
                ))}
            </div>
        </>
    )
}