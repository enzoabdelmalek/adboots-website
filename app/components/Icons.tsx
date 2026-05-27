type IconProps = { size?: number; color?: string; style?: React.CSSProperties };

const base = (size: number, color: string) => ({
    width: size, height: size,
    display: "inline-block" as const,
    flexShrink: 0 as const,
    color,
});

export function IconTruck({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
            <rect x="9" y="11" width="14" height="10" rx="2" />
            <circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        </svg>
    );
}

export function IconReturn({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
        </svg>
    );
}

export function IconCreditCard({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <rect x="1" y="4" width="22" height="16" rx="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
    );
}

export function IconLock({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

export function IconShield({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}

export function IconZap({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    );
}

export function IconClock({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

export function IconEuro({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M4 10h12M4 14h12M19.5 6.5A7.5 7.5 0 1 0 19.5 17.5" />
        </svg>
    );
}

export function IconTrendingDown({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
            <polyline points="17 18 23 18 23 12" />
        </svg>
    );
}

export function IconPackage({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    );
}

export function IconCheck({ size = 14, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <polyline points="20 6 9 17 4 12" />
        </svg>
    );
}

export function IconX({ size = 14, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export function IconStar({ size = 14, color = "currentColor", filled = true, style }: IconProps & { filled?: boolean }) {
    return (
        <svg viewBox="0 0 24 24" fill={filled ? color : "none"} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}

export function IconMail({ size = 18, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}

export function IconSparkle({ size = 14, color = "currentColor", style }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ ...base(size, color), ...style }}>
            <path d="M12 3v1m0 16v1M4.22 4.22l.7.7m14.16 14.16.7.7M3 12h1m16 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    );
}
