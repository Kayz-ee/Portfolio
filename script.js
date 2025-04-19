// You can add some interactivity, animations, or any dynamic functionality here
// For now, it could be something simple, like a scroll-to-top button or smooth scrolling

document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const targetSection = document.querySelector(e.target.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});