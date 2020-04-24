$(document).ready(function () {
    $('.carousel').carousel();
});

setInterval(() => {
    $('.carousel').carousel('next');
}, 2000);

// move next carousel
$('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
});
