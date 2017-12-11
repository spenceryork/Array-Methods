// Copy the code below into the JavaScript file, and follow the instructions in the comments.
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
let el = document.getElementById("planets");

planets.forEach(function(x){
    el.innerHTML += x + " ";
});

// Use the map method to create a new array where the first letter of each planet is capitalized

let planetCapitals = planets.map(function(x){
    // x.charAt(0) takes the first letter of each item in the array ("x") and capializes it and puts it in it's own array. x.slice(1) cuts out the value starting at index 1 until the end of each value ("x"). 
   let firstLetter =  x.charAt(0).toUpperCase() + x.slice(1);
   console.log(firstLetter);
});

// Use the filter method to create a new array that contains planets with the letter 'e'


let planetE = planets.filter(function(x) {
    return x.indexOf("e") >= 0;})
    console.log(planetE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let wordsSentence = words.reduce( function(w1, w2) {
    return w1 + " " + w2;
    console.log("word sentence", wordsSentence);
});
