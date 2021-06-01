import Image from 'next/image'
import Link from 'next/link'

export default function Gallery({ posts }) {
    return (
        <section className="mx-auto prose px-6 pb-12">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            </div>
            <p className="text-right">
                <Link href="https://www.instagram.com/therealpadams/">
                    <a target="_blank">Find more cute puppies and food from above here →</a>
                </Link>
            </p>
        </section>
    )
}