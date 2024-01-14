// JavaScript to show/hide image and slider based on radio button selection
const showImageRadio = document.getElementById("show-image");
const showSliderRadio = document.getElementById("show-slider");
const imageContainer = document.getElementById("image-container");
const sliderContainer = document.getElementById("slider-container");
const percentageSlider = document.getElementById("percentage-slider");
const percentageValue = document.getElementById("percentage-value");

showImageRadio.addEventListener("change", function () {
    if (showImageRadio.checked) {
        imageContainer.style.display = "block";
        sliderContainer.style.display = "none";
    }
});

showSliderRadio.addEventListener("change", function () {
    if (showSliderRadio.checked) {
        sliderContainer.style.display = "block";
        imageContainer.style.display = "none";
    }
});