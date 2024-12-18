document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header_menu");
    const menu2 = document.querySelector(".menu");

    menu.addEventListener("click", () => {
        menu2.classList.toggle("active");
    });

    const slider = document.querySelector(".cards2");
    const prevButton = document.querySelector(".prev__button");
    const nextButton = document.querySelector(".next__button");
    const slides = Array.from(slider.querySelectorAll(".c_card"));
    const slideCount = slides.length;
    let slideIndex = 0;
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    function showPreviousSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        updateSlader();
    }
    function showNextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        updateSlader();
    }
    function updateSlader() {
        slides.forEach((slide, index) => {
            if ( index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        updateSlader();
    }
});