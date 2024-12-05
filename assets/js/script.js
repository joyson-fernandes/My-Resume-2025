const phrases = ["DevOps Engineer", "Cloud Engineer", "Infrastructure Engineer"];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingDelay = 100;   // Delay for typing each character
const deletingDelay = 50;   // Delay for deleting each character
const pauseBetweenPhrases = 1500; // Pause after completing each phrase
const element = document.getElementById('dynamic-text'); // Select the span for dynamic text

function type() {
    if (currentCharIndex < phrases[currentPhraseIndex].length) {
        element.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(deleteText, pauseBetweenPhrases);
    }
}

function deleteText() {
    if (currentCharIndex > 0) {
        element.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(deleteText, deletingDelay);
    } else {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
        setTimeout(type, typingDelay + 1500); // Pause before typing the next phrase
    }
}

// Start the typing effect
type();
