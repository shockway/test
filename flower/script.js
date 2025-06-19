const flower = document.querySelector('.flower');
const petals = document.querySelectorAll('.petal');

flower.addEventListener('mouseenter', () => {
    petals.forEach((petal, index) => {
        petal.style.animation = `wiggle 0.3s ${index * 0.1}s ease-in-out infinite alternate`;
    });
});

flower.addEventListener('mouseleave', () => {
    petals.forEach(petal => {
        petal.style.animation = '';
    });
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes wiggle {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(5deg); }
}`, styleSheet.cssRules.length);
