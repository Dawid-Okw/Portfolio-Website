function toggleMenu() {
    const menu = document.querySelector(".menu-links"); /*targeting menu-links element from html file */
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open") 
    icon.classList.toggle("open") 
}