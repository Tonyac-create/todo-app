"use client"

import { useTheme } from '../context/ThemeContext';
import Image from 'next/image';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className=""
        >
            {theme === 'light' ?
                <Image
                    src="/icon-moon.svg"
                    width={30}
                    height={30}
                    alt='Dark mode'
                />
                :
                <Image
                    src="/icon-sun.svg"
                    width={30}
                    height={30}
                    alt='Light mode'
                />
            }
        </button>
    );
}
