/* Date */
let date = document.getElementById('date');
let dateObj = new Date;
date.innerHTML = dateObj.toDateString("en-us");

/* Time
window.setInterval(function(){
  document.getElementById('time').innerHTML = (new Date).toLocaleTimeString("en-us");
}, 1000)
*/

/* Random quote */

let motdObj = document.getElementById('motd');
let quotes = [
  "You have power over your mind - not outside events. Realize this, and you will find strength.",
  "If I don't have to do it, I won't. If I have to do it, I'll make it quick.",
  "If it doesn’t suck, we don’t do it.",
  "You look nice today.",
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

motdObj.innerHTML = quotes[getRandomInt(0,quotes.length)];
