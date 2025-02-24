document.addEventListener('DOMContentLoaded', function() {
    // Додайте код для слайдера

    // Додайте код для інтерактивної карти
    const mapContainer = document.getElementById('map-container');
    // Ініціалізація карти та додавання міток

    // Додайте код для графіків та інфографіки
    const chartsContainer = document.querySelector('.charts');
    // Ініціалізація графіків та інфографіки

    // Додайте клас 'visible' до секцій при завантаженні сторінки
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('visible');
    });

    // Додайте плавну прокрутку при натисканні на посилання в меню
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});