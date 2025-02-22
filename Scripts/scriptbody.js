let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((image, i) => {
        image.classList.remove('show');
        if (i === index) {
            image.classList.add('show');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000); // Change image every 3 seconds
