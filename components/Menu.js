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
        <header className="px-6 md:flex justify-between items-center py-4 border-b border-gray-300">
            <div className="flex items-center">
                <div className="md:hidden mr-4">
                    <button onClick={toggle} type="button" className="block focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div>
                    <Link href="/"><a className="font-semibold text-2xl hover:text-yellow-500">Baggerspion.</a></Link>            
                </div>
            </div>
            <nav className={ showMe ? "grid grid-cols-1 md:flex md:space-x-4 pt-2 md:pt-0" : "hidden md:flex md:space-x-4 pt-2 md:pt-0"}>
                <MenuLink href="/blog"><a onClick={toggle} className="pt-2 md:pt-0 text-sm">Blog</a></MenuLink>
                <MenuLink href="/presentations"><a onClick={toggle} className="text-sm">Presentations</a></MenuLink>
                <MenuLink href="/testimonials"><a onClick={toggle} className="text-sm">Testimonials</a></MenuLink>
                <MenuLink href="/about"><a onClick={toggle} className="text-sm pr-4 pb-4 md:pb-0">About</a></MenuLink>
                <SocialLinks />
            </nav>
        </header>
    )    
}