const menuItems = document.querySelector(".menu_items")
const toggleMenu = document.querySelector(".toggle_menu")
const closeMenu = document.querySelector(".close_menu")

toggleMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show() {
    menuItems.style.display = "flex"
    menuItems.style.top = "0"

}

function close() {
    menuItems.style.top = "-100%"
}
