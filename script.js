var plannertimes = document.querySelector ("plannertimes");
var containerTime = document.querySelector("time-block-container");
var time = document.querySelector("#hour");
var newRow = document.querySelector("#row")
//Current Date  
var currentDate = moment().format('dddd, MMMM Do YYYY, h:mm a')
console.log(currentDate);

// Create & Display Time
// For Loop for times of the day 
var toDo = [];

for (let i = 8; i <19; i++) {
let index = i - 8;
console.log(`i = ${i}`);
let newRow = $("<div class= 'time-block row'>");
if (i <=12)
{ 
var time= $("<div class= 'hour col-md-2'>").text(i + "am");
} else {
time = $("<div class= 'hour col-md-2'>").text(i - 12 + "pm");
}
console.log (time)
if (localStorage.getItem(i) !== null) {
var savedValue = localStorage.getItem(i);
} else {
savedValue = "";

newRow.append(time, savedValue, toDo);
console.log(newRow)
$(".container").append(newRow);
console.log(`^^New Row`);
}
console.log(savedValue);


// organising past time
if (moment().format ("HH") > i) {
var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "past textInput'>" + savedValue + "</textarea></div>");
console.log("Past");
}
console.log(time);


// organising current time
if (moment().format ('HH') == i) {
   var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "present textInput'>" + savedValue + "</textarea></div>");
   console.log("Current");
}
   console.log(time);
   

// organising future time 
if (moment().format ('HH') < i) {
   var time = $("<div class= 'col-md-8> <textarea class= 'description" + i + "future textInput'>" + savedValue + "</textarea></div>");
   console.log("Future");
}
   console.log(time);
   newRow.append(time);
   }

// Hour Description 
var toDo= $("<div class= '.textarea col-md-8'>");
$("toDo").submit(function( event ){
   event.preventDefault();
})

// toDo.text(textarea[index]) = todoText
// console.log(toDo);

function setStyles() {
   var savedValue = localStorage.getItem('.saveBtn');
   var time = localStorage.getItem('.time-block');
   var toDo = localStorage.getItem('.description');
}
  

// for loop time 
// current time
// link current time to for loop times
// if past if future if current 
// type into description 
// connect the description to the time 
// local storage description 
// connect time + description to saveBtn
// local storage elements in saveBtn