'use strict'
var score = 0;

var name = prompt('Hello, What is your name?')
console.log(name);
alert('Hello ' + name + ' nice to meet you! My name is Biniam.')
var game = prompt('Would you like to play a guessing game in order to view my site? Yes/No').toLowerCase();
if (game === 'yes') {
    alert('Alright, click ok to start')
}
else {
    alert('To bad we\'re playing!')
}

// FIRST QUESTION
var age = prompt('Guess my age.')
console.log('my age', age);
if (age != '23') {
    alert('Incorrect, next question.')
}
else {
    alert('Correct, next question.')
    score+=1
}

//SECOND QUESTION
var city = prompt('Guess what city I\'m from.').toLowerCase();
console.log(city);
if (city === 'seattle') {
    alert('Correct, next question.')
    score+=1
}
else {
    alert('Incorrect, let\'s see if you can get the next one.')
}

//THIRD QUESTION
var color = prompt('Guess my favorite color. Hint: It\'s either blue, red, green, or purple.').toLowerCase();
console.log(color);
if (color === 'blue') {
    alert('Correct, moving on.')
    score+=1
}
else {
    alert('Nope, next question.')
}

//FOURTH QUESTION
var sib = prompt('Guess how many siblings I have. Hint: Between 1-5.')
console.log(sib);
if (sib === '4') {
    alert('Correct.')
    score+=1
}
else {
    alert('Nope.')
}

//FIFTH QUESTION
var food = prompt('Guess what my favorite food is. Hint: It\'s either pizza, burgers, or lasagna.').toLowerCase();
console.log(food);
if (food === 'lasagna') {
    alert('Correct.')
    score+=1
}
else {
    alert('Sorry that\'s incorrect.')
}

//SIXTH QUESTION
    for (var i = 0; i <= 3; i++) { //give the user three tries to guess correctly.
        var q6 = prompt('Guess my favorite number. You have 4 tries. Hint it\'s between 1-10.');
        console.log('Guessed:', q6);
        i = parseInt(i);
        console.log('g', i);
        if (q6 > 2) {
            alert('Too high.')
        }
        else if (q6 < 2) {
            alert('Too low.')
        }
        else {
            alert('Correct.')
            score+=1 //score must go before the break
            break;
        }
    }

//SEVENTH QUESTION
var city = ['MIAMI', 'SEATTLE', 'DALLAS', 'HOUSTON', 'OAKLAND', 'BROOKLYN']
var tries = 0; //the amount of tries a user has is set to 0 first.
var ind; //ind = indicator

while (tries <=6 ) {
    var q7 = prompt("Can you guess one of my favorite cities in the US. You have 7 tries.").toUpperCase();
    for (var j = 0; j < city.length; j++) {
        if (q7 === city[j]) {
            ind = true //if true then is correct
        }
    }
    if (!ind) { // if indicator is false run alert and add a try
        alert('Nope, try again.')
        tries += 1;
    } else { // otherwise, if the user's input matches any city, then alert correct
        score += 1 // have to give them a score before the alert
        tries+=7
        alert('Correct, one of my favorite cities is ' + q7 + '. My favorite cities are MIAMI, SEATTLE, DALLAS, HOUSTON, OAKLAND, BROOKLYN.')
    }
    if (tries === 6) {
        alert('Sorry you got that last question wrong. So, ' + name + ' you got ' + score + ' out of 7 on my questions.')
        break;

    }

}
alert('So, ' + name + ' you got ' + score + ' out of 7 on my questions.') // opens last window stating this.

