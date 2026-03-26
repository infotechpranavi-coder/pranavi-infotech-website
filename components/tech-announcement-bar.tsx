'use client'

import { useState, useEffect } from 'react'
import { X, Zap, Radio } from 'lucide-react'
import Link from 'next/link'

const messages = [
    { label: 'NEW', text: 'Parnavi Infotech now offers AI-powered digital marketing solutions', href: '/services' },
    { label: 'LIVE', text: '500+ enterprises globally trust our technology infrastructure', href: '/about' },
    { label: 'HOT', text: 'Get a free consultation — transform your business today', href: '/contact' },
]

export function TechAnnouncementBar() {
    const [visible, setVisible] = useState(true)
    const [currentIdx, setCurrentIdx] = useState(0)

    useEffect(() => {
        if (visible) {
            document.documentElement.style.setProperty('--announcement-height', '40px')
        } else {
            document.documentElement.style.setProperty('--announcement-height', '0px')
        }
        return () => { document.documentElement.style.removeProperty('--announcement-height') }
    }, [visible])

    if (!visible) return null

    const msg = messages[currentIdx]

    return (
        <div className="relative z-[40] bg-[#020617] border-b border-primary/30 overflow-hidden">
            {/* Scanning beam */}
            <div className="absolute top-0 w-24 h-full bg-primary/10 skew-x-[-20deg] blur-xl pointer-events-none animate-scan"
                style={{ animationDuration: '5s' }} />

            {/* Left glow */}
            <div className="absolute left-0 top-0 w-40 h-full bg-primary/10 blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 gap-4">

                {/* Left: live badge */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 bg-primary/20 border border-primary/40 rounded-sm">
                        <Radio size={9} className="text-primary animate-pulse" />
                        <span className="text-[9px] font-black text-primary tracking-[0.3em] uppercase">
                            {msg.label}
                        </span>
                    </div>
                    <Zap size={12} className="text-primary/60 animate-pulse hidden sm:block" />
                </div>

                {/* Center: scrolling message */}
                <Link
                    href={msg.href}
                    className="flex-1 text-center text-[11px] font-semibold text-white/70 hover:text-primary transition-colors duration-300 tracking-wider truncate"
                    onClick={() => setCurrentIdx((currentIdx + 1) % messages.length)}
                >
                    {msg.text}
                    <span className="ml-3 text-primary underline underline-offset-2 text-[10px] uppercase tracking-widest">
                        Learn more →
                    </span>
                </Link>

                {/* Right: nav dots + close */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex gap-1">
                        {messages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIdx(i)}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-primary' : 'bg-white/20 hover:bg-white/40'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setVisible(false)}
                        className="text-white/30 hover:text-white/80 transition-colors p-0.5"
                        aria-label="Close announcement"
                    >
                        <X size={13} />
                    </button>
                </div>
            </div>

            {/* Bottom border glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
    )
}
