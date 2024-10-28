import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Welcome() {
    return (
        <div id='about' className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center justify-center md:flex-row gap-8">
                <div className="md:w-1/4 ">
                    <Image
                        src="/Images/Project2.jpg"
                        alt="Modern multi-story glass building"
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-400">
                        WELCOME WE <span className="text-gray-800">ARE CURVEANGLE</span>
                    </h1>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions.
                        </p>
                        <p className="text-gray-600">
                            Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through design.
                        </p>
                    </div>
                    <div className="w-16 h-[0.3rem] bg-black rounded-full"></div>
                    <div className="space-y-4 text-gray-800">
                        <h2 className="text-2xl font-semibold">Our process</h2>
                        <div className="flex items-center space-x-4 text-gray-500">
                            <span className="">——</span>
                            <span className="">IDEA & CONCEPT</span>
                            <span className="">——</span>
                            <span className="">DESIGN & CREATE</span>
                            <span className="">——</span>
                            <span className="">BUILD & INSTALL</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                                <Link href="#portfolio">
                                    View our portfolio
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}