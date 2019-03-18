const canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();

var PI  = Math.PI;
var cos = Math.cos;
var sin = Math.sin;

document.getElementById("day").innerHTML = "Today is " + date.toDateString() + " on Earth";

function draw() {
    clearScreen();
    
    drawHand(280, (2 * PI / 60) * seconds, "#ff9966");
    drawHand(240, (2 * PI / 60) * minutes, "#e52b50");
    drawHand(200, (2 * PI / 24) * hours,   "#9c2542");

    drawTime(hours, minutes, seconds);
    update();  
}


function drawHand(radius, theta, color, width) {
    width = width || 25;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 3 * PI / 2, (3 * PI / 2) + theta);
    ctx.lineTo(centerX + (radius + width) * cos((PI / 2) - theta),
               centerY - (radius + width) * sin((PI / 2) - theta));
    ctx.arc(centerX, centerY, radius + width, (3 * PI / 2) + theta, 3 * PI / 2, true);
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
}

function drawTime(hours, minutes, seconds) {
    var timeString = "";
    timeString += (hours < 10) ? "0" + hours : hours
    timeString += (minutes < 10) ? ":0" + minutes : ":" + minutes;
    timeString += (seconds < 10) ? ":0" + seconds : ":" + seconds;
    
    var ampm = " AM";
    if (hours > 12) {
        ampm = " PM";
    } 

    ctx.font = "200px Share Tech Mono, monospace";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(timeString + ampm, centerX, centerY);
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
}

function update() {
    if (seconds == 59) {
        seconds = 0;
        if (minutes == 59) {
            minutes = 0;
            if (hours == 23) {
                hours = 0;
            } else {
                hours = hours + 1;
            }
        } else {
            minutes = minutes + 1;
        }
    } else {
        seconds = seconds + 1;
    }
}

setInterval(draw, 1000);

//animation
(function($) {
    
    var h1 = $('h1'),
        p = $('p'),
        h2 = $('h2'),
        div = $('div'),
        animation = $('.animation'),
        tl = new TimelineLite();

    tl
        .from(h1, 1.25, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(p, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(div, 0.5, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
        .from(animation, 0.5, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.4');

})(jQuery);

// toggle button

const body = document.querySelector('body');
changeTheme = ev => {
    body.classList.toggle('light-theme');
};