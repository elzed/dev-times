// TODO: let learnerLevel = prompt('Enter Learner Level\n1 for Beginner, 2 for Intermediate, 3 for Advanced');


const WORK_TO_LEARN_RATIO = 2.5;
let learnDivisor = 1 + (1/WORK_TO_LEARN_RATIO);

let totalHours = prompt('How many hours to spend laboring today?');

// TODO: Needs adjustable percentage of time in biz dev, not just assuming 50%

let devCodeHoursDec = (totalHours/2) / learnDivisor;
let studyCodeHoursDec = (totalHours/2) - devCodeHoursDec;

// Conversion from hours in decimal form to simplified hours & minutes
let devCodeHoursInt = Math.floor(devCodeHoursDec);
let devCodeMinsInt = Math.round(((devCodeHoursDec * 60) % 60));

let studyHoursInt = Math.floor(studyCodeHoursDec);
let studyMinsInt = Math.round(((studyCodeHoursDec * 60) % 60));


console.log(`${totalHours/2} hours shall be spent on freelancing proposals and job applications.`);
console.log(`Your remaining time of ${totalHours/2} hours of labor will be as follows:`);
console.log(`- Study for ${studyHoursInt} hours and ${studyMinsInt} minutes \n- Code for ${devCodeHoursInt} hours and ${devCodeMinsInt} minutes`);

console.log(`\nOr, get focused and follow the pomodoros...`);
console.log(`Spend ${( totalHours/2 * 60 ) / 30} pomodoros on proposals and applications.`);


let studyPomodoros = function() {
    let studyPomsHours = (studyHoursInt * 2);
    let studyPomsMins;

    if (studyMinsInt < 15) {
        studyPomsMins = 0;
    } else if (studyMinsInt >= 15 && studyMinsInt < 45) {
        studyPomsMins = 1;
    } else {
        studyPomsMins = 2;
    }

    return studyPomsHours + studyPomsMins;
}
console.log(`Spend ${studyPomodoros()} pomodoros on studying.`);


let devCodePomodoros = function() {
    let devCodePomsHours = (devCodeHoursInt * 2);
    let devCodePomsMins;

    if (devCodeMinsInt < 15) {
        devCodePomsMins = 0;
    } else if (devCodeMinsInt >= 15 && devCodeMinsInt < 45) {
        devCodePomsMins = 1;
    } else {
        devCodePomsMins = 2;
    }

    return devCodePomsHours + devCodePomsMins;
}
console.log(`Spend ${devCodePomodoros()} pomodoros on coding.`);
