var navElements = document.getElementsByTagName('LI');
navElements[0].addEventListener("click",function clrChange() {
  clrR = 150;
  clrG = 0;
  clrB = 0;
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.backgroundColor = "rgba(200, 0, 0, 0.9)";
  }
})

navElements[1].addEventListener("click",function clrChange() {
  clrR = 0;
  clrG = 150;
  clrB = 0;
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.backgroundColor = "rgba(0, 200, 0, 0.9)";
  }
})

navElements[2].addEventListener("click",function clrChange() {
  clrR = 0;
  clrG = 0;
  clrB = 150;
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.backgroundColor = "rgba(0, 0, 200, 0.9)";
  }
})
