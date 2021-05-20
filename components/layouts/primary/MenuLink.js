import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function MenuLink({ href, children }) {
    const router = useRouter()
    let className = children.props.className || ''
    
    if (router.pathname.includes(href)) {
        className = `${className} text-yellow-500 cursor-default`
    } else {
        className = `${className} text-black hover:text-yellow-500`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}