export default function Youtube({ id }) {
    return (
        <iframe className="w-full h-80" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allowFullScreen></iframe>
    )
}