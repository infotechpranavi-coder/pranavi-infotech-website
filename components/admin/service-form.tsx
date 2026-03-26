'use client';

import { useState } from 'react';
import { saveServiceAction } from '@/app/admin/service-actions';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/cms';

interface ServiceFormProps {
    initialData?: Service;
    onSuccess?: () => void;
}

export function ServiceForm({ initialData, onSuccess }: ServiceFormProps) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        await saveServiceAction(formData);
        setLoading(false);
        if (onSuccess) onSuccess();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {initialData?.id && <input type="hidden" name="id" value={initialData.id} />}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Service Title</label>
                    <input
                        name="title"
                        defaultValue={initialData?.title}
                        placeholder="e.g. AI Solutions"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Icon (Lucide Name)</label>
                    <input
                        name="icon"
                        defaultValue={initialData?.icon || 'Briefcase'}
                        placeholder="e.g. Brain, Cpu, Globe"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                        required
                    />
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Description</label>
                    <textarea
                        name="description"
                        defaultValue={initialData?.description}
                        placeholder="Describe the service offerings..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all min-h-[120px] font-light"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Text Color Class</label>
                    <input
                        name="color"
                        defaultValue={initialData?.color || 'text-primary'}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Background Class</label>
                    <input
                        name="bg"
                        defaultValue={initialData?.bg || 'bg-primary/10'}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                    />
                </div>

                <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Gradient Accent (Tailwind from-to)</label>
                    <input
                        name="accent"
                        defaultValue={initialData?.accent || 'from-primary to-blue-500'}
                        placeholder="from-blue-500 to-cyan-400"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                    />
                </div>
            </div>

            <Button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white hover:bg-primary transition-all duration-500 h-14 rounded-2xl font-bold shadow-xl shadow-slate-900/10"
            >
                {loading ? 'Processing System Update...' : (initialData ? 'Synchronize Service Update' : 'Initialize New Service')}
            </Button>
        </form>
    );
}
