'use client'

import { useRef } from 'react'

export function SpotlightCard({
    children,
    className = '',
    style = {},
    ...props
}: {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) {
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div
            ref={divRef}
            className={`relative overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-slate-900/70 to-slate-900/45 text-slate-100 shadow-[0_12px_34px_-26px_rgba(0,0,0,0.8)] transition-[box-shadow,transform,border-color,background] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_20px_50px_-28px_rgba(var(--primary-rgb),0.45)] ${className}`}
            style={{
                ...style,
                backdropFilter: 'blur(16px)',
            }}
            {...props}
        >
            {children}
        </div>
    )
}
