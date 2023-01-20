
var countDownDate = new Date("April 28, 2023 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
var now = new Date().getTime();

  // Find the distance between now and the count down date
var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

if (days< 10) {
days =  `0 ${days}`}

if (hours < 10) {
hours = "0" + hours;}

if (minutes < 10) {
minutes = "0" + minutes;}

if (seconds < 10) {
seconds = "0" + seconds;}

document.getElementById("days").innerHTML = days 
document.getElementById("hours").innerHTML = hours 
document.getElementById("minutes").innerHTML = minutes 
document.getElementById("seconds").innerHTML = seconds;
    

  // If the count down is finished, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Let's Go";
  }
}, 1000);