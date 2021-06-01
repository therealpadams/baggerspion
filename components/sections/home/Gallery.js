import Image from 'next/image'
import Link from 'next/link'

export default function Gallery({ posts }) {
    return (
        <section className="mx-auto prose px-6 pb-12">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {posts.map(({ node }, i) => (
                    <Image
                        className="grayscale"
                        width={20}
                        height={20}
                        src={node.thumbnail_src}
                        alt={
                            node.edge_media_to_caption.edges[0].node.text
                            .replace(/(#\w+)+/g, "")
                            .trim()
                        }
                        layout="responsive"
                    />
                ))}
            </div>
            <p className="text-right">
                <Link href="https://www.instagram.com/therealpadams/">
                    <a target="_blank">Find more cute puppies and food from above here →</a>
                </Link>
            </p>
        </section>
    )
}