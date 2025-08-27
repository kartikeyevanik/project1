'use client';

import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Topbar() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h1 className='dark:text-white'>{segments[segments.length-1]}</h1>
            <div className="flex space-x-4">
                <ThemeToggle />
            </div>
        </header>
    );
}
