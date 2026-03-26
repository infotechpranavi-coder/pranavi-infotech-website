import { getServices } from '@/lib/cms';
import { ServiceForm } from '@/components/admin/service-form';
import { deleteServiceAction } from '@/app/admin/service-actions';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Briefcase, Pencil } from 'lucide-react';

export default async function AdminServicesPage() {
    const services = await getServices();

    return (
        <div className="space-y-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                        <Briefcase size={12} />
                        Service Management Module
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter font-outfit">
                        Our <span className="text-primary italic">Capabilities.</span>
                    </h1>
                    <p className="text-slate-500 font-light">
                        Manage your core business offerings and their technical specifications.
                    </p>
                </div>
            </header>

            {/* Add New Section */}
            <section className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <Plus className="text-primary" />
                    Register New Capability
                </h2>
                <ServiceForm />
            </section>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-5 rounded-bl-full`} />

                        <div className="flex flex-col h-full gap-6 relative z-10">
                            <div className="flex justify-between items-start">
                                <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                                    <Briefcase size={24} />
                                </div>
                                <div className="flex gap-2">
                                    <form action={async () => {
                                        'use server';
                                        await deleteServiceAction(service.id);
                                    }}>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full text-rose-500 hover:bg-rose-50 transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </Button>
                                    </form>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 font-light line-clamp-2">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-slate-50 grid grid-cols-2 gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <div>
                                    <span className="block text-slate-300 mb-1">Status</span>
                                    <span className="text-emerald-500">Active</span>
                                </div>
                                <div>
                                    <span className="block text-slate-300 mb-1">ID</span>
                                    <span className="font-mono">{service.id?.substring(0, 8)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
