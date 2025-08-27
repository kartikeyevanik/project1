'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system';
    applyTheme(savedTheme);

    if (savedTheme === 'system') {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', () => applyTheme('system'));
    }
  }, []);

  const applyTheme = (value: 'light' | 'dark' | 'system') => {
    setTheme(value);
    localStorage.setItem('theme', value);

    if (value === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isDark);
    }
  };

  return (
    <select
      value={theme}
      onChange={(e) => applyTheme(e.target.value as 'light' | 'dark' | 'system')}
      className="bg-gray-100 dark:text-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-sm rounded px-2 py-1 focus:outline-none"
    >
      <option value="light">☀ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="system">🖥 System</option>
    </select>
  );
}
