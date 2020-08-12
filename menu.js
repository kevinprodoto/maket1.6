let burgerMobile = document.querySelector(".burger-mobile");
let burgerLaptop = document.querySelector(".burger-laptop");
let close =document.querySelector(".close");
let modalMenu = document.querySelector(".modal-menu");
let headerMobileInactive = document.querySelector(".header--mobile");
let headerLaptopInactive = document.querySelector(".header--laptop");
let mainInactive = document.querySelector("main");
let html = document.querySelector("html");
burgerMobile.addEventListener("click", function () {
    modalMenu.classList.add("modal-active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
burgerLaptop.addEventListener("click", function () {
    modalMenu.classList.add("modal-active");
    headerMobileInactive.classList.add("inactive");
    headerLaptopInactive.classList.add("inactive");
    mainInactive.classList.add("inactive");
    html.classList.add("body-overflow-hidden");
});
close.addEventListener("click", function () {
    modalMenu.classList.remove("modal-active");
    headerMobileInactive.classList.remove("inactive");
    headerLaptopInactive.classList.remove("inactive");
    mainInactive.classList.remove("inactive");
    html.classList.remove("body-overflow-hidden");
});