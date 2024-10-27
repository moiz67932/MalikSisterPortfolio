import React from 'react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        title: "VERY PROFESSIONAL",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla..",
        name: "Daniel Steward",
        position: "CEO, Envato Industries",
        image: "/Images/Project2.jpg"
    },
    {
        id: 2,
        title: "DEDICATED SUPPORT",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla..",
        name: "Albert Flores",
        position: "CTO, Acme Co.",
        image: "/Images/Project2.jpg"
    },
    {
        id: 3,
        title: "CREATIVE DESIGN",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id, suscipit id nulla..",
        name: "Ariana McCoy",
        position: "Art Director, Designco",
        image: "/Images/Project2.jpg"
    }
]

export default function Testimonials() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">WHAT'S CLIENTS SAY</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md text-gray-700">
                        <h3 className="text-xl font-semibold mb-4">{testimonial.title}</h3>
                        <p className="text-gray-600 mb-6">{testimonial.content}</p>
                        <div className="flex items-center">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={50}
                                height={50}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}