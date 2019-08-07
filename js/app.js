'use strict'
var name = prompt('Hello, What is your name?')
    console.log(name);
    alert('Hello ' +name + ' nice to meet you! My name is Biniam.')
var game = prompt('Would you like to play a guessing game in order to view my site? Yes/No').toLowerCase();
    if(game === 'yes'){
        alert('Alright, click ok to start')
    }
    else{
        alert('To bad we\'re playing!')
        }
var age = prompt('Guess my age.')
    console.log(age);
    if(age != '23'){
        alert('Incorrect, next question.')
    }
    else{
        alert('Correct, next question.')
    }
var city = prompt('Guess what city I\'m from').toLowerCase();
    console.log(city);
    if(city === 'seattle'){
        alert('Correct, next question.')
    }
    else{
        alert('Incorrect, let\'s see if you can get the next one')
    }
var color = prompt('Guess my favorite color.Hint: It\'s either blue, red, green, or purple.').toLowerCase();
    console.log(color);
    if (color==='blue'){
        alert('Correct, moving on')
    }
    else{
        alert('Nope, next question.')
    }
var sib = prompt('Guess how many siblings I have. Hint: Between 1-5')
    console.log(sib);
    if(sib ==='4'){
        alert('Correct. Now last and final question')
    }
    else{
        alert('Nope, let\'s see if you can get the last question.')
    }
var food = prompt('Guess what my favorite food is. Hint: It\'s either pizza, burgers, or lasagna').toLowerCase();
    console.log(food);
    if(food === 'lasagna'){
        alert('Correct. Enjoy reading more about me on my site.')
    }
    else{
        alert('Incorrect. Sorry you missed that last question. However, everyone is a winner on my site. So, click the ok button to view my page.')
    }