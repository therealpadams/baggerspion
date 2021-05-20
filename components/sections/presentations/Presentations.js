import Presentation from 'components/sections/presentations/Presentation'

export default function Presentations({ data }) {
    return (
        <div className="grid grid-cols-1 divide-y divide-gray-300">
            {data.map(presentation =>
                <Presentation key={presentation.title} data={presentation} />
            )}
        </div>
    )
}