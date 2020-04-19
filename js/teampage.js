$(function(){
    $(".nav-container").load("navbar.html", () => {
        document.getElementById('menu-btn').addEventListener('click', () => {
            let menuItems = document.querySelectorAll('nav ul li')

            menuItems.forEach((item) => {
                item.classList.toggle("visible")
            })
        })
    })
});
    