const attendance = document.querySelector(".att")
const percentage = document.querySelector(".per")
const date = document.querySelector(".date")
const Day = document.querySelector(".Day")
const stream = document.querySelector(".stream")
const sem = document.querySelector(".sem")
const time = document.querySelector(".time")

const randomDec1 = Math.random()
const randomDec2 = Math.random()

const rando1 = Math.floor(randomDec1 * 50) + 50
const rando2 = Math.floor(randomDec2 * 50) + 50

attendance.addEventListener("click",()=>{
    alert("Your Attendance is "+rando1+"%")
})

percentage.addEventListener("click",()=>{
    alert("Your Percentage is "+rando2+"%")
})

const currDate = new Date()
const currDay = currDate.getDate()
const currMon = currDate.getMonth()+1
const currYear = currDate.getFullYear()

const dayNo = currDate.getDay()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const curDay = days[dayNo]

const randomDec3 = Math.random()
const rando3 = Math.floor(randomDec3 * 8) + 1

const rando4 = Math.floor(Math.random() * 5)
const streams = ["CS", "IS", "Mechanical", "EC", "Civil"]
const selectedStream = streams[rando4]

const hrs = currDate.getHours()
const mins = currDate.getMinutes()

window.addEventListener("load", ()=> {
    date.innerText = "Date: "+(currDay+"-"+currMon+"-"+currYear)
    Day.innerText = "Day: "+curDay
    stream.innerText = `You are doing ${selectedStream} Engineering`
    sem.innerText = "You are in "+rando3+" Sem"
    time.innerText = `Time => ${hrs}:${mins}`
})