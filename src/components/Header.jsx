'use client'

import React from 'react'
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
    const { theme } = useTheme()
    return (
        <header className={`w-full h-64 bg-no-repeat bg-cover flex items-start pt-20 px-6 md:justify-center ${theme === 'light' ? 'bg-[url("/bg-mobile-light.jpg")] md:bg-[url("/bg-desktop-light.jpg")]' : 'bg-[url("/bg-mobile-dark.jpg")] md:bg-[url("/bg-desktop-dark.jpg")]'}`}>
            <h1 className='text-white text-4xl font-semibold tracking-widest mr-auto md:w-1/2 md:mr-0'>TODO</h1>
            <ThemeToggle />
        </header>
    )
}
