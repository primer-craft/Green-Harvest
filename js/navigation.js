/*====================================================

            GREEN HARVEST WEBSITE
             navigation.js

======================================================*/

// ============================================
// Select Elements
// ============================================

const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

// ============================================
// Sticky Navigation
// ============================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// ============================================
// Mobile Menu
// ============================================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

// ============================================
// Close Mobile Menu
// ============================================

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

// ============================================
// Active Navigation Highlight
// ============================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ============================================
// Smooth Scroll
// ============================================

navItems.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ============================================
// Hero Buttons
// ============================================

const heroButtons = document.querySelectorAll(".hero-buttons a");

heroButtons.forEach(button => {

    button.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ============================================
// Scroll Down Button
// ============================================

const scrollButton = document.querySelector(".scroll-down");

if(scrollButton){

    scrollButton.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector("#about").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// ============================================
// Navbar Shadow Animation
// ============================================

window.addEventListener("scroll",()=>{

    if(window.scrollY>150){

        navbar.style.boxShadow="0 12px 35px rgba(0,0,0,.18)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});

// ============================================
// Console Welcome
// ============================================

console.log("🌿 Green Harvest Navigation Loaded Successfully");