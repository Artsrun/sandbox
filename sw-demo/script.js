let currentSlide = 0;
const slides = [
    {
        title: "The Magical World of Caching & Service Workers 🪄",
        subtitle: "",
        content: "",
        img: "https://via.placeholder.com/200" // Example placeholder image
    },
    {
        title: "Why Do We Cache?",
        subtitle: "Because the internet's not always on steroids! 🐢 vs 🚀",
        content: "",
        img: "https://via.placeholder.com/200" 
    },
    // ... Add all other slides in this format ...
];

function updateSlide() {
    const slideElement = document.getElementById("slide");
    slideElement.classList.remove("active"); // Remove active to reset animation

    setTimeout(() => {
        const slide = slides[currentSlide];
        slideElement.querySelector("h1").innerText = slide.title;
        slideElement.querySelector("h2").innerText = slide.subtitle;
        slideElement.querySelector("p").innerText = slide.content;
        slideElement.querySelector("img").src = slide.img;
        slideElement.classList.add("active"); // Add active for animation
    }, 500); // Delay to match the CSS transition time
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
