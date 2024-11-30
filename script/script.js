/**
 * Selecteert alle slide-elementen in het document.
 * @type {NodeListOf<Element>}
 */
const slides = document.querySelectorAll('.slide');

/**
 * Selecteert alle navigatiebolletjes (dots) in het document.
 * @type {NodeListOf<Element>}
 */
const dots = document.querySelectorAll('.dot');

/**
 * De huidige actieve index van de slide.
 * @type {number}
 */
let currentIndex = 0;

/**
 * De tijdsduur in milliseconden tussen het automatisch wisselen van slides.
 * @type {number}
 */
const slideInterval = 5000;

/**
 * Toont een specifieke slide en werkt de navigatiebolletjes bij.
 * @param {number} index - De index van de slide die getoond moet worden.
 */
function showSlide(index) {
    /**
     * De container die alle slides bevat.
     * @type {HTMLElement}
     */
    const slider = document.querySelector('.slider');

    /**
     * De breedte van een enkele slide (bijvoorbeeld een artikel/container).
     * @type {number}
     */
    const slideWidth = slides[0].offsetWidth;

    // Verplaats de slider om de geselecteerde slide te tonen
    slider.style.transform = `translateX(-${index * slideWidth}px)`;

    // Werk de actieve status van de navigatiebolletjes bij
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index); // Alleen het bolletje van de actieve slide krijgt de "active"-klasse
    });
}

/**
 * Gaat naar de volgende slide.
 * Als de laatste slide bereikt is, begint het opnieuw bij de eerste.
 */
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Verhoog de index en start opnieuw als het einde bereikt is
    showSlide(currentIndex);
}

/**
 * Voegt klik-gebeurtenissen toe aan de navigatiebolletjes.
 * Hiermee kan de gebruiker een specifieke slide kiezen.
 */
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i; // Update de huidige index naar het bolletje dat aangeklikt is
        showSlide(currentIndex); // Toon de bijbehorende slide
    });
});

/**
 * Start een interval om automatisch naar de volgende slide te gaan.
 * Dit gebeurt elke 5000 milliseconden (5 seconden).
 */
setInterval(nextSlide, slideInterval);

/**
 * Initialiseer de eerste slide bij het laden van de pagina.
 */
showSlide(currentIndex);
