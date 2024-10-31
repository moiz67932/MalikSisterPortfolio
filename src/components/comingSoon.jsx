import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left side content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-blue-500 to-red-500 bg-clip-text text-transparent">
                            COMING
                            <br />
                            SOON!
                        </h1>
                        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                            We are currently working hard on this page
                            we will be back soon please visit again
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-gray-700 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors duration-300"
                        >
                            GO BACK HOME
                        </Link>
                    </div>

                    {/* Right side image */}
                    <div className="flex-1 relative">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gray-300 rounded-3xl transform rotate-3"></div>
                            <Image
                                src="/Images/logo.png"
                                alt="Baseball player with bat and ball"
                                width={600}
                                height={600}
                                className="relative z-10 rounded-3xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}