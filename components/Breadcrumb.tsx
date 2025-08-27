'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300 p-2">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline">Dashboard</Link>
        </li>
        {segments.map((seg, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          return (
            <li key={href} className="flex items-center space-x-2">
              <span>/</span>
              <Link href={href} className="capitalize hover:underline">{seg}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
