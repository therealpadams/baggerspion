import Presentation from 'components/Presentation'

export default function Presentations({ data }) {
    return (
        <>
            {data.map(presentation =>
                <Presentation key={presentation.title} data={presentation} />
            )}
        </>
    )
}