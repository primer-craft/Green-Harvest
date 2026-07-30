/*====================================================

            GREEN HARVEST WEBSITE
                script.js

======================================================*/

// ============================================
// Website Loaded
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🌿 Welcome to Green Harvest");

    initializeWebsite();

});

// ============================================
// Initialize Website
// ============================================

function initializeWebsite(){

    updateYear();

    initializeContactForm();

    initializeButtons();

}

// ============================================
// Update Footer Year Automatically
// ============================================

function updateYear(){

    const yearElement = document.querySelector(".copyright p");

    if(yearElement){

        const currentYear = new Date().getFullYear();

        yearElement.innerHTML =
        `© ${currentYear} Green Harvest. All Rights Reserved.`;

    }

}

// ============================================
// Contact Form
// ============================================

function initializeContactForm(){

    const form = document.querySelector(".contact-form");

    if(!form) return;

    form.addEventListener("submit", function(){

        setTimeout(function(){

            alert("Thank you! Your enquiry has been sent successfully.");

            form.reset();

        },1000);

    });

}

// ============================================
// Buttons
// ============================================

function initializeButtons(){

    const buttons = document.querySelectorAll("button,.btn,.product-btn");

    buttons.forEach(button=>{

        button.addEventListener("mousedown",()=>{

            button.style.transform="scale(.97)";

        });

        button.addEventListener("mouseup",()=>{

            button.style.transform="";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

}

// ============================================
// Product Cards
// ============================================

const productCards=document.querySelectorAll(".product-card");

productCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 25px 50px rgba(0,0,0,.18)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

// ============================================
// Contact Information
// ============================================

const contactItems=document.querySelectorAll(".contact-item");

contactItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transform="translateY(-8px)";

    });

    item.addEventListener("mouseleave",()=>{

        item.style.transform="translateY(0)";

    });

});

// ============================================
// Smooth Image Loading
// ============================================

const images=document.querySelectorAll("img");

images.forEach(img=>{

    img.addEventListener("load",()=>{

        img.style.opacity="1";

    });

});

// ============================================
// Keyboard Shortcuts
// ============================================

document.addEventListener("keydown",(event)=>{

    if(event.key==="Home"){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

});

// ============================================
// Placeholder for Future WhatsApp Integration
// ============================================

function openWhatsApp(){

    // Future Implementation

    console.log("WhatsApp Integration Coming Soon");

}

// ============================================
// Placeholder for Product Search
// ============================================

function searchProducts(){

    // Future Implementation

    console.log("Product Search Coming Soon");

}

// ============================================
// Placeholder for Dark Mode
// ============================================

function toggleDarkMode(){

    // Future Implementation

    console.log("Dark Mode Coming Soon");

}

// ============================================
// Performance Log
// ============================================

window.addEventListener("load",()=>{

    console.log("✅ Website Fully Loaded");

});