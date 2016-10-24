// Your DOM library code goes here inside of an IIFE and must set a global variables called md.
(function () {
    var one = function(selector) {
        return document.querySelector(selector)
    }
    var all = function(selector) {
        return document.querySelectorAll(selector)
    } //: Find all matching elements using any CSS selector
    var remove = function(selector) {
        // var SelectorArray = document.querySelectorAll(selector) // optional for FIND ALL
        var selector = document.querySelector(selector)
        // SelectorArray.forEach(function(item, i){
        // console.dir(item)
        selector.parentNode.removeChild(selector)
        // })
        // document.querySelectorAll(selector).parentNode.removeChild(selector)
        return 'Remove operation complete'
    } //: Remove an element
    var addClass = function(selector, classToAdd) {
        var collection = document.querySelector(selector)
        // collection.forEach(function(item) {
            collection.classList.add(classToAdd)
        // })
        return 'Class added to first specified tag'
    }
    var removeClass = function(selector, classToRemove) {
        var collection = document.querySelector(selector)
        // collection.forEach(function(item) {
            collection.classList.remove(classToRemove)
        // })
        return 'Class removed to each tag found'
    } //: Remove a CSS class from an element
    var hasClass = function(selector, classCheck) {
        // console.log("Output for hasClass function:")
        if (document.querySelector(selector) === classCheck) {
            return true
        }
        else {
            return false
        }
    }//: Return true if an element contains a CSS class in it\'s CSS attribute (see classList documentation)
    var getAttr = function(selector){
        var attributeVariable = document.querySelector(selector)
        // console.log("Output for getAttr function:")
        attributeVariable.classList.forEach(function(item) {
            console.log(item)
        })
        // console.log(attributeVariable)
    }//: Get an HTML attribute from an element
    var setAttr = function(selector, attribute) {
        // console.log(selector)
        return document.querySelector(selector).className = attribute
    } //: Set an HTML attribute on an element
    var setHTML = function(selector, htmlToSet) {
        return document.querySelector(selector).innerHTML = htmlToSet
    } //: Set the innerHTML of an element
    var getHTML = function(selector) {
        return document.querySelector(selector).innerHTML
    } //: Get the innerHTML of an element
    window.md = {
        one: one,
        all: all,
        remove: remove,
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        getAttr: getAttr,
        setAttr: setAttr,
        setHTML: setHTML,
        getHTML: getHTML,
    }
}())
