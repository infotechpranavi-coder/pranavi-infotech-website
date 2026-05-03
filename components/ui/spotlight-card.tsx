'use client'

import { useRef, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type SpotlightVariant = 'default' | 'glass-soft' | 'glass-soft-light'

const variantStyles: Record<
    SpotlightVariant,
    { className: string; backdropBlur: string }
> = {
    default: {
        className:
            'rounded-xl border border-white/15 bg-gradient-to-br from-slate-900/70 to-slate-900/45 text-slate-100 shadow-[0_12px_34px_-26px_rgba(0,0,0,0.8)] hover:border-primary/35 hover:shadow-[0_20px_50px_-28px_rgba(var(--primary-rgb),0.45)]',
        backdropBlur: 'blur(16px)',
    },
    'glass-soft': {
        className:
            'rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.055] to-white/[0.02] text-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_28px_-10px_rgba(0,0,0,0.42)] hover:border-white/[0.11] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_8px_44px_-14px_rgba(var(--primary-rgb),0.09)]',
        backdropBlur: 'blur(10px) saturate(120%)',
    },
    'glass-soft-light': {
        className:
            'rounded-2xl border border-slate-200/85 bg-gradient-to-b from-white/75 to-slate-50/65 text-slate-900 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_6px_28px_-12px_rgba(15,23,42,0.09)] hover:border-slate-300/90 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_10px_40px_-14px_rgba(var(--primary-rgb),0.11)]',
        backdropBlur: 'blur(14px) saturate(118%)',
    },
}

export function SpotlightCard({
    children,
    className = '',
    style = {},
    variant = 'default',
    ...props
}: {
    children: ReactNode
    className?: string
    style?: CSSProperties
    variant?: SpotlightVariant
} & HTMLAttributes<HTMLDivElement>) {
    const divRef = useRef<HTMLDivElement>(null)
    const vs = variantStyles[variant]

    return (
        <div
            ref={divRef}
            className={cn(
                'relative overflow-hidden transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-0.5',
                vs.className,
                className,
            )}
            style={{
                ...style,
                backdropFilter: vs.backdropBlur,
                WebkitBackdropFilter: vs.backdropBlur,
            }}
            {...props}
        >
            {children}
        </div>
    )
}
