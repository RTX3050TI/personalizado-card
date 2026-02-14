// JavaScript logic for handling Valentine's card features

// Function to handle URL parameters
function getUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    return Object.fromEntries(params.entries());
}

// Photo repetition rules
function shouldRepeatPhoto(photoId, repeatedPhotos) {
    return repeatedPhotos.includes(photoId);
}

// YouTube video extraction and playback
function extractYouTubeVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function playYouTubeVideo(videoId) {
    const videoContainer = document.getElementById('youtubeVideo');
    videoContainer.innerHTML = `<iframe width='560' height='315' src='https://www.youtube.com/embed/${videoId}' frameborder='0' allowfullscreen></iframe>`;
}

// Typewriter effect function
function typeWriter(text, element, delay = 100) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, delay);
        }
    }
    type();
}

// Petals animation function
function animatePetals() {
    const petals = document.createElement('div');
    petals.className = 'petals';
    document.body.appendChild(petals);
    // Add animation logic here (CSS or JavaScript animations)
}

// Initialize features on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const params = getUrlParameters();
    const videoId = extractYouTubeVideoId(params.video);
    if (videoId) playYouTubeVideo(videoId);
    const messageElement = document.getElementById('message');
    typeWriter('Happy Valentine’s Day!', messageElement);
    animatePetals();
});
