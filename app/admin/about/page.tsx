import { getAboutData } from '@/lib/cms';
import {
    deleteTeamMemberAction,
    deleteValueAction,
    addTeamMemberAction,
    addValueAction
} from '@/app/admin/about-actions';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Users, Lightbulb, UserPlus, Sparkles } from 'lucide-react';

export default async function AdminAboutPage() {
    const { values, team } = await getAboutData();

    return (
        <div className="space-y-16">
            <header className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    <Users size={12} />
                    Corporate Heritage Module
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter font-outfit">
                    Brand <span className="text-primary italic">Heritage.</span>
                </h1>
                <p className="text-slate-500 max-w-2xl text-lg font-light leading-relaxed">
                    Curate the strategic narrative of your organization by managing core principles and leadership profiles.
                </p>
            </header>

            {/* Corporate Values Section */}
            <section className="space-y-8">
                <div className="flex justify-between items-end border-b border-slate-100 pb-6">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight font-outfit">Core Values</h2>
                        <p className="text-sm text-slate-400 font-light">The fundamental directives driving our engineering excellence.</p>
                    </div>
                    <form action={async () => {
                        'use server';
                        await addValueAction({
                            title: "New Value",
                            description: "Strategic directive description here...",
                            icon: "Lightbulb",
                            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                            color: "from-blue-600/20 to-cyan-500/20"
                        });
                    }}>
                        <Button className="bg-slate-900 hover:bg-primary text-white rounded-xl gap-2 h-10 px-6 font-bold transition-all">
                            <Sparkles size={16} />
                            Add Directive
                        </Button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, idx) => (
                        <div key={idx} className="group bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-6">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100">
                                <img src={value.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="flex-grow space-y-2">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-black text-slate-900 tracking-tight text-lg group-hover:text-primary transition-colors">{value.title}</h3>
                                    <form action={async () => {
                                        'use server';
                                        await deleteValueAction(idx);
                                    }}>
                                        <button className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16} /></button>
                                    </form>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-light">{value.description}</p>
                                <div className="flex gap-2">
                                    <span className="text-[8px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase tracking-widest">{value.icon}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="space-y-8">
                <div className="flex justify-between items-end border-b border-slate-100 pb-6">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-black text-slate-900 tracking-tight font-outfit">Leadership</h2>
                        <p className="text-sm text-slate-400 font-light">The strategic architects guiding our global scale.</p>
                    </div>
                    <form action={async () => {
                        'use server';
                        await addTeamMemberAction({
                            name: "New Architect",
                            role: "Strategic Lead",
                            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800&h=800",
                            bio: "Strategic biography goes here...",
                            skills: ["Leadership", "Scale"],
                            experience: "15 YRS",
                            projects: "100+"
                        });
                    }}>
                        <Button className="bg-slate-900 hover:bg-primary text-white rounded-xl gap-2 h-10 px-6 font-bold transition-all">
                            <UserPlus size={16} />
                            Add Architect
                        </Button>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member, idx) => (
                        <div key={idx} className="group bg-white border border-slate-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0">
                                    <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div>
                                    <h3 className="font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-[9px] font-bold text-primary uppercase tracking-[0.2em]">{member.role}</p>
                                </div>
                            </div>

                            <p className="text-xs text-slate-500 font-light line-clamp-3 leading-relaxed">{member.bio}</p>

                            <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                                <div className="flex gap-1 flex-wrap">
                                    {member.skills.slice(0, 2).map(s => (
                                        <span key={s} className="text-[8px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase tracking-widest">{s}</span>
                                    ))}
                                </div>
                                <form action={async () => {
                                    'use server';
                                    await deleteTeamMemberAction(idx);
                                }}>
                                    <button className="text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={16} /></button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
