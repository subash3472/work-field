window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");

  if (window.scrollY === 0) {
    navbar.classList.remove("navbar-red-bg");
  } else {
    navbar.classList.add("navbar-red-bg");
  }
});
