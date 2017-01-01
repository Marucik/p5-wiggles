var navElements = document.getElementsByTagName('LI');

function clrChange(r = 0, g = 0, b = 0){
  return function(){
  clrR = r;
  clrG = g;
  clrB = b;
  for (var i = 0; i < navElements.length; i++) {
    navElements[i].style.backgroundColor = "rgba(" + r + "," + g + "," + b + ", 0.9)";
    }
  }
}

navElements[0].addEventListener("click", clrChange(150, 0, 0));
navElements[1].addEventListener("click", clrChange(0, 150, 0));
navElements[2].addEventListener("click", clrChange(0, 0, 150));
