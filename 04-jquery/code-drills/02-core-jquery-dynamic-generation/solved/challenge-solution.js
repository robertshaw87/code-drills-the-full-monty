$(document).ready(function () {

    $(".jumbotron").on("click", "#randomLetter", function () {

        // create variable called text and have it equal an empty string
        var text = "";
        // create a function called randomizingText
        function randomizingText() {
            // create a variable called possibleLetters and a string of A-Z
            var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            // have text equal to text plus possibleLetters at the string method of .charAt() at math floor and math random of the length of possible letters
            text = text + possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
            // now return the text 
            return text;
        }
        // lets console.log the function randomizingText 
        console.log(randomizingText());
        // now lets append the text into a jquery selector of an id of letters
        $("#letters").append(text);

    });

});
