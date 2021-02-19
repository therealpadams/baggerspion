export default function InstagramFeed({ instagramPosts }) {
    return (
        <>            
            <div className="flex w-full overflow-scroll">
                {instagramPosts.map(post =>
                    <img
                        className="grayscale"
                        src={post.node.thumbnail_resources[0].src}
                        width={180}
                        height={180}
                    />
                )}
            </div>
        </>
    )
}