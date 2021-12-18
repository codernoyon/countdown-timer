// the date I want to count down
const ramadan = '2 April 2022';
// Selection dom
const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

// Creat a function
function counDown() {
    const ramadanDay = new Date(ramadan);
    const currentDay = new Date();


    const totalTime = (ramadanDay - currentDay) / 1000;
    const days = Math.floor(totalTime / 3600 / 24);
    const hours = Math.floor((totalTime / 3600) % 24);
    const mintues = Math.floor(totalTime / 60) % 60;
    const seconds = Math.floor(totalTime) % 60;
    
    // shownig display
    daysDiv.innerHTML = days;
    hoursDiv.innerHTML = hours;
    minutesDiv.innerHTML = mintues;
    secondsDiv.innerHTML = seconds;

    console.log(days, hours, mintues, seconds);
}

counDown();
setInterval(counDown, 1000);