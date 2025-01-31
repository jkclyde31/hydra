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

  // Slide-up animation
  gsap.utils.toArray('.animate-slide-up').forEach((element) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Slide-down animation
  gsap.utils.toArray('.animate-slide-down').forEach((element) => {
    gsap.from(element, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Slide-left animation
  gsap.utils.toArray('.animate-slide-left').forEach((element) => {
    gsap.from(element, {
      x: 50,
      opacity: 0,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Slide-right animation
  gsap.utils.toArray('.animate-slide-right').forEach((element) => {
    gsap.from(element, {
      x: -50,
      opacity: 0,
      duration: 1,
      delay: parseFloat(element.getAttribute('data-delay')) || 0,
      ease: 'power3.out',
    });
  });

  // Scroll-triggered animations with delay
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
      delay,
    });
  });

  // Scroll-triggered slide-left animation with delay
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
      delay,
    });
  });

  // Scroll-triggered slide-right animation with delay
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
      delay, // Add delay here
    });
  });

  // Scroll-triggered slide-up animation with delay
  gsap.utils.toArray('.animate-on-scroll-up').forEach((element) => {
    const delay = parseFloat(element.getAttribute('data-delay')) || 0;
    gsap.from(element, {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
      delay,
    });
  });

  // Scroll-triggered slide-down animation with delay
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
      delay,
    });
  });
};