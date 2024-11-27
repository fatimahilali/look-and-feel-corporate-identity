const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const slideInterval = 5000; // Intervaltijd in milliseconden

function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth; // Breedte van één artikel/container

    // Schuif de slider op basis van de breedte van één artikel
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update de actieve dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    // Ga naar de volgende container, en reset naar de eerste als we aan het einde zijn
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Maak navigatiebolletjes klikbaar
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i; // Update de huidige index naar het geklikte bolletje
        showSlide(currentIndex);
    });
});

// Automatisch schuiven
setInterval(nextSlide, slideInterval);

// Initialiseer de eerste slide
showSlide(currentIndex);
