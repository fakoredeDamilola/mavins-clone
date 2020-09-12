const content = document.querySelector(".content");
setTimeout(() => {
  content.style.display = "block";
}, 500);

// header
let menuToggle = document.querySelector(".menu-toggle");
let scrollToTop = document.querySelector(".scrollToTop");
let search = document.querySelector(".search");
let closebtn = document.querySelector(".closebtn");

let searchDiv = document.querySelector(".search-div");
let headerTop = document.querySelector(".header-top");
let bars = document.querySelectorAll(".bars")
closebtn.addEventListener("click", function () {
  searchDiv.classList.remove("showSearch");
});
search.addEventListener("click", function () {
  console.log(searchDiv);
  searchDiv.classList.add("showSearch");
});
let showNav = (e) => {
  let menu = document.querySelector(".menu");
  menu.classList.toggle("active");
};
menuToggle.addEventListener("click", showNav);

//add background to header
window.addEventListener("scroll", function (e) {
  if (window.scrollY > 40) {
    headerTop.style.backgroundColor = "black";
    bars.forEach(bar => {
      bar.style.backgroundColor = "white"
    })
    scrollToTop.style.display = "flex"
  } else {
    headerTop.style.backgroundColor = "transparent";
    bars.forEach(bar => {
      bar.style.backgroundColor = "rgb(66, 66, 66)"
    })
    scrollToTop.style.display = "none"
  }
});
// scroll to top
scrollToTop.addEventListener("click", function (e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
})
//cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    `top: ${e.pageY - 10}px;left: ${e.pageX - 10}px`
  );
});
document.addEventListener("click", function () {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
