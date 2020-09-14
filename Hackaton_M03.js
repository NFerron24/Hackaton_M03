// Menu laten verscheinen en verdwijnen op 'click' actie:

let toggleSide = function () {
  let menuShow = document.querySelector(".side__menu");
  menuShow.classList.toggle("hide__menu");
};

let toggleMenu = document.querySelector(".toggler");
toggleMenu.addEventListener("click", toggleSide);

//Menu laten verscheinen en verdwijnen op 'hover' actie:

/*let hoverMenu = document.querySelector(".toggler");
hoverMenu.addEventListener("mouseenter", toggleSide);
hoverMenu.addEventListener("mouseleave", toggleSide);
*/

// Achtergrondkleur veranderd op 'click' actie:
let toggleHome = function () {
  document.body.style.background = "inherit";
};
let homeBtn = document.querySelector("#home__button");
homeBtn.addEventListener("click", () => {
  toggleHome();
  toggleSide();
});
let toggleBlue = function () {
  document.body.style.background = "blue";
};
let blueBtn = document.querySelector("#blue__button");
blueBtn.addEventListener("click", () => {
  toggleBlue();
  toggleSide();
});
let toggleGreen = function () {
  document.body.style.background = "green";
};
let greenBtn = document.querySelector("#green__button");
greenBtn.addEventListener("click", () => {
  toggleGreen();
  toggleSide();
});
let toggleYellow = function () {
  document.body.style.background = "yellow";
};
let yellowBtn = document.querySelector("#yellow__button");
yellowBtn.addEventListener("click", () => {
  toggleYellow();
  toggleSide();
});
let toggleRed = function () {
  document.body.style.background = "red";
};
let redBtn = document.querySelector("#red__button");
redBtn.addEventListener("click", () => {
  toggleRed();
  toggleSide();
});

let checkBlue = document.querySelector(".checked");
checkBlue.addEventListener("change", function () {
  if (toggleBlue) {
    checkBlue.checked;
  } else {
    checkBlue.unchecked;
  }
});
