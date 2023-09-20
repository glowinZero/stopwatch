let [milliseconds, seconds, minutes, hours]  = [0, 0, 0, 0];
let dTime = document.querySelector(".displayTime");
let timer = null;
var snd = new Audio("old-radio-button-click-97549.mp3");
snd.playbackRate=2;

document.getElementById("play").addEventListener("click", () => {
    if(timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(watch, 10);
    snd.play();
    snd.currentTime=0;
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    snd.play();
    snd.currentTime=0;
});

const aa = document.querySelector("#record");
let count = 0;
let fcount = 0;
let gap = 0;
let gaph = 0;
let gaps = 0;
aa.addEventListener("click", () => {
    const par =document.getElementById("parag");
    const ul = document.getElementById("registers"); 
    const li = document.createElement(`li`); 
    count += 1;
    if(minutes < 10){
        gap = 0;
    }
    else {
        gap = "";
    }
    if(hours < 10){
        gaph = 0;
    }
    else {
        gaph = "";
    }
    if(seconds < 10){
        gaps = 0;
    }
    else {
        gaps = "";
    }
    if(count < 10){
        fcount = "00" + count;
    }
    else {
        fcount = "0" + count;
    }
    if(count>99) {
        fcount = + count;
    }
    if(count>999) {
        count = 0;
        fcount = "00" + count;
    }
    
    li.innerHTML= `Lap ${fcount} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${gaph}${hours} : ${gap}${minutes} : ${gaps}${seconds} : ${milliseconds}`;
    ul.prepend(li);
    snd.play();
    snd.currentTime=0;
});

document.getElementById("undo").addEventListener("click", () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    dTime.innerHTML = "00 : 00 : 00 : 000";
    document.getElementById("registers").innerHTML = "";
    snd.play();
    snd.currentTime=0;
    count = 0;
});

function watch () {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;
    dTime.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
