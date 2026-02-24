gsap.registerPlugin(ScrollTrigger);
// Header mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// Preloader animation
const tl = gsap.timeline();

tl.to(".progress-bar", {
  width: "100%",
  duration: 2,
  ease: "power2.out"
})
.to(".preloader", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power2.inOut",
  onComplete: () => {
    document.querySelector(".preloader").style.display = "none";
  }
})
.from(".hero h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out"
})
.from(".hero p", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power3.out"
}, "-=0.5")
.from(".cta-btn", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  ease: "back.out(1.7)"
}, "-=0.4");




// Floating glow orbs
gsap.to(".orb-1", {
  y: -30,
  duration: 4,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

gsap.to(".orb-2", {
  y: 30,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});

// About section animation
gsap.from(".profile-circle", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".about-right h2, .about-right p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 70%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".skills span", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 65%",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power3.out"
});


// Projects section animation
gsap.from(".projects-title", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-wrapper",
    start: "top 75%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

// Contact section animation
gsap.from(".contact-title, .contact-subtitle", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 75%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power3.out"
});

gsap.from(".contact-form input, .contact-form textarea", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 75%",
  },
  x: -40,
  opacity: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from(".contact-form button", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 70%",
  },
  scale: 0.85,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)"
});

gsap.from(".contact-socials a", {
  scrollTrigger: {
    trigger: ".contact-socials",
    start: "top 80%",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.15,
  ease: "power3.out"
});

// Footer animation
gsap.from(".footer-container", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});
