'use client';

import ThemeToggle from './ThemeToggle';

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Right: Theme toggle */}
      <h1>Dashboard</h1>
      <div className="flex space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
