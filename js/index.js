// JS and jQuery functions for index.html

// Load navbar and add on click handler
$(function(){
    $(".nav-container").load("common/navbar.html", () => {


        document.getElementById('menu-btn').addEventListener('click', () => {
            let menuItems = document.querySelectorAll('nav ul li')

            menuItems.forEach((item) => {
                item.classList.toggle("visible")
            })
        })
    })
});