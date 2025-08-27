import Breadcrumb from '@/components/Breadcrumb';
import SideBar from '@/components/sidebar';
import Topbar from '@/components/topbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-row">
            <SideBar />
            <div className='w-screen'>
                <Topbar />
                <Breadcrumb/>
                <div className="p-4">{children}</div>
            </div>
        </main>
    );
}
