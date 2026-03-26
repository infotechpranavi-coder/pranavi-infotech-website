import { getProjects, getServices, getAboutData } from '@/lib/cms';
import { getLeads } from '@/lib/leads';
import { DashboardAnalytics, RecentLeads, ActivityFeed } from '@/components/admin/dashboard-components';
import {
    Briefcase,
    Image as ImageIcon,
    Info,
    ArrowUpRight,
    ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

export default async function AdminHomePage() {
    const projects = await getProjects();
    const services = await getServices();
    const { team } = await getAboutData();
    const leads = await getLeads();

    const stats = [
        { label: 'System Nexus', value: projects.length.toString(), sub: 'Active Projects', icon: ImageIcon, color: 'text-blue-500', bg: 'bg-blue-50', link: '/admin/projects' },
        { label: 'Capabilities', value: services.length.toString(), sub: 'Core Modules', icon: Briefcase, color: 'text-emerald-500', bg: 'bg-emerald-50', link: '/admin/services' },
        { label: 'Strategic Team', value: team.length.toString(), sub: 'Architects', icon: Info, color: 'text-violet-500', bg: 'bg-violet-50', link: '/admin/about' },
    ];

    return (
        <div className="space-y-12 animate-fade-in">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                        <ShieldCheck size={12} />
                        Strategic CommandCenter v2.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter font-outfit">
                        System <span className="text-primary italic">Overview.</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Status</p>
                        <p className="text-sm font-black text-emerald-500 flex items-center gap-2 justify-end">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Operational
                        </p>
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Link
                            key={stat.label}
                            href={stat.link}
                            className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                        >
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} w-fit mb-6 transition-transform duration-500 group-hover:scale-110`}>
                                <Icon size={24} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl font-black text-slate-900 font-outfit tracking-tighter">{stat.value}</span>
                                    <div className="p-2 rounded-full bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">{stat.sub}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Enhanced Core Analytics */}
            <DashboardAnalytics />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lead intelligence (2/3) */}
                <div className="lg:col-span-2">
                    <RecentLeads leads={leads.slice(0, 5)} />
                </div>

                {/* Telemetry Stream (1/3) */}
                <div className="lg:col-span-1">
                    <ActivityFeed />
                </div>
            </div>

            {/* System Health / Status */}
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-0" />
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="space-y-6 flex-grow">
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 font-outfit">Real-time Deployment Status</span>
                        </div>
                        <h2 className="text-3xl font-black font-outfit tracking-tighter">Site Core: <span className="text-primary italic">Operational</span></h2>
                        <p className="text-white/40 max-w-lg font-light leading-relaxed">
                            All cloud systems, server actions, and dynamic data engines are functioning with 100% integrity. Changes made in this dashboard will deploy instantly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
