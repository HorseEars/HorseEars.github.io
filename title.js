var title_c = document.querySelector("#title");
var title_ctx = title_c.getContext("2d");

var canvas_width = title_c.width
var canvas_height = title_c.height

function color(x,offset) {
  var timescale = 30
  inside = Math.PI*(x+(offset*timescale))/timescale
  preshift = (Math.cos(inside)+1)/2
  complete = 75*preshift+180
  return complete
}

function Letter(x_pos,y_pos,c_time,p_time,char) {
  this.x = x_pos;
  this.y = y_pos;
  this.ct = c_time;
  this.pt = p_time;
  this.char = char;

  this.draw = function() {
    var r = color(this.ct,0);
    var g = color(this.ct,2/3);
    var b = color(this.ct,4/3);

    var x_wiggle = this.x+Math.cos(this.pt/25)*horz_amp
    var y_wiggle = this.y+Math.sin(this.pt/30)*vert_amp

    title_ctx.fillStyle = "rgb("+r+","+g+","+b+")";

    title_ctx.fillText(this.char, x_wiggle, y_wiggle);
  }
  this.update = function() {
    this.ct += speed;
    this.pt += speed;
    this.draw();
  }
}

var title = "Howdy, I am Thomas"

title_ctx.font = "95px Sriracha";
title_start_height = canvas_height/2+25
title_width = title_ctx.measureText(title).width
title_start_width = (canvas_width - title_width)/2


var letters = [];

var speed = 1.22;
var width_offset = 0;
var color_offset = 2;
var position_offset = 6;
var horz_amp = 10;
var vert_amp = 28;

for (var i = 0; i < title.length; i++) {
  var letter_start = title_start_width + width_offset
  letters.push(new Letter(letter_start,title_start_height,
              i*color_offset,i*position_offset,title[i]));
  width_offset += title_ctx.measureText(title[i]).width
}
