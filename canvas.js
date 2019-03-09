var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


var x = 200
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight)

  c.fillStyle = "rgba(255,0,0,0.5)"
  c.fillRect(x,100,10,10);
  x+=1
}
animate()















// Makes a title and returns list of letters
function makeTitle(title_text) {
  // Make title
  var title_div = document.createElement("div");
  title_div.setAttribute("class", "title");
  // Make letters
  var letters = [];
  for (var i = 0; i < title_text.length; i++) {
    var character_div = document.createElement("div");
    var copy_character;
    character_div.setAttribute("class", "letter");

    copy_character = document.createTextNode(title_text[i]);
    character_div.appendChild(copy_character);
    title_div.appendChild(character_div);

    letters.push(character_div);
  }
  // Parent and return array of letters
  parent.appendChild(title_div);
  return letters;
}

// Find the title, get it's text and remove it
var title_text = document.getElementById("title").innerHTML;
var parent = document.getElementById("title").parentNode;
parent.removeChild(document.getElementById("title"));

var title_count = 1;
var color_title_delay = 0.42;
var color_letter_delay = 1 / 40;
var wiggle_title_delay = 0;
var wiggle_letter_delay = 1 / 10;

var x_start = -50;
var y_start = -130;
var x_step = .4;
var y_step = 1.8;

// Make titles
var title_elements = [];
for (var i = 0; i < title_count; i++) {
  title_elements.push(makeTitle(title_text));
}

//Assign the animations and stuff per element
for (var title = 0; title < title_elements.length; title++) {
  //Set z vis and pos
  title_parent = title_elements[title][0].parentElement;

  x_pos = x_step * title + x_start;
  y_pos = y_step * title + y_start;
  transform = "transform: translate(" + x_pos + "%, " + y_pos + "%);";
  z = "z-index: " + 100 * (title_count / (title + 1)) + ";";

  title_parent.setAttribute("style", transform + z);

  for (var letter = 0; letter < title_elements[title].length; letter++) {
    // Strings to assign animations
    var color_offset = title * color_title_delay + letter * color_letter_delay;
    var wiggle_offset =
      title * wiggle_title_delay + letter * wiggle_letter_delay;

    var color_str = "color 2.5s linear " + color_offset + "s infinite";
    var wiggle_str = "wiggle 4s ease-in-out " + wiggle_offset + "s infinite";

    var combo_str = "animation: " + color_str  + ", " + wiggle_str + ";";

    title_elements[title][letter].setAttribute("style", combo_str);
  }
}
