var downloadLink = document.getElementById('downloadLink');
downloadLink.addEventListener('click', function() {
    var giftDiv = document.getElementById('gift');
    giftDiv.classList.remove('hidden');
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(function(element) {
        element.classList.add('animate__delay-0.5s');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const loveEmoji = document.querySelector('.love');
    loveEmoji.style.animation = "fly 5s infinite";

    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(function(element) {
        element.classList.add('animate__delay-0.5s');
    });
});



