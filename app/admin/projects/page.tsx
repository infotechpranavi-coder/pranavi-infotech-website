import { getProjects } from '@/lib/projects';
import { ProjectForm } from '@/components/admin/project-form';
import { deleteProjectAction } from '@/app/admin/project-actions';
import { Button } from '@/components/ui/button';
import { Trash2, Plus } from 'lucide-react';

export default async function AdminProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Manage <span className="text-primary">Projects.</span></h1>
                    <p className="text-slate-500 mt-2">Add, edit, or remove projects from the "Our Work" section.</p>
                </div>
            </div>

            <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                    <Plus className="text-primary" />
                    Add New Project
                </h2>
                <ProjectForm />
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                        <div className="aspect-video relative overflow-hidden">
                            <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute top-4 right-4 z-20">
                                <form action={async () => {
                                    'use server';
                                    await deleteProjectAction(project.id);
                                }}>
                                    <button
                                        className="p-3 bg-white/20 backdrop-blur-md text-white hover:bg-rose-500 border border-white/20 rounded-full transition-all"
                                        title="Delete Project"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] font-bold text-primary tracking-[0.2em] uppercase">{project.category}</span>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">{project.title}</h3>
                            <p className="text-slate-500 text-[11px] line-clamp-3 mb-4 flex-grow">{project.description}</p>

                            <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-[9px] font-mono text-slate-400">
                                <span>ID: {project.id.toUpperCase()}</span>
                                <span className="text-primary font-bold">{project.stats}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
