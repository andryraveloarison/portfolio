import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const useMenuAnimation = () => {
    const isMenuOpen = useRef(false);
    const isAnimating = useRef(false);

    // Ces refs stockeront les éléments DOM
    const containerRef = useRef(null);
    const menuOverlayRef = useRef(null);
    const menuContentRef = useRef(null);
    const menuLinksWrapperRef = useRef(null);
    const menuLinksRef = useRef(null);
    const homepageRef = useRef(null);

    useEffect(() => {
        // Initialiser les refs après le rendu DOM
        const overlay = document.querySelector(".nav-menu-overlay");
        const content = document.querySelector(".nav-menu-content");
        const links = document.querySelectorAll(".nav-menu-link a");
        const homepage = document.querySelector(".homepageContent");

        if (overlay) menuOverlayRef.current = overlay;
        if (content) menuContentRef.current = content;
        if (links) menuLinksRef.current = links;
        if (homepage) homepageRef.current = homepage;

        if (!overlay || !content || !homepage) {
            console.warn("Certains éléments du menu sont introuvables au chargement", { overlay, content, homepage });
            return;
        }

        // Position initiale
        gsap.set(content, { y: "50%", opacity: 0.25 });
        gsap.set(links, { y: "-150%" });
    }, []);

    const openMenu = () => {
        if (isAnimating.current || isMenuOpen.current) return;
        isAnimating.current = true;

        const menuOverlay = menuOverlayRef.current;
        const menuContent = menuContentRef.current;
        const menuLinks = menuLinksRef.current;
        const homepage = homepageRef.current;

        gsap.to(homepage, {
            rotation: 10,
            x: 3000,
            y: 450,
            scale: 1.5,
            duration: 1.25,
            ease: "power4.inOut"
        });

        gsap.set(menuOverlay, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            visibility: "visible"
        });

        gsap.to(menuOverlay, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
            duration: 1.25,
            ease: "expo.out",
            onComplete: () => {
                gsap.set(".nav-menu-link", { overflow: "visible" });
                isMenuOpen.current = true;
                isAnimating.current = false;
            },
        });

        gsap.to(menuContent, { y: "0%", opacity: 1, duration: 1.5, ease: "expo.out" });
        gsap.to(menuLinks, { y: "0%", duration: 1.25, stagger: 0.1, delay: 0.25, ease: "expo.out" });
    };

    const closeMenu = () => {
        if (isAnimating.current || !isMenuOpen.current) return;
        isAnimating.current = true;

        const menuOverlay = menuOverlayRef.current;
        const menuContent = menuContentRef.current;
        const menuLinks = menuLinksRef.current;
        const homepage = homepageRef.current;

        gsap.to(homepage, { rotation: 0, x: 0, y: 0, scale: 1, duration: 1, ease: "expo.out" });
        gsap.to(menuLinks, { y: "-200%", duration: 1, ease: "expo.out" });
        gsap.to(menuContent, { y: "-100%", opacity: 0.25, duration: 1, ease: "expo.out" });

        gsap.to(menuOverlay, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "expo.out",
            onComplete: () => {
                gsap.to(menuOverlay, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    visibility: "hidden"
                });
                gsap.set(menuLinks, { y: "150%" });
                gsap.set(menuContent, { y: "50%", opacity: 0.25 });
                gsap.set(".nav-menu-link", { overflow: "hidden" });

                isAnimating.current = false;
                isMenuOpen.current = false;
            },
        });
    };

    return { openMenu, closeMenu, isMenuOpen, isAnimating };
};
