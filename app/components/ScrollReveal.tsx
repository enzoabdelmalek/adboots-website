"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        document.documentElement.classList.add("sr-ready");

        let observer: IntersectionObserver;

        const init = () => {
            // Disconnect previous observer if any
            if (observer) observer.disconnect();

            // Re-query all elements (new page content is now in DOM)
            const els = Array.from(document.querySelectorAll<HTMLElement>("[data-sr]:not(.sr-vis)"));

            const reveal = (el: HTMLElement) => {
                const delay = parseInt(el.dataset.srDelay ?? "0", 10);
                setTimeout(() => el.classList.add("sr-vis"), delay);
            };

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        reveal(entry.target as HTMLElement);
                        observer.unobserve(entry.target);
                    });
                },
                { threshold: 0, rootMargin: "0px 0px -32px 0px" }
            );

            els.forEach((el) => {
                const rect = el.getBoundingClientRect();
                const inView = rect.top < window.innerHeight && rect.bottom > 0;
                if (inView) {
                    reveal(el);
                } else {
                    observer.observe(el);
                }
            });
        };

        // Small delay to let Next.js finish rendering the new page into the DOM
        const raf = requestAnimationFrame(() => {
            setTimeout(init, 40);
        });

        return () => {
            cancelAnimationFrame(raf);
            if (observer) observer.disconnect();
        };
    }, [pathname]);

    return null;
}
