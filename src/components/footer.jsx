import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">CurveAngle</h3>
                        <p>Crafting the future of design</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-teal-400">Home</Link></li>
                            <li><Link href="/about" className="hover:text-teal-400">About</Link></li>
                            <li><Link href="/services" className="hover:text-teal-400">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-teal-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p>123 Design Street, Creativity City, 12345</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@curveangle.com</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 CurveAngle. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}