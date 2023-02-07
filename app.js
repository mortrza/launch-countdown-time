const  calculate=()=>{
const today=new Date().getTime();
const launching=new Date("2023 12 10").getTime();
const Days=document.getElementById('Days');
const Hours=document.getElementById('Hours');
const Minutes=document.getElementById('Minutes');
const Seconds=document.getElementById('Seconds');
const daysInMilliSeconds=1000*60*60*24;
const hoursInMilliSeconds=1000*60*60;
const minutesInMilliSeconds=1000*60;
const secondsInMilliSeconds=1000;
let diffrence=launching-today;
const days=Math.trunc(diffrence/(daysInMilliSeconds));
diffrence=diffrence- days*daysInMilliSeconds;
const hours=Math.trunc(diffrence/(hoursInMilliSeconds));
diffrence=diffrence-hours*hoursInMilliSeconds;
const minutes=Math.trunc(diffrence/(minutesInMilliSeconds));
diffrence=diffrence-minutes*minutesInMilliSeconds;
const seconds=Math.trunc(diffrence/(secondsInMilliSeconds));
Days.innerHTML=(days<10 ?"0"+days : days);
Hours.innerHTML=(hours<10 ?"0"+hours : hours);
Minutes.innerHTML=(minutes<10 ?"0"+minutes : minutes);
Seconds.innerHTML=(seconds<10 ?"0"+seconds : seconds);
}

setInterval(calculate, 1000);
