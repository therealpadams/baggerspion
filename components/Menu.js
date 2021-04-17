import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link' 
import MenuLink from './MenuLink'
import SocialLinks from 'components/SocialLinks'
import { useState } from 'react'

export default function Menu() {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);
    }

    return (
        <nav className="flex justify-between md:items-center px-6 py-4 border-b border-gray-300">
            <div className="md:flex md:justify-between md:w-full">
                <Link href="/">
                    <a className="font-semibold text-2xl hover:text-yellow-500">Baggerspion.</a>
                </Link>
                <nav className={showMe ? "grid grid-cols-1 md:flex md:space-x-4 md:items-center" : "hidden md:flex md:space-x-4 md:pt-2"}>
                    <MenuLink href="/blog"><a onClick={toggle} className="pt-2 md:pt-0 text-sm">Blog</a></MenuLink>
                    <MenuLink href="/presentations"><a onClick={toggle} className="text-sm">Presentations</a></MenuLink>
                    <MenuLink href="/testimonials"><a onClick={toggle} className="text-sm">Testimonials</a></MenuLink>
                    <MenuLink href="/about"><a onClick={toggle} className="text-sm pr-4 pb-4 md:pb-0">About</a></MenuLink>
                    <SocialLinks />
                </nav>
            </div>
            <div className="md:hidden">
                <button onClick={toggle} type="button" className="focus:outline-none pt-1">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    )    
}