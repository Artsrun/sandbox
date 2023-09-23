let currentSlide = 0;
const slides = [
    {
        title: "The Magical World of Caching & Service Workers 🪄",
        subtitle: "",
        content: "This is the main content.",
        img: "https://via.placeholder.com/200", 
        extraContent: "Additional information for this slide...",
        extraImg: "https://via.placeholder.com/150"
    },
    {
        title: "Why Do We Cache?",
        subtitle: "Because the internet's not always on steroids! 🐢 vs 🚀",
        content: "",
        img: "https://via.placeholder.com/200" ,
        extraContent: "Additional information for this slide...",
        extraImg: "https://via.placeholder.com/150"
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
        slideElement.querySelector(".extra-info p").innerText = slide.extraContent;
            slideElement.querySelector(".extra-info img").src = slide.extraImg;
        slideElement.classList.add("active"); // Add active for animation
    }, 500); // Delay to match the CSS transition time

    const extraInfoElement = document.getElementById("slide").querySelector(".extra-info");
    extraInfoElement.classList.remove("show");
    document.getElementById("info-btn").innerText = "Show more";
}

document.getElementById("next").addEventListener("click", function() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

document.getElementById("prev").addEventListener("click", function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
});

document.getElementById("info-btn").addEventListener("click", function(e) {
   
    const extraInfoElement = document.getElementById("slide").querySelector(".extra-info");
    if (extraInfoElement.classList.contains("show")) {
        extraInfoElement.classList.remove("show");
        e.target.innerText = "Show more";

    } else {
        extraInfoElement.classList.add("show");
        e.target.innerText = "Show less";
    }
});
updateSlide(); // Initialize with the first slide
