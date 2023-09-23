let currentSlide = 0;
const slides = [
    {
        title: "The Magical World of Caching & Service Workers 🪄",
        subtitle: "",
        content: "",
        img: "" // Link to your image, e.g., "images/wizard_hat.png"
    },
    {
        title: "Why Do We Cache?",
        subtitle: "Because the internet's not always on steroids! 🐢 vs 🚀",
        content: "",
        img: "" // And so on for other images...
    },
    // ... Add all other slides in this format ...
];

function updateSlide() {
    const slide = slides[currentSlide];
    document.getElementById("slide").querySelector("h1").innerText = slide.title;
    document.getElementById("slide").querySelector("h2").innerText = slide.subtitle;
    document.getElementById("slide").querySelector("p").innerText = slide.content;
    document.getElementById("slide").querySelector("img").src = slide.img;
}

document.getElementById("next").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.getElementById("prev").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

updateSlide(); // Initialize with the first slide
