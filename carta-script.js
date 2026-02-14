// Card Display Logic

// Photo handling
function handlePhoto(photoUrl) {
    const imgElement = document.createElement('img');
    imgElement.src = photoUrl;
    imgElement.alt = 'Card Photo';
    document.body.appendChild(imgElement);
}

// Music handling
function playMusic(musicUrl) {
    const audio = new Audio(musicUrl);
    audio.play();
}

// Animations
function addAnimation(element, animationClass) {
    element.classList.add(animationClass);
}

// Typewriter effect
function typeWriterEffect(text, elementId) {
    const element = document.getElementById(elementId);
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}

// Usage examples
handlePhoto('photo_url_here');
playMusic('music_url_here');
const cardElement = document.createElement('div');
addAnimation(cardElement, 'fade-in');
typeWriterEffect('Welcome to the card!', 'typewriterElement');