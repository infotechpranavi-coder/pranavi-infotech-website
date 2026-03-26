import fs from 'fs/promises';
import path from 'path';

export interface Project {
    id: string;
    category: string;
    title: string;
    description: string;
    image: string;
    icon: string;
    stats: string;
}

const DATA_PATH = path.join(process.cwd(), 'lib/data/projects.json');

export async function getProjects(): Promise<Project[]> {
    try {
        const data = await fs.readFile(DATA_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading projects:', error);
        return [];
    }
}

export async function saveProject(project: Omit<Project, 'id'> & { id?: string }): Promise<Project> {
    const projects = await getProjects();

    let newProject: Project;

    if (project.id) {
        // Update
        const index = projects.findIndex(p => p.id === project.id);
        if (index === -1) throw new Error('Project not found');
        newProject = { ...project } as Project;
        projects[index] = newProject;
    } else {
        // Create
        newProject = {
            ...project,
            id: Math.random().toString(36).substr(2, 9),
        } as Project;
        projects.push(newProject);
    }

    await fs.writeFile(DATA_PATH, JSON.stringify(projects, null, 2));
    return newProject;
}

export async function deleteProject(id: string): Promise<void> {
    const projects = await getProjects();
    const filteredProjects = projects.filter(p => p.id !== id);
    await fs.writeFile(DATA_PATH, JSON.stringify(filteredProjects, null, 2));
}
