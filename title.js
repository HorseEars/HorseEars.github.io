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

var color_letter_delay = 1 / 40;
var wiggle_letter_delay = 1 / 10;

// Make titles
title_element = makeTitle(title_text)

for (var letter = 0; letter < title_element.length; letter++) {
  // Strings to assign animations
  var color_offset = letter * color_letter_delay;
  var wiggle_offset = letter * wiggle_letter_delay;

  var color_str = "color 3.5s linear " + color_offset + "s infinite";
  var wiggle_str = "wiggle 5s ease-in-out " + wiggle_offset + "s infinite";

  var combo_str = "animation: " + color_str  + ", " + wiggle_str + ";";

  title_element[letter].setAttribute("style", combo_str);
}
