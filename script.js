"use strict";
/*
   Countdown Clock
   Author: EmmsOrIvy
   Date:  10/04/2022
   repurposed: 1/25/2025

*/
//Executing the runClock function to run and display the countdown clock
runClock();
setInterval("runClock()", 1000);

//Function to create and run the countdown clock
function runClock() {
  //storing todays date
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();
  
  //Display current date and time
  // document.getElementById("date").innerHTML = "Today: " + dateStr + "<br/>" + timeStr;

  //Creating a date object for election day
  var electionDay = new Date("November 7, 2028");  

  electionDay.setFullYear("2028");
  var daysLeft = (electionDay - currentDay) / (1000 * 60 * 60 * 24);
  var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  //Dislpay time left until election day
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);
}
