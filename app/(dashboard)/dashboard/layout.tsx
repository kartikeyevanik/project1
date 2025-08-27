import Breadcrumb from '@/components/Breadcrumb';
import SideBar from '@/components/sidebar';
import Topbar from '@/components/topbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "It's and users by admin side",
};
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-row dark:bg-gray-900">
            <SideBar />
            <div className='w-screen'>
                <Topbar />
                <Breadcrumb/>
                <div className="p-4">{children}</div>
            </div>
        </main>
    );
}
