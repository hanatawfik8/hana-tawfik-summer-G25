// Degree System
// var degree = prompt("What is your degree?");

// if (degree > 100 || degree < 0) console.log("Invalid degree");
// else if (degree >= 90) console.log("A");
// else if (degree >= 80) console.log("B");
// else if (degree >= 70) console.log("C");
// else if (degree >= 60) console.log("D");
// else console.log("F");

// For Task
// var breakVar = "Hana";
// var input;
// for (var i = 0; i < 5; i++) {
//   input = prompt("Enter a name");
//   if (input == breakVar) {
//     console.log("Breaking...");
//     break;
//   } else {
//     console.log("No Break");
//   }
// }

// Looping Task
function looping(startNum, endNum, continueNum, breakNum) {
  if (
    startNum == undefined ||
    endNum == undefined ||
    breakNum == undefined ||
    continueNum == undefined
  ) {
    console.log("Please enter all numbers");
    return;
  } else if (startNum > endNum) {
    console.log("Start Number must be less than End NUmber");
    return;
  } else if (breakNum <= continueNum) {
    console.log("Break Number must be greater than Continue Number");
    return;
  }

  for (var i = startNum; i <= endNum; i++) {
    if (i == continueNum) continue;
    else if (i == breakNum) break;
    else console.log(i);
  }
}

looping(1, 5);
looping(1, 5, 3);
looping(1, 5, 2, 4);
