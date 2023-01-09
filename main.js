window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

const navBarToggleBtn = document.getElementById("nav-toggle-btn");
const mainNav = document.getElementById("main-nav");

navBarToggleBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  navBarToggleBtn.classList.toggle("active");
});

// Det samme som Toggle
// if (menuShown) {
//   mainNav.classList.add("active");
//   navBarToggleBtn.classList.add("active");
// } else {
//   mainNav.classList.remove("active");
//   navBarToggleBtn.classList.remove("active");
// }
