const name = "Mitch Cuckovich";
let age = "25";
const birthday = "January 24";
let detroitGC = true;
let lifeEvents = ["I was born in Troy, Michigan." , "I went to Hope College" , "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event."];

if (detroitGC = true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is ${birthday}.`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is ${birthday}.`);
}

for (let i = 0; i <= lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber;
while (randomNumber = Math.floor(Math.random() * 10) + 1) {
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !==5`);
    }
    else {
        counter++;
        console.log(`${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}

let wage = prompt("Please enter your hourly pay:");
let hours = prompt("Please enter the total number of hours worked this week:");
let pay;
let weeks;
if (hours > 40) {
    let regpay = (wage * 40);
    let overtimepay = ((wage * 1.5) * (hours - 40));
    pay = (regpay + overtimepay);
    weeks = Math.ceil(1000000/pay);
    console.log(`I earn $${wage} per hour working 40 hours a week. This week, I worked a total of ${hours} hours. In total, I will take home ${pay}. I made an additional ${overtimepay} from overtime.`);
}
else {
    pay = (wage * hours);
    weeks = Math.ceil(1000000/pay);
    console.log(`I earn $${wage} per hour working 40 hours a week. This week, I worked a total of ${hours} hours. In total, I will take home ${pay}.`)
}