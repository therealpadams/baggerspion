import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }
    return (
        <header className="md:flex sm:justify-between md:items-center py-6 border-black border-t-2">
            <div className="flex items-center justify-between">
                <div>
                    <span className="font-semibold text-2xl hover:text-orange-500"><Link href="/">Baggerspion.</Link></span>            
                </div>
                <div className="md:hidden">
                    <button onClick={toggle} type="button" className="ml-8 block hover:text-orange-500 focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <nav className={ showMe ? "grid grid-cols-1 md:flex md:space-x-4 pt-2 md:pt-0" : "hidden md:flex md:space-x-4 pt-2 md:pt-0"}>
                <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500">About</a></Link>
                <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500">Blog</a></Link>
                <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500">Presentation</a></Link>
                <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500">Testimonials</a></Link>
                <div className="flex space-x-4 pt-4 md:pt-0 md:pl-4">
                    <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500"><FontAwesomeIcon icon={faLinkedinIn} /></a></Link>
                    <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500"><FontAwesomeIcon icon={faGithub} /></a></Link>
                    <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500"><FontAwesomeIcon icon={faTwitter} /></a></Link>
                    <Link href="#"><a onClick={toggle} className="text-sm hover:text-orange-500"><FontAwesomeIcon icon={faInstagram} /></a></Link>
                </div>
            </nav>
        </header>
    )
}

