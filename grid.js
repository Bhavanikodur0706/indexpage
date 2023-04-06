// this is for myfunction toggle button_ btn

function myFunction(x) {
    x.classList.toggle("open");
}

// The below is for inner carousel for grid 
function openCarousel(images, prevUrl) {
    let activeIndex = 0;

    const carousel = document.createElement("div");
    carousel.classList.add("carousel", "slide");

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");

    images.forEach((image, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item"); // Add carousel-item class here
        if (index === activeIndex) {
            carouselItem.classList.add("active");
        }

        const img = document.createElement("img");
        img.src = image;
        img.classList.add("d-block", "w-100");

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });

    carousel.appendChild(carouselInner);

    const prevButton = document.createElement("a");
    prevButton.classList.add("carousel-control-prev");
    prevButton.href = "#";
    prevButton.setAttribute("role", "button");
    prevButton.setAttribute("data-slide", "prev");

    const prevIcon = document.createElement("span");
    prevIcon.classList.add("carousel-control-prev-icon");
    prevIcon.setAttribute("aria-hidden", "true");
    prevButton.appendChild(prevIcon);

    const srPrev = document.createElement("span");
    srPrev.classList.add("sr-only");
    srPrev.textContent = "";
    prevButton.appendChild(srPrev);

    carousel.appendChild(prevButton);

    const nextButton = document.createElement("a");
    nextButton.classList.add("carousel-control-next");
    nextButton.href = "#";
    nextButton.setAttribute("role", "button");
    nextButton.setAttribute("data-slide", "next");

    const nextIcon = document.createElement("span");
    nextIcon.classList.add("carousel-control-next-icon");
    nextIcon.setAttribute("aria-hidden", "true");
    nextButton.appendChild(nextIcon);

    const srNext = document.createElement("span");
    srNext.classList.add("sr-only");
    srNext.textContent = "";
    nextButton.appendChild(srNext);

    carousel.appendChild(nextButton);

    const closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.innerHTML = "&times;";

    closeButton.addEventListener("click", function () {

        // Redirect to the previous image URL
        window.location.href = prevUrl;
    });

    carousel.appendChild(closeButton);


    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";
    modalBody.appendChild(carousel);

    $("#carouselModal").modal("show");

    $(".carousel-control-prev").click(() => {
        activeIndex = (activeIndex - 1 + images.length) % images.length;
        updateActiveClass();
    });

    $(".carousel-control-next").click(() => {
        activeIndex = (activeIndex + 1) % images.length;
        updateActiveClass();
    });

    function updateActiveClass() {
        const carouselItems = document.querySelectorAll(".carousel-item");
        carouselItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }
}

// Generate carousel items dynamically using JavaScript

        // Get a reference to the carousel element
        var carousel = document.getElementById("myCarousel");

        // Scroll the carousel element into view
        carousel.scrollIntoView();
// The below code is for arabic convertion of the content
// Set default language to English
var currentLang = 'en';

// Check if there is a language stored in local storage
var storedLang = localStorage.getItem('lang');
if (storedLang) {
    currentLang = storedLang;
}

// Translate the page based on the current language
translatePage(currentLang);

// Handle language button clicks
$('.btn-tran').click(function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en'; // toggle the language
    localStorage.setItem('lang', currentLang); // store the language in local storage
    translatePage(currentLang); // translate the page
});

// Translate the page based on the current language
function translatePage(lang) {
    $.getJSON('arabic.json', function (data) {
        $('[data-translate]').each(function () {
            var key = $(this).attr('data-translate');
            var translatedText = data[lang][key];
            $(this).html(translatedText);
        });
    });
}