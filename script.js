// Add event listener to the document
document.addEventListener("DOMContentLoaded", function() {
    // Get all sections
    const sections = document.querySelectorAll("section");

    // Add fade-in animation to each section
    sections.forEach(function(section) {
        section.classList.add("fade-in");
    });

    // Add event listener to the header nav links
    const navLinks = document.querySelectorAll("header nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = link.getAttribute("href");
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add event listener to the body
    document.body.addEventListener("click", function(event) {
        if (event.target.classList.contains("dark-mode-toggle")) {
            document.body.classList.toggle("dark");
        }
    });
});