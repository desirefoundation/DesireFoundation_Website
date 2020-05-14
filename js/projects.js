function width() {
    var win = $(this); //this = window
    
    if (win.width() <= 1000) {
        $('#hey').removeClass('content-1');
        $('#hey').addClass('conten-1');
        $('#hey2').removeClass('content-3');
        $('#hey1').removeClass('container-3');
        $('#hey1').addClass('containe-3');
        $('#hey2').addClass('conten-3');
        $('#pic').addClass('pi');
        $('#pic').removeClass('pic');
        $('#pic-1').removeClass('pic1');
        $('#pic-1').addClass('pi');
        $('#pic-2').removeClass('pic-2');
        if ($('#pic-2').is(':empty')) {
            //do something

            $('#pic-2').append(' <img src="/img/aahar.jpg" class="pi">');
        }
        $('.break').empty();
    }

    if (win.width() > 1000) {
        $('#hey').removeClass('conten-1');
        $('#hey').addClass('content-1');
        $('#hey2').removeClass('conten-3 ');
        $('#hey1').removeClass('containe-3');
        $('#hey1').addClass('container-3');
        $('#hey2').addClass('content-3 ');
        $('#pic').addClass('pic');
        $('#pic').removeClass('pi');
        $('#pic-1').addClass('pic1');
        $('#pic-1').removeClass('pi');
        $('#pic-2').addClass('pic-2');
        $('#pic-2').empty();
        if ($('.break').is(':empty')) {
            $('.break').append('<br/><br/><br/><br/><br/><br/>');
        }
    }
}
$(document).ready(() => {
    width();
});
window.addEventListener('resize', () => {
    width();
});
$(function () {
    $('.nav-container').load('navbar.html', () => {
        document.getElementById('menu-btn').addEventListener('click', () => {
            let menuItems = document.querySelectorAll('nav ul li');

            menuItems.forEach((item) => {
                item.classList.toggle('visible');
            });
        });
    });
});
$(function () {
    $('.footer-container').load('footer.html');
});