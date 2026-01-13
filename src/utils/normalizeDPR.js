export function normalizeRootFontByDPR() {
    try {
        // Only apply for lg screens and up (1024px)
        if (window.innerWidth < 1024) {
            document.documentElement.style.fontSize = '100%';
            return;
        }

        const dpr = window.devicePixelRatio || 1;
        let size = 100;
        if (dpr >= 1.5) size = 70;
        else if (dpr >= 1.4) size = 82.5;
        else if (dpr >= 1.33) size = 85;
        else if (dpr >= 1.25) size = 85;
        else if (dpr >= 1.1) size = 90;
        document.documentElement.style.fontSize = size + '%';
    } catch (_) { }
}

export function attachDPRResizeListener() {
    const handler = () => normalizeRootFontByDPR();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
}
