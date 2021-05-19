import { faFacebook, faLinkedin, faReddit, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Shares() {
    return (
        <div className="flex space-x-6 text-lg">
            <Link href="#">
                <a><FontAwesomeIcon icon={faFacebook} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon icon={faLinkedin} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon icon={faReddit} /></a>
            </Link>
            <Link href="#">
                <a><FontAwesomeIcon icon={faTwitter} /></a>
            </Link>
        </div>
    )
}