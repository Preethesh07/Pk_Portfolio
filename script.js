/* TYPING EFFECT */
const texts = [
"Data Engineer",
"Python Developer",
"AI Enthusiast"
];

let i = 0, j = 0, isDeleting = false;
const typing = document.getElementById("typingText");

function type() {
let current = texts[i];

```
if (isDeleting) {
    j--;
} else {
    j++;
}

typing.textContent = current.substring(0, j);

if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
}

if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
}

setTimeout(type, isDeleting ? 50 : 100);
```

}

type();

/* NAVBAR SCROLL */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

/* MOBILE MENU */
const toggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

toggle.onclick = () => {
navLinks.classList.toggle("open");
};

/* CURSOR */
const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";
});

/* FORM */
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Message Sent!");
this.reset();
});
