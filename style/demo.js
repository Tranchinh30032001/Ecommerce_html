let listTag_a_Navbar = document.querySelectorAll(".navbar-links a");
let menuBtn = document.querySelector(".menuBtn");
menuBtn.addEventListener("click", () => {
  document.querySelector(".navbar-links").classList.toggle("active");
});
