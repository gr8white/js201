// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (size) {
    var string = ''
    for (let int = 0; int < size; int++) {
        for (let i = 0; i < size; i++) {
        string = string + '*'
        }
    string = string + '\n'
    }
return string
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******

function makeBox (width, height) {
    var fullString = ''
    var hollowString = ''
    for (let i = 0; i < width; i++) {
        var fullString = fullString + '*'
    }
    fullString = fullString + '\n'
    for (let i = 0; i < height; i++) {
        hollowString = hollowString + '*'
        hollowString = hollowString + '\n'
    }
    for (let i = 0; i < width; i++) {
        var fullString = fullString + '*'
    }
return fullString
}

console.log(makeBox(6, 4))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
