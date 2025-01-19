import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import logo from '../../public/Images/logo2.jpg'

export default function Header() {
    return (
        // Change this header to transparent header and text color to black on normal and bold on hover. Also capitalize the text
        <div className="absolute w-full top-0 z-10">
            <header className="bg-transparent text-gray-900 py-4">
                <div className="flex container mx-auto px-4 justify-between items-center">
                    <Link href="/" className="text-3xl font-bold flex items-center gap-5">
                        {/* <span><Image src={logo} width={40} alt='CurveAngle Logo' /></span> */}
                        <span>
                            CurveAngle
                        </span>
                    </Link>
                    <nav>
                        <ul className="flex space-x-6 uppercase text-md font-semibold">
                            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                            <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
                            <li><Link href="#services" className="hover:text-gray-400">Services</Link></li>
                            <li><Link href="#portfolio" className="hover:text-gray-400">Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}