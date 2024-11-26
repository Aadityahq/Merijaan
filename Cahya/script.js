let currentIndex = 0;
const images = document.querySelectorAll('.slideshow img');
const totalImages = images.length;
const audioElement = document.querySelector('#bg-music');
let musicPlaying = true;

// Show the next image in the slideshow
function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}

// Create floating heart animations
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's'; // Random speed
    heart.textContent = '❤️'; // Emoji heart
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Remove after animation
}

// Toggle music play/pause across the entire screen
document.body.addEventListener('click', () => {
    musicPlaying = !musicPlaying;
    if (musicPlaying) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});

// Start intervals
setInterval(showNextImage, 3000); // Change image every 3 seconds
setInterval(createHeart, 300); // Generate hearts every 300ms
