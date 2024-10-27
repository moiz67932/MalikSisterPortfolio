"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const projectsData = [
    { id: 1, category: 'interior', image: '/Images/P1.jpg', title: 'Airgo Office' },
    { id: 3, category: 'interior', image: '/Images/P3.jpg', title: 'Living Room Design' },
    { id: 2, category: 'architecture', image: '/Images/P2.png', title: 'Building Exterior' },
    { id: 4, category: 'exterior', image: '/Images/P4.jpg', title: 'Modern Building' },
    { id: 5, category: 'architecture', image: '/Images/P5.jpg', title: 'Diamond Supreme Foam' },
    { id: 6, category: 'exterior', image: '/Images/P6.jpg', title: 'Contemporary House' },
    { id: 7, category: 'furniture', image: '/Images/P7.png', title: 'Designer Chair' },
    { id: 8, category: 'construction', image: '/Images/P8.jpg', title: 'Construction Site' },
    { id: 9, category: 'furniture', image: '/Images/P9.jpeg', title: 'Modern Sofa' },
]

const categories = ['all', 'architecture', 'construction', 'exterior', 'furniture', 'interior']

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory)

    return (
        <div id='portfolio' className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">CHECK OUR LATEST WORKS</h2>

            <div className="flex justify-center mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`mx-2 px-4 py-2 text-sm font-medium ${activeCategory === category
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(0, 9).map((project) => (
                    <div key={project.id} className="group relative overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={300}
                            className="w-full h-auto transition-transform duration-300 group-hover:scale-110 rounded-lg group-hover:shadow-md "
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}