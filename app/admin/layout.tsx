import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AdminSidebar } from '@/components/admin/sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <div className="pt-32 pb-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <AdminSidebar />

                    {/* Main Content */}
                    <main className="flex-grow">
                        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden min-h-[600px]">
                            <div className="p-8 md:p-12 relative isolate">
                                {/* Subtle Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
                                {children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
