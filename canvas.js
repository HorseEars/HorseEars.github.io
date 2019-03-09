var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function Star(x,y,radius,speed) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;
  this.t = Math.random() * Math.PI * 2;

  this.draw = function() {
    c.fillStyle = "#ffffff";
    c.beginPath();
    var twinkle_rad = this.radius * (1 - Math.cos(this.t)**6);
    c.arc(this.x,this.y,twinkle_rad,0,Math.PI*2);
    c.fill();
  }
  this.update = function() {
    this.t += this.speed;
    this.draw();
  }

}

var stars = [];
for (var i = 0; i < 600; i++) {
  var star_x = Math.random() * canvas.width * 1.5;
  var star_y = Math.random() * canvas.height * 1.5;
  var star_r = Math.random() * 2;
  var star_s = Math.random() * .01;
  stars.push(new Star(star_x,star_y,star_r,star_s));
}

// console.log(star.x);
// console.log(star.y);
// console.log(star.radius);
// star.update();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update()
}
}
animate();
