export default function Slides({ url }) {
    return (
        <div className="left-0 w-full h-0 relative pb-96">
            <iframe src={url} className="border-0 top-0 left-0 w-full h-full absolute" allowFullScreen scrolling="no" allow="encrypted-media"></iframe>
        </div>
    )
}