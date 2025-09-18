// Petit script pour ajouter une classe lors du défilement, ce qui peut créer des animations
// C'est un exemple de ce qu'on peut faire en JavaScript pour rendre le site plus dynamique.

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // utilise le viewport comme conteneur
        rootMargin: '0px',
        threshold: 0.2 // déclenche l'événement quand 20% de la section est visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Vous pouvez ajouter d'autres classes pour animer
                // Ex: entry.target.style.opacity = '1';
                // observer.unobserve(entry.target); // pour que l'animation ne se déclenche qu'une fois
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden');
        sectionObserver.observe(section);
    });
});