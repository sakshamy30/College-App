const toTeach = document.querySelector(".ask2 .teach")
const randomDec = Math.random()
const rando = Math.floor(randomDec * 4)+1

const date = document.querySelector(".date")
const Day = document.querySelector(".day")
const time = document.querySelector(".time")

var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; 
var year = currentDate.getFullYear();

var today = new Date();
var dayOfWeek = today.getDay();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var todayName = daysOfWeek[dayOfWeek];

var hours = today.getHours()
var mins = today.getMinutes()

window.addEventListener("load", ()=>{
    date.innerText = 'Date: ' + day + '-' + month + '-' + year
    Day.innerText = 'Day: '+todayName
    time.innerText = `Time => ${hours}:${mins}`
})

toTeach.addEventListener("click",()=>{
    if (todayName === "Saturday" || todayName === "Sunday")
    {
        alert("You have No Classes today.")
    }
    else
    {
        alert("You have "+rando+" Classes today.")
    }
})