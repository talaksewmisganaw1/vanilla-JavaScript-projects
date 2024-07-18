const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");


const setupDate = new Date();
const year = setupDate.getFullYear();
const month = setupDate.getMonth();
const date = setupDate.getDate() + 5;

const futureDate = new Date(year, month, date, 6, 30, 0);

const giveawayYear = futureDate.getFullYear();
const giveawayMonth = months[futureDate.getMonth()];
const giveawayDate = futureDate.getDate();
const giveawayDay = weekdays[futureDate.getDay()];
const giveawayHour = futureDate.getHours();
const giveawayMin = futureDate.getMinutes();

giveaway.innerHTML = `Give away ends on ${giveawayDay}, ${giveawayDate} ${giveawayMonth} ${giveawayYear}, ${giveawayHour}: ${giveawayMin}am`;


function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const currentTime = new Date().getTime();
  const remainingTime = futureTime - currentTime;

  // day = 24hour
  // hour = 60min
  // min = 60sec
  // sec = 1000ms

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const remDay = Math.floor(remainingTime / oneDay);
  const remHours = Math.floor(remainingTime % oneDay / oneHour);
  const remMins = Math.floor(remainingTime % oneHour / oneMin);
  const remSec = Math.floor(remainingTime % oneMin / 1000);

  const values = [remDay, remHours, remMins, remSec];

  items.forEach((item, index) => {
    item.innerHTML = formatter(values[index]);
  });

  if(remainingTime < 0) {
    clearInterval(counter);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  };
}

function formatter(value) {
  if(value < 10) {
    return `0${value}`;
  } else {
    return value;
  }
}

let counter = setInterval(getRemainingTime, 1000);
