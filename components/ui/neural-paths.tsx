'use client'

import { useEffect, useState } from 'react'

export function NeuralPaths() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
                <path
                    d="M 10,0 Q 30,250 50,500 T 90,1000"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="0.05"
                    strokeDasharray="2 4"
                    style={{ strokeDashoffset: scrollY * 0.1 }}
                />
                <path
                    d="M 90,0 Q 70,250 50,500 T 10,1000"
                    fill="none"
                    stroke="currentColor"
                    className="text-primary"
                    strokeWidth="0.05"
                    strokeDasharray="2 4"
                    style={{ strokeDashoffset: -scrollY * 0.08 }}
                />

                {/* Pulsing Nodes */}
                {[100, 300, 500, 700, 900].map((y) => (
                    <circle
                        key={y}
                        cx={y % 200 === 0 ? 30 : 70}
                        cy={y}
                        r="0.5"
                        className="fill-primary animate-pulse"
                    />
                ))}
            </svg>
        </div>
    )
}

export function DataStreams() {
    return (
        <>
            {/* Left Stream */}
            <div className="fixed inset-y-0 left-2 z-50 pointer-events-none hidden xl:flex flex-col opacity-20 overflow-hidden select-none">
                <div className="animate-[slideDown_30s_linear_infinite] whitespace-nowrap">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="text-[7px] font-mono text-primary py-2 [writing-mode:vertical-rl] tracking-tighter">
                            {Math.random().toString(36).substring(2, 8).toUpperCase()} // NODE_{100 + i} // SYNC_VAL_{Math.floor(Math.random() * 999)}
                        </div>
                    ))}
                </div>
                <div className="animate-[slideDown_30s_linear_infinite] whitespace-nowrap">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="text-[7px] font-mono text-primary py-2 [writing-mode:vertical-rl] tracking-tighter">
                            {Math.random().toString(36).substring(2, 8).toUpperCase()} // NODE_{100 + i} // SYNC_VAL_{Math.floor(Math.random() * 999)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Stream */}
            <div className="fixed inset-y-0 right-2 z-50 pointer-events-none hidden xl:flex flex-col opacity-20 overflow-hidden select-none">
                <div className="animate-[slideUp_25s_linear_infinite] whitespace-nowrap">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="text-[7px] font-mono text-primary py-2 [writing-mode:vertical-rl] tracking-tighter rotate-180">
                            RX_QUANTUM // HEX_{Math.floor(Math.random() * 16777215).toString(16).toUpperCase()} // STATUS_OK
                        </div>
                    ))}
                </div>
                <div className="animate-[slideUp_25s_linear_infinite] whitespace-nowrap">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="text-[7px] font-mono text-primary py-2 [writing-mode:vertical-rl] tracking-tighter rotate-180">
                            RX_QUANTUM // HEX_{Math.floor(Math.random() * 16777215).toString(16).toUpperCase()} // STATUS_OK
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
