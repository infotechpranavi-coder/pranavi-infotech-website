'use client';

import { useState } from 'react';
import { addProjectAction, updateProjectAction } from '@/app/admin/project-actions';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/projects';

interface ProjectFormProps {
    project?: Project;
    onSuccess?: () => void;
}

const icons = ['Globe', 'Cpu', 'Database', 'Activity', 'Code2', 'ShieldCheck', 'Laptop', 'Brain', 'Smartphone'];

export function ProjectForm({ project, onSuccess }: ProjectFormProps) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            if (project) {
                await updateProjectAction(formData);
            } else {
                await addProjectAction(formData);
            }
            onSuccess?.();
        } catch (error) {
            alert('Failed to save project');
        } finally {
            setLoading(false);
        }
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            {project && <input type="hidden" name="id" value={project.id} />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Title</label>
                    <input
                        name="title"
                        defaultValue={project?.title}
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Project Title"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Category</label>
                    <input
                        name="category"
                        defaultValue={project?.category}
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="e.g. SaaS Architecture"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Description</label>
                <textarea
                    name="description"
                    defaultValue={project?.description}
                    required
                    rows={3}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Brief project description"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Stats/Metric</label>
                    <input
                        name="stats"
                        defaultValue={project?.stats}
                        required
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="e.g. 99% Uptime"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Icon</label>
                    <select
                        name="icon"
                        defaultValue={project?.icon || 'Globe'}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                        {icons.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                    </select>
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider block">Project Image</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Upload File</span>
                            <input
                                type="file"
                                name="imageFile"
                                accept="image/*"
                                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all text-xs"
                            />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Or Image URL</span>
                            <input
                                name="imageUrl"
                                defaultValue={project?.image}
                                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all"
                                placeholder="Unsplash URL"
                            />
                        </div>
                    </div>
                    {project && <input type="hidden" name="currentImage" value={project.image} />}
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full p-6 text-lg font-bold rounded-2xl h-auto"
            >
                {loading ? 'Saving...' : project ? 'Update Project' : 'Add Project'}
            </Button>
        </form>
    );
}
