import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis Smooth Scroll
export const initSmoothScroll = () => {
  const lenis = new Lenis({
    lerp: 0.1, // Smoothness factor
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
};

// Initialize Entrance Animations
export const initAnimations = () => {
  // Fade-in animation
  gsap.utils.toArray('.animate-fade-in').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Slide-up animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-up').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.set(element, { y: 50, opacity: 0 }); // Set initial state
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // When the top of the element hits 80% of the viewport
        end: 'top 20%', // When the top of the element hits 20% of the viewport
        toggleActions: 'play none none reset', // Play when entering, reset when leaving
      },
    });
  });

  // Slide-down animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-down').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.set(element, { y: -50, opacity: 0 }); // Set initial state
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reset', // Play when entering, reset when leaving
      },
    });
  });

  // Slide-left animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-left').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.set(element, { x: 50, opacity: 0 }); // Set initial state
    gsap.to(element, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reset', // Play when entering, reset when leaving
      },
    });
  });

  // Slide-right animation (always triggers when shown)
  gsap.utils.toArray('.animate-slide-right').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.set(element, { x: -50, opacity: 0 }); // Set initial state
    gsap.to(element, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none reset', // Play when entering, reset when leaving
      },
    });
  });

  // Scroll-triggered animations with delay (unchanged)
  gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-left animation with delay (unchanged)
  gsap.utils.toArray('.animate-on-scroll-left').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-right animation with delay (unchanged)
  gsap.utils.toArray('.animate-on-scroll-right').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      x: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-up animation with delay (unchanged)
  gsap.utils.toArray('.animate-on-scroll-up').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: 100,
      opacity: 0,
      delay,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });

  // Scroll-triggered slide-down animation with delay (unchanged)
  gsap.utils.toArray('.animate-on-scroll-down').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
    });
  });
};