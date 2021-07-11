const Swal = require('sweetalert2');
const startButton = document.querySelector('button[data-start]');
const inputDate = document.getElementById('date-selector');

const daysFirstNumberTop = document.querySelector('.days-1 .top');
const daysFirstNumberBottom = document.querySelector('.days-1 .bottom');
const daysSecondNumberTop = document.querySelector('.days-2 .top');
const daysSecondNumberBottom = document.querySelector('.days-2 .bottom');

const hoursFirstNumberTop = document.querySelector('.hours-1 .top');
const hoursFirstNumberBottom = document.querySelector('.hours-1 .bottom');
const hoursSecondNumberTop = document.querySelector('.hours-2 .top');
const hoursSecondNumberBottom = document.querySelector('.hours-2 .bottom');

const minutesFirstNumberTop = document.querySelector('.min-1 .top');
const minutesFirstNumberBottom = document.querySelector('.min-1 .bottom');
const minutesSecondNumberTop = document.querySelector('.min-2 .top');
const minutesSecondNumberBottom = document.querySelector('.min-2 .bottom');

const secondsFirstNumberTop = document.querySelector('.sec-1 .top');
const secondsFirstNumberBottom = document.querySelector('.sec-1 .bottom');
const secondsSecondNumberTop = document.querySelector('.sec-2 .top');
// const secondsSecondNumberTopBack = document.querySelector('.sec-2 .top-back');
const secondsSecondNumberBottom = document.querySelector('.sec-2 .bottom');


intervalId = null;
let currentToEvent = 0;
startButton.addEventListener('click', () => {
    
    
    intervalId = setInterval(() => {
        const curentDate = new Date;
        if (inputDate.valueAsNumber < curentDate.getTime()) {
            clearInterval(intervalId);
            Swal.fire('Please choose a date in the future');
             return
        }
        startButton.setAttribute("disabled", "disabled");
        currentToEvent = convertMs(inputDate.valueAsNumber - curentDate.getTime());
               
    if (currentToEvent.days < 10) {
        daysFirstNumberTop.textContent = 0;
        daysFirstNumberBottom.textContent = 0;
        daysSecondNumberTop.textContent = currentToEvent.days;
        daysSecondNumberBottom.textContent = currentToEvent.days;
    }
    else {
        for (let i = 0; i < currentToEvent.days.toString().length; i += 1) {
    
            daysFirstNumberTop.textContent = currentToEvent.days.toString()[0];
        daysFirstNumberBottom.textContent = currentToEvent.days.toString()[0];
              daysSecondNumberTop.textContent = currentToEvent.days.toString()[1];
        daysSecondNumberBottom.textContent = currentToEvent.days.toString()[1];
}

    }
    if (currentToEvent.hours < 10) {
        hoursFirstNumberTop.textContent = 0;
        hoursFirstNumberBottom.textContent = 0;
        hoursSecondNumberTop.textContent = currentToEvent.hours;
        hoursSecondNumberBottom.textContent = currentToEvent.hours;
    }
    else {
        for (let i = 0; i < currentToEvent.hours.toString().length; i += 1) {
            
            hoursFirstNumberTop.textContent = currentToEvent.hours.toString()[0];
        hoursFirstNumberBottom.textContent = currentToEvent.hours.toString()[0];
              hoursSecondNumberTop.textContent = currentToEvent.hours.toString()[1];
        hoursSecondNumberBottom.textContent = currentToEvent.hours.toString()[1];
}

    }
    if (currentToEvent.minutes < 10) {
        minutesFirstNumberTop.textContent = 0;
        minutesFirstNumberBottom.textContent = 0;
        minutesSecondNumberTop.textContent = currentToEvent.minutes;
        minutesSecondNumberBottom.textContent = currentToEvent.minutes;
    }
    else {
        for (let i = 0; i < currentToEvent.minutes.toString().length; i += 1) {
          
            minutesFirstNumberTop.textContent = currentToEvent.minutes.toString()[0];
        minutesFirstNumberBottom.textContent = currentToEvent.minutes.toString()[0];
              minutesSecondNumberTop.textContent = currentToEvent.minutes.toString()[1];
        minutesSecondNumberBottom.textContent = currentToEvent.minutes.toString()[1];
}

    }
    if (currentToEvent.seconds < 10) {
        secondsFirstNumberTop.textContent = 0;
        secondsFirstNumberBottom.textContent = 0;
        secondsSecondNumberTop.textContent = currentToEvent.seconds;
        secondsSecondNumberBottom.textContent = currentToEvent.seconds;
        // secondsSecondNumberTopBack.textContent = currentToEvent.seconds-1;
    }
    else {
        for (let i = 0; i < currentToEvent.seconds.toString().length; i += 1) {
         
            secondsFirstNumberTop.textContent = currentToEvent.seconds.toString()[0];
        secondsFirstNumberBottom.textContent = currentToEvent.seconds.toString()[0];
              secondsSecondNumberTop.textContent = currentToEvent.seconds.toString()[1];
            secondsSecondNumberBottom.textContent = currentToEvent.seconds.toString()[1];
            
        }
        
 }
  }, 1000);
    
});



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

