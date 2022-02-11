/*
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form)
    for (let [name, value] of data) {
        console.log(data);
    }
});
*/

// let learnerLevel = prompt('Enter Learner Level\n1 for Beginner, 2 for Intermediate, 3 for Advanced');


const WORK_TO_LEARN_RATIO = 2.5;
let learnDivisor = 1 + (1/WORK_TO_LEARN_RATIO);

let totalTime = prompt('How long to spend laboring today?');
let devCodeHoursDec = (totalTime/2) / learnDivisor;
let studyHoursDec = (totalTime/2) - devCodeHoursDec;

// Conversion from hours in decimal form to simplified hours & minutes
let devCodeHoursInt = Math.floor(devCodeHoursDec);
let devCodeMinsInt = Math.round(((devCodeHoursDec * 60) % 60));

let studyHoursInt = Math.floor(studyHoursDec);
let studyMinsInt = Math.round(((studyHoursDec * 60) % 60));




console.log(`${totalTime/2} hours shall be spent on freelancing proposals and job applications.`);
console.log(`Your remaining time of ${totalTime/2} hours of labor will be as follows:`);
console.log(`- Study for ${studyHoursInt} hours and ${studyMinsInt} minutes \n- Code for ${devCodeHoursInt} hours and ${devCodeMinsInt} minutes`);

// 2.85 into hours and minutes
// 2.85

// TODO: Average out time to put tasks into Pomodoros
console.log(`Spend ${( totalTime/2 * 60 ) / 30} Pomodoros on proposals and applications.`);