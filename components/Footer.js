import Link from 'next/link'
import SocialLinks from 'components/SocialLinks'

export default function Footer() {
    return (
        <footer className="flex flex-col border-t border-gray-300 mt-8">
            <div className="px-6 md:px-12 flex flex-row justify-between items-center py-8">
                <span className="text-sm">© 2021 Paul Adams. <Link href="https://creativecommons.org/licenses/by-sa/4.0/"><a target="_blank" className="hover:text-yellow-500">CC-BY-SA</a></Link></span>
                <SocialLinks />
            </div>
        </footer>
    )
}
