// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'
function numberJoinerWhile (startNum, endNum) {
    var string = ''
    let i = startNum
    while (i <= endNum) {
        string = string + i + '_'
        i = i + 1
    }
    var len = string.length
    string = string.substring(0, len - 1)
    return string
}

function numberJoinerWhile2 (startNum, endNum) {
    var i = startNum
    var myArr = []
    while (i <= endNum) {
        myArr.push (i)
        i++
    }
    return myArr.join('_')
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (startNum, end) {
    var string = ''
    let i = startNum
    for (let i = startNum; i <= end; i++) {
        string = string + i + '_'
    }
    var len = string.length
    string = string.substring(0, len - 1)
    return string

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy (startNum, endNum, thirdArg) {
    //if (thirdArg === undefined) thirdArg = '_'
    if (typeof thirdArg !== 'string') thirdArg = '_'
    //if (!thirdArg) thirdArg = '_'
    var i = startNum
    var myArr = []
    while (i <= endNum) {
        myArr.push (i)
        i++
    }
    return myArr.join(thirdArg)
}

console.log(numberJoinerFancy(2, 5))
