// // two ways to make a function
// // function driveCar() {
// //
// // }
//
// // Higher Order Function: is used as an argument
// // var driveCar = function(callback) {
// function driveCar(callback) {
//
//     var temp = callback() // arguments holding a function needs () in order to run them
//     // alert(temp)
//
//     return function() {
//         return 'function in a function ' + temp // this is closure and allows access to this variable outside of this function
//     }
// }
//
// // anonumous function being used to call the above as an argument
// // added a var greeting to capture the return above
// // returning a function is called a closure
// var greeting = driveCar(function() {
//     return 'boogie'
// })
// var greeting = driveCar(() => {  // same as above because arrow function
//     return 'boogie'
// })
// var greeting = driveCar(() => 'boogie')// same as above two because arrow function and return is implied
//
//
// console.log(greeting())
// var msg = greeting()
// document.body.innerHTML = msg
//
// // function inside function
// function makeFood() {
//     var lettuce = true
//     function makeTacos() {
//         var cheese = true
//         console.log(lettuce) //can access variable because parent variables are available.
//     }
//     console.logI(cheese) // this won't work because cheese is declared in chlid.
// }


// IIFE Immediately Invoked Functional Expression
// makes an anomymous function and then calls itself ()
// () surrounding entire thing puts the output to screen
(function() {
    'use strict' // throws extra error checking in function or at top of code if this is placed there.

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var capitalizeFirst = function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1)
    }
    var capitalizeAll = function(words) {
        return words.split(' ').map(capitalizeFirst).join(' ') // this takes a sentence, splits all words in to an arraw of words, then .map passes each word in array through capitalizeFirst function one //by one, then joins all words back in to a single string with spaces
        // essentially converting string to array, processing words, then returning a string
    }
    //     var padLeft = function(word, char = '0', length = 2) { // takes in values as arguments and assigns '0' or 2 if undefined
    //     // char = char || '0' // evaluates left if undefined assigned right
    //     // length = length || 2
    //
    //
    //     return char.repeat(length-word.length) + word
    // }

    // this leaks the information and functions here to the outside world
    // left is the public stuff.  right is the private stuff
    window.dog = {
        name: 'alfie',
        capitalizeFirst: capitalizeFirst,
        capitalizeAll: capitalizeAll,
        // padLeft: padLeft,
        // makeItRed: function() {
        //     document.body.style.backgroundColor = 'red'
        // },
        one: one,
    }
}())
