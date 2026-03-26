'use server';

import { saveService, deleteService, Service } from '@/lib/cms';
import { revalidatePath } from 'next/cache';

export async function saveServiceAction(formData: FormData) {
    const service: Service = {
        id: (formData.get('id') as string) || Math.random().toString(36).substr(2, 9),
        icon: (formData.get('icon') as string) || 'Briefcase',
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        color: (formData.get('color') as string) || 'text-primary',
        bg: (formData.get('bg') as string) || 'bg-primary/10',
        accent: (formData.get('accent') as string) || 'from-primary to-blue-500'
    };

    await saveService(service);
    revalidatePath('/admin/services');
    revalidatePath('/services');
}

export async function deleteServiceAction(id: string) {
    await deleteService(id);
    revalidatePath('/admin/services');
    revalidatePath('/services');
}
