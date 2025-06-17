const dynamicText = document.querySelector('.dynamic-text');
const cursor = document.querySelector('.cursor');


const phrases = [
    "a tech enthusiast",
    "a web developer",
    "a Python coder",
    "learning Java",
    "an AI/ML enthusiast",
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

// NAVBAR
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

 const form = document.getElementById("contactme");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const subject = encodeURIComponent("Portfolio Contact from " + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      const mailtoLink = `mailto:lipikaaggarwal@yahoo.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    });