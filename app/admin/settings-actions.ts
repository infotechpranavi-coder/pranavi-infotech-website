'use server';

import { saveSettings, SettingsData } from '@/lib/cms';
import { revalidatePath } from 'next/cache';

export async function saveSettingsAction(formData: FormData) {
    const data: SettingsData = {
        contact: {
            phone: formData.get('phone') as string,
            email: formData.get('email') as string,
            address: formData.get('address') as string,
        },
        socials: {
            linkedin: formData.get('linkedin') as string,
            twitter: formData.get('twitter') as string,
        }
    };

    await saveSettings(data);
    revalidatePath('/');
    revalidatePath('/contact');
    revalidatePath('/admin/settings');
}
