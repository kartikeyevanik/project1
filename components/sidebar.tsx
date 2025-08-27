'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // optional icon library

type MenuItem = {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
};

const menuItems: MenuItem[] = [
  {
    title: 'Admins',
    children: [
      { title: 'All Admins', href: '/admins' },
      { title: 'Create Admin', href: '/admins/create' },
    ],
  },
  {
    title: 'Users',
    children: [
      { title: 'All Users', href: '/users' },
      { title: 'Invite User', href: '/users/invite' },
    ],
  },
  {
    title: 'Leads',
    children: [
      { title: 'All Leads', href: '/leads' },
      { title: 'New Lead', href: '/leads/new' },
    ],
  },
  {
    title: 'Plans',
    children: [
      { title: 'Current Plans', href: '/plans' },
      { title: 'Upgrade Plan', href: '/plans/upgrade' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="h-screen w-64 border-r border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 p-6 flex flex-col gap-6">
      {/* Logo */}
      <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        YourLogo
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-400 uppercase">Main Menu</p>

        {menuItems.map((item) => {
          const isOpen = openMenus.includes(item.title);

          return (
            <div key={item.title}>
              {/* Main menu title */}
              <button
                onClick={() => toggleMenu(item.title)}
                className="flex items-center justify-between w-full text-left py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
              >
                <span>{item.title}</span>
                {item.children ? (
                  isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                ) : null}
              </button>

              {/* Dropdown */}
              {isOpen && item.children && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`py-1 px-2 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                        isActive(sub.href)
                          ? 'bg-gray-200 dark:bg-gray-700 font-semibold'
                          : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
