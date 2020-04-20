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

window.addEventListener('scroll', function () {
    var element = document.querySelector('.tree');
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        console.log('Element is fully visible in screen');
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_2').classList.remove('hide');
        }, 100);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_3').classList.remove('hide');
        }, 200);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_4').classList.remove('hide');
        }, 300);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_5').classList.remove('hide');
        }, 400);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_6').classList.remove('hide');
        }, 500);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_7').classList.remove('hide');
        }, 600);
        setTimeout(function () {
            document.querySelector('.Graphic_x0020_Style_x0020_8').classList.remove('hide');
        }, 700);
    }

    // checking for partial visibility
    if (position.top < window.innerHeight && position.bottom >= 0) {
        console.log('Element is partially visible in screen');
    }
});

