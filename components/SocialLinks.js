import { faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function SocialLinks() {
    return (
        <div className="flex flex-row space-x-4 prose">
            <Link href="https://www.linkedin.com/in/pauljadams/"><a target="_blank" className="text-sm hover:text-yellow-500"><FontAwesomeIcon icon={faLinkedinIn} /></a></Link>
            <Link href="https://github.com/therealpadams"><a target="_blank" className="text-sm hover:text-yellow-500"><FontAwesomeIcon icon={faGithub} /></a></Link>
            <Link href="https://twitter.com/therealpadams"><a target="_blank" className="text-sm hover:text-yellow-500"><FontAwesomeIcon icon={faTwitter} /></a></Link>
            <Link href="https://www.instagram.com/therealpadams/"><a target="_blank" className="text-sm hover:text-yellow-500"><FontAwesomeIcon icon={faInstagram} /></a></Link>
        </div>
    )
}