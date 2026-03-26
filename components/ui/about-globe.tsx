'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export function AboutGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let phi = 0

        if (!canvasRef.current) return

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            scale: 1.0,
            phi: 0,
            theta: 0.3, // Slight tilt for better perspective
            dark: 1,
            diffuse: 1.2,
            mapSamples: 20000, // Increased for better resolution
            mapBrightness: 12, // Brighter land for more contrast
            baseColor: [0.05, 0.05, 0.1], // Deeper, darker blue base
            markerColor: [0, 1, 1], // Cyan markers
            glowColor: [0, 0.2, 0.5], // Subtle blue glow
            markers: [
                { location: [37.7595, -122.4367], size: 0.04 }, // SF
                { location: [40.7128, -74.006], size: 0.04 },   // NY
                { location: [28.6139, 77.2090], size: 0.08 },   // India (larger)
                { location: [51.5074, -0.1278], size: 0.04 },   // London
                { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
                { location: [25.2048, 55.2708], size: 0.04 },   // Dubai
                { location: [1.3521, 103.8198], size: 0.04 },   // Singapore
                { location: [35.6762, 139.6503], size: 0.04 },  // Tokyo
            ],
            onRender: (state) => {
                state.phi = phi
                phi += 0.003 // Slightly slower, more elegant rotation
            },
        })

        return () => {
            globe.destroy()
        }
    }, [])

    return (
        <div className="w-full h-full flex items-center justify-center relative group">
            {/* ATMOSPHERIC GLOW */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-[-20%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" />

            <canvas
                ref={canvasRef}
                className="cursor-grab active:cursor-grabbing"
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: '1/1',
                    filter: 'drop-shadow(0 0 40px rgba(0, 180, 255, 0.15))',
                }}
            />
        </div>
    )
}
