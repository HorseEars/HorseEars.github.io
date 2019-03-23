var title_c = document.querySelector("#title");
var title_ctx = title_c.getContext("2d");

var canvas_width = title_c.width
var canvas_height = title_c.height


function color(x,offset) {
  inside = Math.PI*(x+(offset*color_timescale))/color_timescale
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
    for (var i = 0; i < trail_count; i++) {
      var trail_ct = this.ct + i * trail_color_offset
      var trail_pt = this.pt + i * trail_wiggle_offset
      var r = color(trail_ct,0);
      var g = color(trail_ct,2/3);
      var b = color(trail_ct,4/3);

      var x_wiggle = this.x+Math.cos(trail_pt/wiggle_timescale_x)*horz_amp
      var y_wiggle = this.y+Math.sin(trail_pt/wiggle_timescale_y)*vert_amp

      title_ctx.fillStyle = "rgb("+r+","+g+","+b+")";

      title_ctx.fillText(this.char, x_wiggle, y_wiggle);
    }

  }
  this.update = function() {
    this.ct += speed;
    this.pt += speed;
    this.draw();
  }
}

var title = "Howdy, I'm Tommy Thomas"
title_ctx.font = "74px \'Permanent Marker\', cursive";

title_start_height = canvas_height/2+25
title_width = title_ctx.measureText(title).width
title_start_width = (canvas_width - title_width)/2


var letters = [];

var speed = 1.1;

var horz_amp = 8;
var vert_amp = 18;
var wiggle_timescale_x = 25;
var wiggle_timescale_y = 30;
var wiggle_offset = 6;

var color_offset = 5;
var color_timescale = 320

var trail_count = 13;
var trail_color_offset = 30;
var trail_wiggle_offset = 2;


var width_total = 0;
window.addEventListener("load", function() {
  for (var i = 0; i < title.length; i++) {
    var letter_start = title_start_width + width_total
    letters.push(new Letter(letter_start,title_start_height,
                i*color_offset,i*wiggle_offset,title[i]));
    width_total += title_ctx.measureText(title[i]).width
    console.log(title_ctx.measureText(title[i]).width);
  }
});
