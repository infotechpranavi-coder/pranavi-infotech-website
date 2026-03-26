'use client'

import { useRef, useState, MouseEvent } from 'react'

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
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const div = divRef.current
        const rect = div.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        setPosition({ x, y })

        // 3D Tilt Logic
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -10 // Tilt up/down
        const rotateY = ((x - centerX) / centerX) * 10 // Tilt left/right
        setRotation({ x: rotateX, y: rotateY })
    }

    const handleFocus = () => {
        setOpacity(1)
    }

    const handleBlur = () => {
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
        setRotation({ x: 0, y: 0 }) // Reset tilt
    }

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-out hover:shadow-2xl hover:bg-primary/5 hover:border-primary/20 ${className}`}
            style={{
                ...style,
                perspective: '1000px',
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${opacity ? '-10px' : '0'}) scale(${opacity ? '1.02' : '1'})`,
                transformStyle: 'preserve-3d',
            }}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.15), transparent 40%)`,
                    transform: 'translateZ(20px)', // Lift the glow
                }}
            />
            <div style={{ transform: 'translateZ(10px)' }}>
                {children}
            </div>
        </div>
    )
}
