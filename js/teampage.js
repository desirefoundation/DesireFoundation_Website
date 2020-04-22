$(function () {
    $(".nav-container").load("navbar.html", () => {
        document.getElementById('menu-btn').addEventListener('click', () => {
            let menuItems = document.querySelectorAll('nav ul li')

            menuItems.forEach((item) => {
                item.classList.toggle("visible")
            })
        })
    })
});

$(document).ready(function() {
    $('.tree-container').load('tree.html');
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.tree-container');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');

        setTimeout(function () {
            document.querySelector('#Branch1').classList.add('fadeIn');
        }, 100);
        setTimeout(function () {
            document.querySelector('#Branch1').classList.remove('hide');
        }, 100);
        setTimeout(function () {
            document.querySelector('#Branch2').classList.add('fadeIn');
        }, 100);
        setTimeout(function () {
            document.querySelector('#Branch2').classList.remove('hide');
        }, 100);
        setTimeout(function () {
            document.querySelector('#Branch3').classList.add('fadeIn');
        }, 200);
        setTimeout(function () {
            document.querySelector('#Branch3').classList.remove('hide');
        }, 200);
        setTimeout(function () {
            document.querySelector('#Branch4').classList.add('fadeIn');
        }, 200);
        setTimeout(function () {
            document.querySelector('#Branch4').classList.remove('hide');
        }, 200);
        setTimeout(function () {
            document.querySelector('#Branch5').classList.add('fadeIn');
        }, 300);
        setTimeout(function () {
            document.querySelector('#Branch5').classList.remove('hide');
        }, 300);
        setTimeout(function () {
            document.querySelector('#Branch6').classList.add('fadeIn');
        }, 300);
        setTimeout(function () {
            document.querySelector('#Branch6').classList.remove('hide');
        }, 300);
        setTimeout(function () {
            document.querySelector('#Branch7').classList.add('fadeIn');
        }, 400);
        setTimeout(function () {
            document.querySelector('#Branch7').classList.remove('hide');
        }, 400);
        setTimeout(function () {
            document.querySelector('#Branch8').classList.add('fadeIn');
        }, 400);
        setTimeout(function () {
            document.querySelector('#Branch8').classList.remove('hide');
        }, 400);
        setTimeout(function () {
            document.querySelector('#Branch9').classList.add('fadeIn');
        }, 500);
        setTimeout(function () {
            document.querySelector('#Branch9').classList.remove('hide');
        }, 500);
        setTimeout(function () {
            document.querySelector('#Branch10').classList.add('fadeIn');
        }, 500);
        setTimeout(function () {
            document.querySelector('#Branch10').classList.remove('hide');
        }, 500);
        setTimeout(function () {
            document.querySelector('#Branch11').classList.add('fadeIn');
        }, 600);
        setTimeout(function () {
            document.querySelector('#Branch11').classList.remove('hide');
        }, 600);
        setTimeout(function () {
            document.querySelector('#Branch12').classList.add('fadeIn');
        }, 600);
        setTimeout(function () {
            document.querySelector('#Branch12').classList.remove('hide');
        }, 600);
        setTimeout(function () {
            document.querySelector('#Branch13').classList.add('fadeIn');
        }, 700);
        setTimeout(function () {
            document.querySelector('#Branch13').classList.remove('hide');
        }, 700);
        setTimeout(function () {
            document.querySelector('#Branch14').classList.add('fadeIn');
        }, 700);
        setTimeout(function () {
            document.querySelector('#Branch14').classList.remove('hide');
        }, 700);
        setTimeout(function () {
            document.querySelector('#Branch15').classList.add('fadeIn');
        }, 800);
        setTimeout(function () {
            document.querySelector('#Branch15').classList.remove('hide');
        }, 800);
        setTimeout(function () {
            document.querySelector('#Branch16').classList.add('fadeIn');
        }, 800);
        setTimeout(function () {
            document.querySelector('#Branch16').classList.remove('hide');
        }, 800);
    }

    else {
        
    }
});

