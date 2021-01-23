import { faFacebook, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Shares() {
    return (
        <div className="flex space-x-6 text-lg">
            <Link href="#">
                <a><FontAwesomeIcon className="hover:text-blue-800" icon={faFacebook} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon className="hover:text-blue-500" icon={faLinkedin} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon className="hover:text-red-500" icon={faReddit} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon className="hover:text-blue-400" icon={faTwitter} /></a>
            </Link>
        </div>
    )
}