const images = [
    'cats/image1.jpg',
    'cats/image2.jpg',
    'cats/image3.jpg',
    'cats/image4.jpg',
    'cats/image5.jpg',
    'cats/image6.jpg',
    'cats/image7.jpg',
];

const currentImage = document.getElementById('current-image');
const indicatorsContainer = document.getElementById('indicators');
let currentIndex = 0;

function updateSlider() {
    currentImage.src = images[currentIndex];
    updateIndicators();
}
function updateIndicators() {
    indicatorsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

updateSlider();