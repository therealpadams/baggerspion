import Year from 'components/Year'
import { years } from 'lib/getAllYears'

export default function Archive() {
    return (
        <>
            <h2>Archive</h2>
            {years.map(year =>                           
                <Year year={year} />
            )}
        </>
    )
}