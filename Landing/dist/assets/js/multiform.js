/*---------------form----------*/
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var progress = document.getElementById("progress");
var last = document.getElementById("last");

next1.onclick = function () {
  form1.style.left = "-550px";
  form2.style.left = "40px";
  progress.style.width = "305px";
};

back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "550px";
  progress.style.width = "150px";
};

next2.onclick = function () {
  form2.style.left = "-550px";
  form3.style.left = "40px";
  progress.style.width = "460px";
};

back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "550px";
  progress.style.width = "305px";
};

last.onclick = function () {
  window.confirm("Allow browser to save password.");
};
