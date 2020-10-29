//preloader designs
const path = document.querySelectorAll("#logo path");
const logo = document.querySelector("#logo");
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");
//this is going to gve us the total stroke length of all the letters and then we use it for the dash array and offset. when you use the value in the dash array, you will see the whole letter but when you offset with that same value it disappears, then you can start reducing the length little by little in the offset.
// for (let i = 0; i < path.length; i++) {
//   console.log(`leter ${i} is ${path[i].getTotalLength()}`);
// }
setTimeout(() => {
  for (let i = 12; i <= 23; i++) {
    path[i].style.strokeDasharray = "70px";
  }
}, 7500);
setTimeout(() => {
  for (let i = 12; i <= 23; i++) {
    path[i].style.strokeDasharray = "1000px";
  }
}, 8000);
setTimeout(() => {
  logo.classList.add("preloader-remove");
  logo.animate(
    [
      // keyframes
      { width: "100%" },
      { width: "0%" },
    ],
    {
      // timing options
      duration: 2000,
    }
  );
}, 8500);
setTimeout(() => {
  logo.style.display = "none";
  content.style.display = "block";
}, 10600);

// header
let menuToggle = document.querySelector(".menu-toggle");
let search = document.querySelector(".search");
let closebtn = document.querySelector(".closebtn");

let searchDiv = document.querySelector(".search-div");
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
// home button clicks
let imgArrays = [
  {
    img: "cover.jpg",
    name: "CUTE",
  },
  {
    img: "img2.jpg",
    name: "HANDSOME",
  },
  {
    img: "img3.jpg",
    name: "GROUP",
  },
  {
    img: "img4.jpg",
    name: "BEAUTIFUL",
  },
  {
    img: "img5.jpg",
    name: "CHILD",
  },
  {
    img: "img6.jpg",
    name: "BALLET",
  },
];
let btnleft = document.querySelector(".btnleft"),
  btnright = document.querySelector(".btnright"),
  bodyContent = document.querySelector(".body-content"),
  nameCenter = document.querySelector(".name-center"),
  n = 0,
  num = 0;
btnleft.addEventListener("click", function () {
  n <= 0 ? (n = imgArrays.length - 1) : n--;
  placeImage(n, "left");
});
btnright.addEventListener("click", function () {
  n >= 5 ? (n = 0) : n++;
  placeImage(n, "right");
});
function placeImage(n, value) {
  console.log(n);
  bodyContent.style.backgroundImage = `url(../../images/${imgArrays[n].img})`;
  nameCenter.innerHTML = `${imgArrays[n].name}`;

  if (value == "left") {
    console.log(num);
    n - 1 < 0 ? (num = imgArrays.length - 1) : (num = n - 1);
    btnleft.style.backgroundImage = `url(../../images/${imgArrays[num].img})`;
  } else if (value == "right") {
    console.log(num);
    n + 1 > 5 ? (num = 0) : (num = n + 1);
    btnright.style.backgroundImage = `url(../../images/${imgArrays[num].img})`;
  }
}
setTimeout(function () {
  setInterval(function () {
    n >= 5 ? (n = 0) : n++;
    bodyContent.style.backgroundImage = `url(../../images/${imgArrays[n].img})`;
    nameCenter.innerHTML = `${imgArrays[n].name}`;
  }, 5000);
}, 100);
