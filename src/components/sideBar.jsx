import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function SideBarSocialMedia() {
    return (
        <div className="fixed z-50 left-0 top-0 h-screen w-16 bg-gray-900 text-white flex flex-col items-center justify-between py-8">
            <div className="mt-28 -rotate-90 whitespace-nowrap text-sm tracking-wider">
                Curving Boudaries, Angle of Vision
            </div>
            <div className="flex flex-col space-y-6">
                <a href="#" className="hover:text-gray-300 transition-colors">
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
        </div>
    )
}