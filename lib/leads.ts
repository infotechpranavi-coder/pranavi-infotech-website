import fs from 'fs/promises';
import path from 'path';

const LEADS_PATH = path.join(process.cwd(), 'lib/data/leads.json');

export interface Lead {
    id: string;
    name: string;
    email: string;
    company?: string;
    phone?: string;
    subject: string;
    message: string;
    status: 'new' | 'contacted' | 'urgent' | 'archived';
    date: string;
}

export async function getLeads(): Promise<Lead[]> {
    try {
        const data = await fs.readFile(LEADS_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading leads:', error);
        return [];
    }
}

export async function saveLead(lead: Omit<Lead, 'id' | 'date' | 'status'>): Promise<Lead> {
    const leads = await getLeads();
    const newLead: Lead = {
        ...lead,
        id: `lead_${Math.random().toString(36).substr(2, 9)}`,
        date: new Date().toISOString(),
        status: 'new'
    };

    leads.unshift(newLead); // Add to beginning
    await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2));
    return newLead;
}

export async function updateLeadStatus(id: string, status: Lead['status']): Promise<void> {
    const leads = await getLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
        leads[index].status = status;
        await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2));
    }
}

export async function deleteLead(id: string): Promise<void> {
    const leads = await getLeads();
    const filtered = leads.filter(l => l.id !== id);
    await fs.writeFile(LEADS_PATH, JSON.stringify(filtered, null, 2));
}
