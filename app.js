// TODO: let learnerLevel = prompt('Enter Learner Level\n1 for Beginner, 2 for Intermediate, 3 for Advanced');

const BIZDEV_PERCENTAGE = 0.25;
const WORK_TO_LEARN_RATIO = 2.5;
// let bizDevDivisor = 1 + (1/BIZDEV_PERCENTAGE);
let learnDivisor = 1 + (1/WORK_TO_LEARN_RATIO);

let totalDailyWorkHours = prompt('How many hours to spend laboring today?');

// TODO: Needs adjustable percentage of time in biz dev, not just assuming 50%

// Get percentage of `totalDailyWorkHours` you want to spend on business development
let bizDevHours = totalDailyWorkHours * BIZDEV_PERCENTAGE;

// "Programming" hours is the time for coding and the time for learning combined
// Also, it's what is left over after you remove biz dev time from the total hours you'll be working that day
let programmingHours = totalDailyWorkHours - bizDevHours;


let devCodeHoursDec = programmingHours / learnDivisor;
console.log(`devCodeHoursDec: ${devCodeHoursDec}`);
let learningHours = programmingHours - devCodeHoursDec;
console.log(`learningHours: ${learningHours}`);

// Conversion from hours in decimal form to simplified hours & minutes
let devCodeHoursInt = Math.floor(devCodeHoursDec);
let devCodeMinsInt = Math.round(((devCodeHoursDec * 60) % 60));

let studyHoursInt = Math.floor(learningHours);
let studyMinsInt = Math.round(((learningHours * 60) % 60));


console.log(`${bizDevHours} hours shall be spent on freelancing proposals and job applications.`);
console.log(`Your remaining time of ${programmingHours} hours of labor will be as follows:`);
console.log(`- Study for ${studyHoursInt} hours and ${studyMinsInt} minutes \n- Code for ${devCodeHoursInt} hours and ${devCodeMinsInt} minutes`);

console.log(`\nOr, get focused and follow the pomodoros...`);
console.log(`Spend ${( bizDevHours * 60 ) / 30} pomodoros on proposals and applications.`);


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
