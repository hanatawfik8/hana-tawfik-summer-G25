// Degree System
// var degree = prompt("What is your degree?");

// if (degree > 100 || degree < 0) console.log("Invalid degree");
// else if (degree >= 90) console.log("A");
// else if (degree >= 80) console.log("B");
// else if (degree >= 70) console.log("C");
// else if (degree >= 60) console.log("D");
// else console.log("F");

// For Task
var breakVar = "Hana";
var input;
for (var i = 0; i < 5; i++) {
  input = prompt("Enter a name");
  if (input == breakVar) {
    console.log("Breaking...");
    break;
  } else {
    console.log("No Break");
  }
}
