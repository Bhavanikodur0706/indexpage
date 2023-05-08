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
    if (lang === 'ar') {
            var menuBar = document.querySelector('.main_menu .navbar-expand-lg .navbar-nav');
            menuBar.style.direction = 'rtl';
    
        } else {
            var menuBar = document.querySelector('.main_menu .navbar-expand-lg .navbar-nav');
            menuBar.style.direction = 'ltr';
    
        }
}
