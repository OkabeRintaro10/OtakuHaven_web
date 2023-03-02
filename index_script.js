var menu = document.querySelector("#menu-icon");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  menu.classList.toggle("ri-close-fill");
  navbar.classList.toggle("open");
});
