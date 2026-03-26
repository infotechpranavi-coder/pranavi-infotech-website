import React from 'react'

interface PranaviLogoProps {
    /** sm = navbar | md = default | lg = footer/large */
    size?: 'sm' | 'md' | 'lg'
    /** Use white text + lighter tones for dark backgrounds */
    light?: boolean
    /** Horizontal layout: Icon on the left, text on the right */
    layout?: 'vertical' | 'horizontal'
    className?: string
}

export function PranaviLogo({ size = 'md', light = false, layout = 'vertical', className = '' }: PranaviLogoProps) {
    // Precision Dimensions
    const dims = {
        vertical: {
            sm: { w: 140, h: 70, vb: '0 0 400 200' },
            md: { w: 220, h: 110, vb: '0 0 400 200' },
            lg: { w: 340, h: 170, vb: '0 0 400 200' },
        },
        horizontal: {
            sm: { w: 220, h: 60, vb: '0 0 600 200' },
            md: { w: 300, h: 80, vb: '0 0 600 200' },
            lg: { w: 420, h: 112, vb: '0 0 600 200' },
        }
    }

    const { w, h, vb } = dims[layout][size]

    // Color Palette from Image
    const brandCyan = '#00B4F1'
    const brandNavy = '#221E72'
    const infotechColor = light ? '#FFFFFF' : brandNavy

    // Spacing Logic
    const iconX = layout === 'horizontal' ? 0 : 150
    const textX = layout === 'horizontal' ? 240 : 200
    const textAnchor = layout === 'horizontal' ? 'start' : 'middle'

    return (
        <svg
            width={w}
            height={h}
            viewBox={vb}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} transition-opacity duration-300`}
            aria-label="Pranavi Infotech"
        >
            {/* ─── P ICON ─── */}
            <g transform={`translate(${iconX}, 20)`}>
                {/* Top navy part with arrow tip */}
                <path
                    d="M34 10 L25 24 H40 V38 H80 C93.25 38 104 28.15 104 16 V16 C104 3.85 93.25 -6 80 -6 H40 V10 H34Z"
                    fill={brandNavy}
                />

                {/* Cyan middle bar */}
                <rect x="34" y="38" width="22" height="12" fill={brandCyan} />

                {/* Bottom navy block */}
                <path
                    d="M34 50 H55 V66 H80 C93.25 66 104 56.15 104 44 V44 C104 31.85 93.25 22 80 22 H55 V38 H34 V50Z"
                    fill={brandNavy}
                    transform="translate(0, 15)"
                />

                {/* Rectangular stem at bottom left */}
                <rect x="34" y="55" width="22" height="35" fill={brandNavy} />
            </g>

            {/* ─── TEXT ─── */}
            <g transform={layout === 'horizontal' ? 'translate(0, 30)' : 'translate(0, 20)'}>
                {/* PRANAVI */}
                <text
                    x={textX}
                    y="150"
                    textAnchor={textAnchor}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="900"
                    fontSize="86"
                    letterSpacing="-2"
                    fill={brandCyan}
                >
                    PRANAVI
                </text>

                {/* INFOTECH */}
                <text
                    x={textX}
                    y="190"
                    textAnchor={textAnchor}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="900"
                    fontSize="34"
                    letterSpacing="28"
                    fill={infotechColor}
                >
                    INFOTECH
                </text>
            </g>
        </svg>
    )
}
