import DateFormatter from 'components/DateFormatter'
import { faCalendar, faLink, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Slides from 'components/Slides'

export default function Presentation({ data }) {
    return (
        <div className="py-8">
            <span className="block font-bold text-xl">{data.title}</span>
            <div className="flex space-x-2">
                <div>
                    <FontAwesomeIcon className="mr-2" icon={faCalendar} />
                    <DateFormatter dateString={data.date} />
                </div>
                <div>
                    <FontAwesomeIcon className="mx-2" icon={faMapMarker} />
                    {data.location}
                </div>
                <div>
                    <FontAwesomeIcon className="mx-2" icon={faLink} />
                    <Link href={data.web}><a>More Details</a></Link>
                </div>
            </div>                
            {data.slides 
            ? 
                <details className="pb-2">
                    <summary className="focus:outline-none">Slides</summary>
                    <Slides url={data.slides} />
                </details> 
            : <></>
            }
        </div>
    )
}