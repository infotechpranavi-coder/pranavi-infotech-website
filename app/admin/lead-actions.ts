'use server';

import { saveLead, updateLeadStatus, deleteLead, Lead } from '@/lib/leads';
import { revalidatePath } from 'next/cache';

export async function submitContactAction(formData: FormData) {
    const lead = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        company: formData.get('company') as string,
        phone: formData.get('phone') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
    };

    await saveLead(lead);
    revalidatePath('/admin');
    revalidatePath('/admin/leads'); // In case we add a dedicated page
    return { success: true };
}

export async function updateLeadStatusAction(id: string, status: Lead['status']) {
    await updateLeadStatus(id, status);
    revalidatePath('/admin');
}

export async function deleteLeadAction(id: string) {
    await deleteLead(id);
    revalidatePath('/admin');
}
