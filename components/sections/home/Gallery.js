import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
    let entries = []
    for(var i = 1; i < 13; ++i) {
        entries.push(
            <Image
                key={i}
                className="filter grayscale"
                src={`/instagram/${i}.jpg`}
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