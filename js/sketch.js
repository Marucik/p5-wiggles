var max_distance;
var x = 100;
function setup() {
  createCanvas(2000, 1080);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);
  for(var i = 0; i <= width; i += 20) {
    for(var j = 0; j <= height; j += 20) {
      var size = dist(mouseX, mouseY, i, j);
      size = size/max_distance * 40;
      size += random(0.1,3);
      ellipse(i, j, size, size);
      fill(clrR, clrG, clrB);
    }
  }
}
