import React from 'react';
import Link from 'next/link';

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}

export default function Header() {
    return (
        <div className="absolute w-full top-0 z-10">
            <header className="bg-transparent py-4">
                <div className="flex justify-between items-center px-10 lg:px-20">
                    {/* Logo */}
                    <Link href="/" className="text-black text-3xl font-bold tracking-wide">
                        CurveAngle
                    </Link>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-8 uppercase text-sm font-medium text-black">
                            <li className="relative group">
                                <Link href="/" className="hover:text-gray-600">
                                    Home
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="#about" className="hover:text-gray-600">
                                    About Us
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="#services" className="hover:text-gray-600">
                                    Services
                                </Link>
                            </li>
                            <li className="relative group">
                                <Link href="#projects" className="hover:text-gray-600 flex items-center">
                                    Projects
                                    <span className="ml-1">▼</span>
                                </Link>
                                {/* Dropdown */}
                                <ul className="absolute hidden group-hover:block bg-white text-black text-sm space-y-2 mt-2 p-2 shadow-lg">
                                    <li>
                                        <Link href="#project1" className="hover:text-gray-600">
                                            Project 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#project2" className="hover:text-gray-600">
                                            Project 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <Link href="#pages" className="hover:text-gray-600 flex items-center">
                                    Pages
                                    <span className="ml-1">▼</span>
                                </Link>
                                {/* Dropdown */}
                                <ul className="absolute hidden group-hover:block bg-white text-black text-sm space-y-2 mt-2 p-2 shadow-lg">
                                    <li>
                                        <Link href="#page1" className="hover:text-gray-600">
                                            Page 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#page2" className="hover:text-gray-600">
                                            Page 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <Link href="#contact" className="hover:text-gray-600 flex items-center">
                                    Contact
                                    <span className="ml-1">▼</span>
                                </Link>
                                {/* Dropdown */}
                                <ul className="absolute hidden group-hover:block bg-white text-black text-sm space-y-2 mt-2 p-2 shadow-lg">
                                    <li>
                                        <Link href="#email" className="hover:text-gray-600">
                                            Email
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#location" className="hover:text-gray-600">
                                            Location
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}
