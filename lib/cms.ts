import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'lib', 'data');

async function readJson<T>(filename: string): Promise<T> {
    const filePath = path.join(DATA_DIR, filename);
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

async function writeJson<T>(filename: string, data: T): Promise<void> {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Services
export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    color: string;
    bg: string;
    accent: string;
}

export async function getServices(): Promise<Service[]> {
    return readJson<Service[]>('services.json');
}

export async function saveService(service: Service) {
    const services = await getServices();
    const index = services.findIndex(s => s.id === service.id);
    if (index >= 0) {
        services[index] = service;
    } else {
        services.push(service);
    }
    await writeJson('services.json', services);
}

export async function deleteService(id: string) {
    const services = await getServices();
    const filtered = services.filter(s => s.id !== id);
    await writeJson('services.json', filtered);
}

// About
export interface Value {
    icon: string;
    title: string;
    description: string;
    image: string;
    color: string;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    message?: string;
    skills: string[];
    experience: string;
    projects: string;
}

export interface AboutData {
    values: Value[];
    team: TeamMember[];
}

export async function getAboutData(): Promise<AboutData> {
    return readJson<AboutData>('about.json');
}

export async function saveAboutData(data: AboutData) {
    await writeJson('about.json', data);
}

// Settings
export interface SettingsData {
    contact: {
        phone: string;
        email: string;
        address: string;
    };
    socials: {
        linkedin: string;
        twitter: string;
    };
}

export async function getSettings(): Promise<SettingsData> {
    return readJson<SettingsData>('settings.json');
}

export async function saveSettings(data: SettingsData) {
    await writeJson('settings.json', data);
}

export * from './projects';
