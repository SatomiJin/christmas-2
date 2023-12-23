var boxgift = document.querySelector(".box-gift");
var Close = document.querySelector(".fa-xmark");
var boxContent = document.querySelector(".box-content");
var content = document.querySelector(".content");
var audio = document.querySelector("audio");
var text = document.querySelector(".text-noel");
boxgift.onclick = function () {
  boxgift.classList.toggle("active");
  // boxContent.classList.add('active')
};
text.onclick = function () {
  audio.play();
};
content.onclick = function () {
  boxContent.classList.add("active");
};
Close.onclick = function () {
  boxContent.classList.remove("active");
};
