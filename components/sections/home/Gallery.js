import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery({ count = 12 }) {
    let entries = []
    for(var i = 1; i <= count; ++i) {
        const url = buildUrl(`instagram/${i}`, {
            cloud: {
                cloudName: 'baggerspion'
            },
            transformations: {
                effect: {
                    name: 'grayscale'
                }
            }
        })

        entries.push(
            <Image
                key={i}
                src={url}
                width={200}
                height={200}
                layout="responsive"
            />
        )
    }

    return (
        <section className="mx-auto prose px-6 w-full">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {entries}
            </div>
            <p className="text-right">
                <Link href="https://www.instagram.com/therealpadams/">
                    <a target="_blank">Find more cute puppies and food from above here →</a>
                </Link>
            </p>
        </section>
    )
}