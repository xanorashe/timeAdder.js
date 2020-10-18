timeAdder = (value1, label1, value2, label2) => {
//error check in stating the time units
  if (label1 === "second" && value1 !== 1 || label1 === "minute" && value1 !== 1 || label1 === "hour" && value1 !== 1 || label1 === "day"  && value1 !== 1) {
    console.log("mismatch in number and time period e.g 3 second other than 3 seconds, correct it and try again please")
    return false
  }
  if (label1 === "seconds" && value1 === 1 || label1 === "minutes" && value1 === 1 || label1 === "hours" && value1 === 1 || label1 === "days"  && value1 === 1) {
    console.log("mismatch in number and time period e.g 1 days other than 1 day, correct it and try again please")
    return false
  }
  if (label2 === "second" && value2 !== 1 || label2 === "minute" && value2 !== 1 || label2 === "hour" && value2 !== 1 || label2 === "day"  && value2 !== 1) {
    console.log("mismatch in number and time period e.g 4 hour other than 4 hours, correct it and try again please")
    return false
  }
  if (label2 === "seconds" && value2 === 1 || label2 === "minutes" && value2 === 1 || label2 === "hours" && value2 === 1 || label2 === "days"  && value2 === 1) {
    console.log("mismatch in number and time period e.g 1 minutes other than 1 minute, correct it and try again please")
    return false
  }

  //converting value1 to seconds
      if (label1 === "days" || label1 === "day") {
        var time1 = value1*24*60*60;
      } else if (label1 === "hours" || label1 === "hour") {
        var time1 = value1*60*60;
      } else if (label1 === "minutes" || label1 === "minute") {
        var time1 = value1*60;
      } else if (label1 === "seconds" || label1 === "second") {
        var time1 = value1;
      }

//converting value2 to seconds
    if (label2 === "days" || label2 === "day") {
      var time2 = value2*24*60*60;
    } else if (label2 === "hours" || label2 === "hour") {
      var time2 = value2*60*60;
    } else if (label2 === "minutes" || label2 === "minute") {
      var time2 = value2*60;
    } else if (label2 === "seconds" || label2 === "second") {
      var time2 = value2;
    }
//total number of seconds
var total = time1 + time2;
//total conversions
    if (total < 60) {
      var label3 = "second(s)";
      var time3 = total;
    } else if (total < 3600) {
      if (total%60 === 0) {
        var label3 = "minute(s)";
        var time3 = (total/60);
      } else {
        var label3 = "second(s)";
        var time3 = total
      }
    } else if (total < 86400) {
      if (total%(60*60) === 0) {
        var label3 = "hour(s)";
        var time3 = (total/(60*60));
      } else if (total%60 === 0) {
        var label3 = "minute(s)";
        var time3 = total/60
      } else {
        var label3 = "second(s)";
        var time3 = total;
      }
    } else if (total => 86400) {
      if (total%(60*60*24) === 0) {
        var label3 = "day(s)";
        var time3 = (total/(60*60*24));
      } else if (total%(60*60) === 0) {
        var label3 = "hour(s)";
        var time3 = (total/(60*60));
        } else if (total%60 === 0) {
          var label3 = "minute(s)";
          var time3 = total/60
        } else {
          var label3 = "second(s)";
          var time3 = total;
        }
    }

 console.log([time3, label3]);

 switch (label3) {
   case "second(s)":
   console.log("Your answer is " + time3 + " seconds")
     break;
   case "minute(s)":
   console.log("Your answer is " + time3 + " minutes")
     break;
   case "hour(s)":
   console.log("Your answer is " + time3 + " hours")
     break;
   case "day(s)":
   console.log("Your answer is " + time3 + " days")
     break;
   default:
   console.log("something went wrong try again");
 }
}

try {
  timeAdder(3, "seconds", 24, "second");
  timeAdder(3, "seconds", 24, "seconds");
  timeAdder(36, "seconds", 24, "seconds");
  timeAdder(354000, "seconds", 2500, "minutes");
  timeAdder(45, "hours", 1, "minute");
  timeAdder(1, "seconds", 23, "days");
  timeAdder(38, "minutes", 25, "seconds");
  timeAdder({}, "seconds", 25, "days");
  timeAdder(691140, "seconds", 1, "minute");
  timeAdder(43200, "minutes", 6, "hours");
} catch (e) {
  console.log(false);
  return false;
}
