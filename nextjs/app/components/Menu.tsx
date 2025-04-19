'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="w-full 
                text-inherit 
                z-20 
                sm:relative
                sm:p-0
                sm:border-y-[15px]
                sm:bg-[url('/images/pattern-marble.webp')] 
                sm:bg-repeat">
            <nav id="navMenu" className={`fixed 
                flex 
                justify-center 
                items-center 
                top-0 
                left-0 
                w-full 
                h-full 
                bg-neutral-900/95 
                text-white 
                text-center
                duration-300
                ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
                sm:p-3
                sm:bg-[unset]
                sm:relative
                sm:translate-none
            `}>
                <ul className="space-y-10 sm:space-y-0 sm:flex sm:space-x-5">
                    <li><Link href="index.html" onClick={handleLinkClick} className="hover:text-neutral-300">Home</Link></li>
                    <li><Link href="#about-section" onClick={handleLinkClick} className="hover:text-neutral-300">About</Link></li>
                    <li><Link href="#how-it-works-section" onClick={handleLinkClick} className="hover:text-neutral-300">How it Works</Link></li>
                    <li><Link href="#examples-section" onClick={handleLinkClick} className="hover:text-neutral-300">Examples</Link></li>
                    <li><Link href="#faq-section" onClick={handleLinkClick} className="hover:text-neutral-300">FAQ</Link></li>
                </ul>
            </nav>
            {!menuOpen && (
                <a className="absolute top-4 right-6 text-[#bca68a] text-2xl sm:hidden" onClick={handleToggleMenu}>
                    <FaBars />
                </a>
            )}
            {menuOpen && (
                <a className="fixed top-4 right-6 text-white text-2xl sm:hidden" onClick={handleCloseMenu}>
                    <FaTimes />
                </a>
            )}
        </header>
    );
}