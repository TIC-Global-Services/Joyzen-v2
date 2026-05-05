'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const formattedDate = new Date().toISOString().split('T')[0]

const navLink = [
    {
        title: "About",
        href: "/about"
    },
    {
        title: "Products",
        href: "/products"
    },
    {
        title: "Who It is For",
        href: "/who-it-is-for"
    },
    {
        title: "How We Work",
        href: "/how-we-work"
    },
    {
        title: "Contact",
        href: "/contact"
    }
]

const NavBar = () => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='absolute md:top-10 px-[5%] top-6 md:left-0 left-4 md:right-0 right-4 z-50'>
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/orange_logo.svg" alt="Logo" width={147} height={44} className='w-25 h-10 lg:w-34 lg:h-10' />
                </Link>

                <div className='hidden md:flex items-center rounded-full p-1'>
                    {navLink.map((link, index) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                        return (
                            <Link 
                                href={link.href} 
                                key={index} 
                                className={`relative flex items-center justify-center rounded-full px-4 py-2 transition-all duration-300 ${isActive ? 'bg-[#00000033] text-black' : 'hover:bg-black/5'}`}
                            >
                                <span className='text-xs lg:text-base font-satoshi font-medium'>{link.title}</span>
                                {/* {isActive && (
                                    <span className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black animate-scaleIn' />
                                )} */}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <Link href={`https://calendly.com/joyzen-system/15min?date=${formattedDate}`} target='_blank'>
                        <button className='hidden  px-3 lg:px-6 md:flex gap-2 text-xs lg:text-base items-center justify-center py-1.5 lg:py-2.5 rounded-[2.625rem] border border-white/10 backdrop-blur-xs shadow-md font-satoshi font-medium bg-white/10  hover:bg-[#F9F9F9] transition-colors'>
                            Book Clarity Call 
                            <span><Image src="/nav-icon.svg" alt="Icon" width={18} height={18} /></span> 
                        </button>
                    </Link>
                    
                    <button 
                        className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-black/5 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] md:hidden overflow-hidden flex flex-col p-2 border border-white/50">
                    {navLink.map((link, index) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                        return (
                            <Link 
                                href={link.href} 
                                key={index} 
                                onClick={() => setIsMenuOpen(false)}
                                className={`relative flex items-center rounded-xl px-4 py-3 transition-all duration-300 ${isActive ? 'bg-black/5 text-black' : 'hover:bg-black/5 text-[#1A1A1A]/80'}`}
                            >
                                {isActive && (
                                    <span className='absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full bg-black' />
                                )}
                                <span className={`text-base font-satoshi ${isActive ? 'font-semibold' : 'font-medium'}`}>{link.title}</span>
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default NavBar
