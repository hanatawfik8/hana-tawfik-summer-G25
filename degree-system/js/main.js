var degree = prompt("What is your degree?");

if (degree > 100 || degree < 0) console.log("Invalid degree");
else if (degree >= 90) console.log("A");
else if (degree >= 80) console.log("B");
else if (degree >= 70) console.log("C");
else if (degree >= 60) console.log("D");
else console.log("F");
