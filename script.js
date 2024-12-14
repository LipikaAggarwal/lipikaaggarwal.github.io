const dynamicText = document.querySelector('.dynamic-text');
const cursor = document.querySelector('.cursor');

// Array of phrases to cycle through
const phrases = [
    "a B.Tech student",
    "a tech enthusiast",
    "a developer",
    "an AI/ML enthusiast",
    "passionate about innovation",
    "skilled in Python and C",
    "proficient in HTML, CSS, and JavaScript",
    "driven to solve real-world problems",
    "a quick learner",
    "collaborative and team-oriented",
    "a problem solver"
];

let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let currentPhrase = "";
const typingSpeed = 100; 
const delayBetweenPhrases = 2000; 


function typeLetter() {
    if (currentLetterIndex < currentPhrase.length) {
        dynamicText.textContent += currentPhrase[currentLetterIndex];
        currentLetterIndex++;
        setTimeout(typeLetter, typingSpeed);
    } else {
        
        setTimeout(clearText, delayBetweenPhrases);
    }
}


function clearText() {
    dynamicText.textContent = "";
    currentLetterIndex = 0;
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; 
    currentPhrase = phrases[currentPhraseIndex];
    setTimeout(typeLetter, typingSpeed); 
}
typeLetter();

const gallery = document.querySelector('.event-gallery');

gallery.addEventListener('mouseover', () => {
    gallery.style.animationPlayState = 'paused'; 
});

gallery.addEventListener('mouseout', () => {
    gallery.style.animationPlayState = 'running'; 
});

const toggleBtn = document.getElementById("toggle-btn");
const navbarItems = document.querySelector(".navbar_items");

toggleBtn.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".navbar_items ul li a");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbarItems.classList.remove("active");
    });
});