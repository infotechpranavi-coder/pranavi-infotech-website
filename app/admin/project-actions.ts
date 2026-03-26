'use server';

import { saveProject, deleteProject, Project } from '@/lib/projects';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

async function handleFileUpload(file: File): Promise<string | null> {
    if (!file || file.size === 0) return null;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const relativePath = `/uploads/${filename}`;
    const fullPath = path.join(process.cwd(), 'public', 'uploads', filename);

    await fs.writeFile(fullPath, buffer);
    return relativePath;
}

export async function addProjectAction(formData: FormData) {
    const imageFile = formData.get('imageFile') as File;
    let imagePath = formData.get('imageUrl') as string;

    if (imageFile && imageFile.size > 0) {
        const uploadedPath = await handleFileUpload(imageFile);
        if (uploadedPath) imagePath = uploadedPath;
    }

    const project: Omit<Project, 'id'> = {
        category: formData.get('category') as string,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        image: imagePath,
        icon: formData.get('icon') as string,
        stats: formData.get('stats') as string,
    };

    await saveProject(project);
    revalidatePath('/');
    revalidatePath('/admin/projects');
}

export async function updateProjectAction(formData: FormData) {
    const imageFile = formData.get('imageFile') as File;
    let imagePath = formData.get('imageUrl') as string;

    if (imageFile && imageFile.size > 0) {
        const uploadedPath = await handleFileUpload(imageFile);
        if (uploadedPath) imagePath = uploadedPath;
    }

    const project: Project = {
        id: formData.get('id') as string,
        category: formData.get('category') as string,
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        image: imagePath || (formData.get('currentImage') as string),
        icon: formData.get('icon') as string,
        stats: formData.get('stats') as string,
    };

    await saveProject(project);
    revalidatePath('/');
    revalidatePath('/admin/projects');
}

export async function deleteProjectAction(id: string) {
    await deleteProject(id);
    revalidatePath('/');
    revalidatePath('/admin/projects');
}
