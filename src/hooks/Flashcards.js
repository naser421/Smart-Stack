import { useEffect, useState } from "react";

const INITIAL_FLASHCARDS = [
    { id: 1, front: "<script>", back: "Inside which HTML element do we put the JavaScript?"},
    { id: 2, front: "document.getElementById(''demo'').innerHTML = ''Hello World!'';", back: "What is the correct JavaScript syntax to change the content of the HTML element below? < p id=''demo'' > This is a demonstration.</p> " },
    { id: 3, front: "Both the <head> section and the <body> section are correct", back: "Where is the correct place to insert a JavaScript?" },
    { id: 4, front: "<script src=''xxx.js''>", back: "What is the correct syntax for referring to an external script called ''xxx.js''?" },
    { id: 5, front: "False", back: "The external JavaScript file must contain the <script> tag." },
    { id: 6, front: "alert(''Hello World'');", back: "How do you write ''Hello World'' in an alert box?" },
    { id: 7, front: "function myFunction()", back: "How do you create a function in JavaScript?" },
    { id: 8, front: "myFunction()", back: "How do you call a function named ''myFunction''?" },
    { id: 9, front: "if (i == 5)", back: "How to write an IF statement in JavaScript?" },
    { id: 10, front: "if (i != 5)", back: "How to write an IF statement for executing some code if ''i'' is NOT equal to 5?" },
    { id: 11, front: "while (i <= 10)", back: "How does a WHILE loop start?" },
    { id: 12, front: "for (i = 0; i <= 5; i++)", back: "How does a FOR loop start?" },
	{ id: 13, front: "//This is a comment", back: "How can you add a comment in a JavaScript?" },
	{ id: 14, front: "/*This comment has more than one line*/", back: "How to insert a comment that has more than one line?" },
	{ id: 15, front: "var colors = [''red'', ''green'', ''blue'']", back: "What is the correct way to write a JavaScript array?" },
	{ id: 16, front: "Math.round(7.25)", back: "How do you round the number 7.25, to the nearest integer?" },
	{ id: 17, front: "Math.max(x, y)", back: "How do you find the number with the highest value of x and y?" },
	{ id: 18, front: "w2 = window.open(''http://www.w3schools.com'');", back: "What is the correct JavaScript syntax for opening a new window called ''w2'' ?" },
	{ id: 19, front: "False", back: "JavaScript is the same as Java." },
	{ id: 20, front: "navigator.appName", back: "How can you detect the client's browser name?" },
	{ id: 21, front: "onclick", back: "Which event occurs when the user clicks on an HTML element?" },
	{ id: 22, front: "var carName;", back: "How do you declare a JavaScript variable?" },
	{ id: 23, front: "=", back: "Which operator is used to assign a value to a variable?" },
	{ id: 24, front: "true", back: "What will the following code return: Boolean(10 > 9)" },
	{ id: 25, front: "Yes", back: "Is JavaScript case-sensitive?" }, 
	];

const FLASHCARDS_API = 'flashcards';

function getStorageFlashcards() {
    const cards = localStorage.getItem(FLASHCARDS_API);
    return JSON.parse(cards) || INITIAL_FLASHCARDS;
}

export function useFlashcards() {
    const [flashCards] = useState(getStorageFlashcards);

    useEffect(() => localStorage.setItem(FLASHCARDS_API, JSON.stringify(flashCards)), [flashCards]);

    return [flashCards];
}