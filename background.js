var background_c = document.querySelector("#background");
var background_ctx = background_c.getContext("2d");

var starting_width = 0
var starting_height = 0

background_c.width = window.innerWidth;
background_c.height = window.innerHeight;

window.addEventListener("resize", function() {
  background_c.width = window.innerWidth;
  background_c.height = window.innerHeight;
});


function Star(x,y,radius,speed) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;
  this.t = Math.random() * Math.PI * 2;

  this.draw = function() {
    background_ctx.fillStyle = "#ffffff";
    background_ctx.beginPath();
    var twinkle_rad = this.radius * (1 - Math.cos(this.t)**6);
    background_ctx.arc(this.x,this.y,twinkle_rad,0,Math.PI*2);
    background_ctx.fill();
  }
  this.update = function() {
    this.t += this.speed;
    this.draw();
  }

}


var stars = [];
for (var i = 0; i < 600; i++) {
  var star_x = Math.random() * background_c.width * 1.5;
  var star_y = Math.random() * background_c.height * 1.5;
  var star_r = Math.random() * 2;
  var star_s = Math.random() * .03;
  stars.push(new Star(star_x,star_y,star_r,star_s));
}

function animate() {
  requestAnimationFrame(animate);
  background_ctx.clearRect(0,0,innerWidth,innerHeight);
  // title_ctx.clearRect(0,0,innerWidth,innerHeight);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update()
  }
  for (var i = 0; i < letters.length; i++) {
    letters[i].update()
  }
}
animate();
