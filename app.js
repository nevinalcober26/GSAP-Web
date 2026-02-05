gsap.from(".logo, .cta-button", {
  y: -30,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.12
});

gsap.from(".tag, h1, .subtitle, .hero-actions button", {
  y: 28,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.16,
  delay: 0.25
});

gsap.from(".phone-mockup", {
  scale: 0.85,
  opacity: 0,
  duration: 0.95,
  ease: "back.out(1.4)",
  delay: 0.5
});

gsap.from(".task-card", {
  x: 30,
  opacity: 0,
  duration: 0.55,
  ease: "power2.out",
  stagger: 0.14,
  delay: 0.9
});

gsap.from(".feature-card", {
  y: 20,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.12,
  delay: 1.15
});
