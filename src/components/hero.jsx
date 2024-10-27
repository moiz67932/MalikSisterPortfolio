import React from 'react'
import Image from 'next/image'

export default function Hero({
    heading = "CurveAngle",
    intro = "Curving Boudaries, Angle of Vision",
    backgroundImage = "/Images/HeroBg.jpeg"
}) {
    return (
        <div className="relative h-[80vh] min-h-[400px] flex items-center justify-left pl-[12%] overflow-hidden">
            <Image
                src={backgroundImage}
                alt="Hero background"
                layout="fill"
                objectFit="cover"
                priority
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 text-shadow">
                    {heading}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white text-shadow">
                    {intro}
                </p>
                <button className="bg-teal-400 text-white px-6 py-2 mt-2 rounded-full hover:bg-teal-600 transition-colors">
                    Read More
                </button>
            </div>
        </div>
    )
}