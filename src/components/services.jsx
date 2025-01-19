import React from 'react'
import { Hexagon, Triangle, Box, MoreHorizontal } from 'lucide-react'

const ServiceCard = ({ title, description, icon: Icon, dark }) => (
    <div className={`flex flex-col items-center justify-center text-center p-6 ${dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {Icon && <Icon className={`w-12 h-12 mb-4 ${dark ? 'text-white' : 'text-gray-900'}`} />}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href="/comingSoon" className={`inline-flex items-center ${dark ? 'text-white' : 'text-gray-900'}`}>
            READ MORE
            <MoreHorizontal className="ml-2" />
        </a>
    </div>
)

export default function Services() {
    const services = [
        {
            title: "Design & Planning",
            description: "We will help you to get the result you dreamed of.",
            icon: Hexagon,
            dark: false
        },
        {
            title: "Custom Solutions",
            description: "Individual, aesthetically stunning solutions for customers.",
            icon: Triangle,
            dark: true
        },
        {
            title: "Furniture & Decor",
            description: "We create and produce our product design lines.",
            icon: Box,
            dark: false
        },
        {
            title: "Custom Solutions",
            description: "Individual, aesthetically stunning solutions for customers.",
            icon: Triangle,
            dark: true
        }
    ]

    return (
        <div id='services' className="container mx-auto px-4 py-16">
            <div className="text-center mb-12 motion-translate-y-in-100 motion-duration-2000">
                <span className="text-sm uppercase text-gray-500 mb-2 block ">OUR SERVICES</span>
                <h2 className="text-4xl font-bold text-gray-700">What Can We Offer</h2>
                <div className="w-16 h-1 bg-gray-900 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        dark={service.dark}
                    />
                ))}
            </div>
        </div>
    )
}