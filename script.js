"use strict";
/*
   Countdown Clock
   Author: EmmsOrIvy
   Date:  10/04/2022
   repurposed: 1/25/2025

*/
//Executing the runClock function to run and display the countdown clock
runClock();
//setInterval("runClock()", 1000);
setInterval(runClock, 1000);

//Function to create and run the countdown clock
function runClock() {
  //storing todays date
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();
  
  //Display current date and time
  //document.getElementById("date").innerHTML = dateStr + "<br/>" + timeStr;
  document.getElementById("date").innerHTML = `${dateStr}<br>${timeStr}`;

  //Creating a date object for retirement day
  //var retirementDay = new Date("March 18, 2028");  
  var retirementDay = new Date(2028, 2, 18);


  retirementDay.setFullYear("2028");
  var daysLeft = (retirementDay - currentDay) / (1000 * 60 * 60 * 24);
  var weeksLeft = daysLeft / 7;  
  var daysLeftActual = (weeksLeft - Math.floor(weeksLeft))*7;
  //console.log(daysLeftActual);
  
  //Dislpay time left until retirement
  document.getElementById("weeks").textContent = Math.floor(weeksLeft);
  //document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("days").textContent = daysLeftActual;
  
}

/*
  var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);
*/ 