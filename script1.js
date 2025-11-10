// script1.js

// Function to make the site responsive dynamically
function responsiveAdjustments() {
    const width = window.innerWidth;

    // Header Titles Font Adjustments
    const title1 = document.getElementById("title1");
    if (title1) {
        const t11 = document.getElementById("t11");
        const t12 = document.getElementById("t12");
        if (width <= 480) { // Small screens
            t11.style.fontSize = "16px";
            t12.style.fontSize = "18px";
        } else if (width <= 768) { // Tablets
            t11.style.fontSize = "20px";
            t12.style.fontSize = "22px";
        } else { // Desktop
            t11.style.fontSize = "24px";
            t12.style.fontSize = "28px";
        }
    }

    // Title2 headings scaling
    const tt1 = document.querySelectorAll("#title2 h1");
    tt1.forEach(h => {
        if (width <= 480) {
            h.style.fontSize = "18px";
            h.style.textAlign = "center";
        } else if (width <= 768) {
            h.style.fontSize = "24px";
            h.style.textAlign = "center";
        } else {
            h.style.fontSize = "32px";
            h.style.textAlign = "center";
        }
    });

    // Description boxes font scaling
    const descrItems = document.querySelectorAll(".descr");
    descrItems.forEach(d => {
        if (width <= 480) {
            d.style.fontSize = "14px";
            d.style.textAlign = "center";
        } else if (width <= 768) {
            d.style.fontSize = "16px";
            d.style.textAlign = "center";
        } else {
            d.style.fontSize = "18px";
            d.style.textAlign = "left";
        }
    });

    // FAQ box adjustments
    const faqs = document.querySelectorAll(".clp9");
    faqs.forEach(f => {
        if (width <= 480) {
            f.style.fontSize = "14px";
            f.style.padding = "15px 10px";
        } else if (width <= 768) {
            f.style.fontSize = "16px";
            f.style.padding = "18px 15px";
        } else {
            f.style.fontSize = "18px";
            f.style.padding = "20px 30px";
        }
    });

    // Image scaling for different sections
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        if (width <= 480) {
            img.style.width = "90%";
            img.style.height = "auto";
        } else if (width <= 768) {
            img.style.width = "80%";
            img.style.height = "auto";
        } else {
            img.style.width = "";
            img.style.height = "";
        }
    });

    // Adjust sticky header offer height
    const headerOffer = document.querySelector(".header-offer");
    if (headerOffer) {
        if (width <= 480) {
            headerOffer.style.flexDirection = "column";
            headerOffer.style.height = "auto";
            headerOffer.style.padding = "10px";
        } else {
            headerOffer.style.flexDirection = "row";
            headerOffer.style.height = "100px";
            headerOffer.style.padding = "0 20px";
        }
    }
}

// Initial call
responsiveAdjustments();

// Adjust on window resize
window.addEventListener("resize", responsiveAdjustments);

// Optional: Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Optional: Collapsible FAQ + icon toggle
const faqBoxes = document.querySelectorAll(".clp9");
faqBoxes.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active"); // Add CSS to expand/collapse if needed
    });
});
