import { getSettings } from '@/lib/cms';
import { saveSettingsAction } from '@/app/admin/settings-actions';
import { Button } from '@/components/ui/button';
import { Settings, Phone, Mail, MapPin, Linkedin, Twitter, Save, Globe } from 'lucide-react';

export default async function AdminSettingsPage() {
    const settings = await getSettings();

    return (
        <div className="space-y-12">
            <header className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                    <Settings size={12} />
                    Global Configuration Module
                </div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter font-outfit">
                    Site <span className="text-primary italic">Settings.</span>
                </h1>
                <p className="text-slate-500 font-light">
                    Manage your contact credentials, social identifiers, and global site behavior.
                </p>
            </header>

            <form action={saveSettingsAction} className="space-y-8">
                {/* Contact credentials */}
                <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 space-y-10">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                            <Globe className="text-primary" size={20} />
                            Contact Credentials
                        </h2>
                        <p className="text-xs text-slate-400 font-light">Updates will reflect instantly in the footer and contact sections.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                                <Phone size={10} /> Mobile Integration
                            </label>
                            <input
                                name="phone"
                                defaultValue={settings.contact.phone}
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                                <Mail size={10} /> Strategic Email
                            </label>
                            <input
                                name="email"
                                defaultValue={settings.contact.email}
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                            />
                        </div>

                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                                <MapPin size={10} /> Global Headquarters
                            </label>
                            <input
                                name="address"
                                defaultValue={settings.contact.address}
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold"
                            />
                        </div>
                    </div>
                </div>

                {/* Social Identifiers */}
                <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 space-y-10">
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                            <Linkedin className="text-primary" size={20} />
                            Digital Footprint
                        </h2>
                        <p className="text-xs text-slate-400 font-light">Manage your professional social network integrations.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">LinkedIn Profile</label>
                            <input
                                name="linkedin"
                                defaultValue={settings.socials.linkedin}
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">X (Twitter) Profile</label>
                            <input
                                name="twitter"
                                defaultValue={settings.socials.twitter}
                                className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                            />
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-8 z-50">
                    <Button className="w-full bg-slate-900 text-white hover:bg-primary transition-all duration-500 h-16 rounded-[2rem] font-black text-lg gap-4 shadow-2xl shadow-primary/20 group">
                        <Save size={24} className="group-hover:rotate-12 transition-transform" />
                        Synchronize Global Parameters
                    </Button>
                </div>
            </form>
        </div>
    );
}
