/*====================================================

            GREEN HARVEST WEBSITE
             animations.js

======================================================*/

// ============================================
// Scroll Reveal Animation
// ============================================

const revealElements = document.querySelectorAll(
    ".fade, .fade-up, .fade-left, .fade-right"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

// ============================================
// Product Card Animation
// ============================================

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.15}s`;

});

// ============================================
// Feature Card Animation
// ============================================

const featureCards = document.querySelectorAll(".feature-card");

featureCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.12}s`;

});

// ============================================
// Timeline Animation
// ============================================

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item, index) => {

    item.style.transitionDelay = `${index * 0.18}s`;

});

// ============================================
// Image Hover Effect
// ============================================

const images = document.querySelectorAll(
    ".product-card img, .about-image img"
);

images.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

// ============================================
// Hero Parallax Effect
// ============================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const offset = window.pageYOffset;

    if (hero) {

        hero.style.backgroundPositionY = offset * 0.5 + "px";

    }

});

// ============================================
// Smooth Appearance of Sections
// ============================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

sections.forEach((section) => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "all 1s ease";

    observer.observe(section);

});

// ============================================
// Floating Hero Button Glow
// ============================================

const glassButton = document.querySelector(".glass-btn");

if (glassButton) {

    setInterval(() => {

        glassButton.classList.toggle("pulse");

    }, 2000);

}

// ============================================
// Console Message
// ============================================

console.log("✨ Green Harvest Animations Loaded");