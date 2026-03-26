'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Briefcase,
    Info,
    Settings,
    Image as ImageIcon,
    ChevronRight,
    LogOut
} from 'lucide-react';

const sidebarLinks = [
    { label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { label: 'Projects', href: '/admin/projects', icon: ImageIcon },
    { label: 'Services', href: '/admin/services', icon: Briefcase },
    { label: 'About Site', href: '/admin/about', icon: Info },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 sticky top-32">
                <div className="mb-8 px-4">
                    <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] font-outfit">Control Center</h2>
                </div>

                <nav className="space-y-1">
                    {sidebarLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    group flex items-center justify-between p-4 rounded-2xl transition-all duration-300
                                    ${isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-primary'}
                                `}
                            >
                                <div className="flex items-center gap-4">
                                    <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
                                    <span className="font-bold text-sm tracking-tight">{link.label}</span>
                                </div>
                                <ChevronRight size={14} className={`transition-transform duration-300 ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-12 pt-8 border-t border-slate-50 px-4">
                    <Link href="/" className="flex items-center gap-4 text-rose-500 hover:text-rose-600 transition-colors font-bold text-sm">
                        <LogOut size={18} />
                        <span>Exit Admin</span>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
