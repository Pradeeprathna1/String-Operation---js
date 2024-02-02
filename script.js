function length() {
    var inputValue = document.getElementById("inputBox").value;
    console.log("inputvalue =",inputValue);
    var lengthStr = inputValue.length;
    document.getElementById("outputBox").value = lengthStr;
}

function replace() {
    var inputValue = document.getElementById("inputBox").value;
    var word = prompt("Enter the word to be replaced");
    var newWord = prompt("Enter the new word to be replaced");
    var replacedWord = inputValue.replace(word, newWord);
    document.getElementById("outputBox").value = replacedWord;
}

function upperCase() {
    var inputValue = document.getElementById("inputBox").value;
    document.getElementById("outputBox").value = inputValue.toUpperCase();
}

function lowerCase() {
    var inputValue = document.getElementById("inputBox").value;
    document.getElementById("outputBox").value = inputValue.toLowerCase();
}

function repeat() {
    var inputValue = document.getElementById("inputBox").value;
    var repeated = prompt("Enter the number of times to repeat");
    document.getElementById("outputBox").value = inputValue.repeat(repeated);
}

function match() {
    var inputValue = document.getElementById("inputBox").value;
    var matched = prompt("Enter the words to find");
    document.getElementById("outputBox").value = inputValue.match(matched);
}

function search() {
    var inputValue = document.getElementById("inputBox").value;
    var searched = prompt("Enter the words to find");
    document.getElementById("outputBox").value = inputValue.search(searched);
}

function concat() {
    var inputValue = document.getElementById("inputBox").value;
    var first = prompt("Enter the first word");
    var second = prompt("Enter the second word");
    document.getElementById("outputBox").value = inputValue.concat(first, second);
}

function split() {
    var inputValue = document.getElementById("inputBox").value;
    document.getElementById("outputBox").value = inputValue.split("");
}

function trim() {
    var inputValue = document.getElementById("inputBox").value;
    document.getElementById("outputBox").value = inputValue.trim();
}

function slice() {
    var inputValue = document.getElementById("inputBox").value;
    var sliced = prompt("Enter the index of the word to be sliced from inputBox")
    document.getElementById("outputBox").value = inputValue.slice(sliced);
}

function Clear() {
    document.getElementById("inputBox").value = " ";
    document.getElementById("outputBox").value = " ";
}

