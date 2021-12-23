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

$(document).ready(function () {
    $('.tree-container').load('tree.html');
})

$(function () {
    $(".teamheader-container").load("teamheader.html");
});

$(function () {
    $(".teamcard-container").load("teamcard.html");
});

$(function () {
    $(".teamtestimonial-container").load("teamtestimonial.html");
});

$(function () {
    $(".footer-container").load("footer.html");
});

$(function () {
    $('[data-toggle="popover"]').popover({
        trigger:'hover'
    });
  });

window.addEventListener('scroll', function () {
    var element = document.querySelector('.tree-container');
    var position = element.getBoundingClientRect();

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


    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
        setTimeout(function () {
            document.querySelector('.p1').classList.add('zoomIn');
        }, 900);
        setTimeout(function () {
            document.querySelector('.p1').classList.remove('hide');
        }, 900);
        setTimeout(function () {
            document.querySelector('.p2').classList.add('zoomIn');
        }, 1800);
        setTimeout(function () {
            document.querySelector('.p2').classList.remove('hide');
        }, 1800);
        setTimeout(function () {
            document.querySelector('.p3').classList.add('zoomIn');
        }, 1400);
        setTimeout(function () {
            document.querySelector('.p3').classList.remove('hide');
        }, 1400);
        setTimeout(function () {
            document.querySelector('.p4').classList.add('zoomIn');
        }, 2400);
        setTimeout(function () {
            document.querySelector('.p4').classList.remove('hide');
        }, 2400);
        setTimeout(function () {
            document.querySelector('.p5').classList.add('zoomIn');
        }, 2600);
        setTimeout(function () {
            document.querySelector('.p5').classList.remove('hide');
        }, 2600);
        setTimeout(function () {
            document.querySelector('.p6').classList.add('zoomIn');
        }, 1900);
        setTimeout(function () {
            document.querySelector('.p6').classList.remove('hide');
        }, 1900);
        setTimeout(function () {
            document.querySelector('.p7').classList.add('zoomIn');
        }, 1300);
        setTimeout(function () {
            document.querySelector('.p7').classList.remove('hide');
        }, 1300);
        setTimeout(function () {
            document.querySelector('.p8').classList.add('zoomIn');
        }, 2000);
        setTimeout(function () {
            document.querySelector('.p8').classList.remove('hide');
        }, 2000);
        setTimeout(function () {
            document.querySelector('.p9').classList.add('zoomIn');
        }, 2500);
        setTimeout(function () {
            document.querySelector('.p9').classList.remove('hide');
        }, 2500);
        setTimeout(function () {
            document.querySelector('.p10').classList.add('zoomIn');
        }, 1500);
        setTimeout(function () {
            document.querySelector('.p10').classList.remove('hide');
        }, 1500);
        setTimeout(function () {
            document.querySelector('.p11').classList.add('zoomIn');
        }, 2100);
        setTimeout(function () {
            document.querySelector('.p11').classList.remove('hide');
        }, 2100);
        setTimeout(function () {
            document.querySelector('.p12').classList.add('zoomIn');
        }, 1200);
        setTimeout(function () {
            document.querySelector('.p12').classList.remove('hide');
        }, 1200);
        setTimeout(function () {
            document.querySelector('.p13').classList.add('zoomIn');
        }, 2300);
        setTimeout(function () {
            document.querySelector('.p13').classList.remove('hide');
        }, 2300);
        setTimeout(function () {
            document.querySelector('.p14').classList.add('zoomIn');
        }, 1600);
        setTimeout(function () {
            document.querySelector('.p14').classList.remove('hide');
        }, 1600);
        setTimeout(function () {
            document.querySelector('.p15').classList.add('zoomIn');
        }, 1100);
        setTimeout(function () {
            document.querySelector('.p15').classList.remove('hide');
        }, 1100);
        setTimeout(function () {
            document.querySelector('.p16').classList.add('zoomIn');
        }, 2200);
        setTimeout(function () {
            document.querySelector('.p16').classList.remove('hide');
        }, 2200);
        setTimeout(function () {
            document.querySelector('.p17').classList.add('zoomIn');
        }, 1700);
        setTimeout(function () {
            document.querySelector('.p17').classList.remove('hide');
        }, 1700);
        setTimeout(function () {
            document.querySelector('.p18').classList.add('zoomIn');
        }, 1000);
        setTimeout(function () {
            document.querySelector('.p18').classList.remove('hide');
        }, 1000);

    }


    else {

    }
});

