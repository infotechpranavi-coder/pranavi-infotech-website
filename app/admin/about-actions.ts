'use server';

import { saveAboutData, AboutData } from '@/lib/cms';
import { revalidatePath } from 'next/cache';

export async function saveAboutAction(data: AboutData) {
    await saveAboutData(data);
    revalidatePath('/about');
    revalidatePath('/admin/about');
}

export async function addTeamMemberAction(member: any) {
    const data = await (await import('@/lib/cms')).getAboutData();
    data.team.push(member);
    await saveAboutData(data);
    revalidatePath('/about');
    revalidatePath('/admin/about');
}

export async function addValueAction(value: any) {
    const data = await (await import('@/lib/cms')).getAboutData();
    data.values.push(value);
    await saveAboutData(data);
    revalidatePath('/about');
    revalidatePath('/admin/about');
}

export async function deleteTeamMemberAction(index: number) {
    const data = await (await import('@/lib/cms')).getAboutData();
    data.team.splice(index, 1);
    await saveAboutData(data);
    revalidatePath('/about');
    revalidatePath('/admin/about');
}

export async function deleteValueAction(index: number) {
    const data = await (await import('@/lib/cms')).getAboutData();
    data.values.splice(index, 1);
    await saveAboutData(data);
    revalidatePath('/about');
    revalidatePath('/admin/about');
}
