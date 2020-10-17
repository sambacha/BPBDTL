import { parseTime, timeToString, timeToStringUTC } from 'time';

var now = Date.now();
console.log("Local time (24-hour clock, no seconds): " + 
            timeToString(now, {use24hourTime: true, showSeconds: false}));
console.log("Local time (12-hour clock with seconds): " +
            timeToString(now, {showSeconds: true}));

var fmt = {
  am: " in the morning", 
  pm: " in the afternoon", 
  evening: " at night"
};
var later = now + parseTime("7:15"); // add 7 hours and 15 minutes
console.log("Seven hours and 15 minutes later is " + timeToString(later, fmt));
console.log("Which in UTC time is .............. " + timeToStringUTC(later, fmt));
console.log("Noon UTC converted to local time is " +
            timeToString(parseTime("12PM"), fmt));
console.log("Noon local time converted to UTC is " +
            timeToStringUTC(parseTime("12PM", new Date()), fmt));
