// Courses Task
// var courses = ["HTML", "CSS", "JS"],
//   input = prompt("Enter course name");

// index = courses.findIndex((course) => course == input);

// if (index == -1) {
//   courses.push(input);
//   console.log("Course added successfully");
// } else console.log("Found");

// --------------------------------------------------------------------

// Object Task
// var users = [
//   {
//     name: "Marwa",
//     job: "Engineer",
//     address: "October",
//     age: 30,
//   },
//   {
//     name: "Zein",
//     job: "Developer",
//     address: "Maadi",
//     age: 25,
//   },
//   {
//     name: "Tamer",
//     job: "Doctor",
//     address: "Nasr City",
//     age: 40,
//   },
// ];

// index = users.findIndex((user) => user.age == 25);
// console.log(index);

// --------------------------------------------------------------------

// Bank System
var users = [];

function addUser(id, name, balance) {
  users.push({
    userID: id,
    userName: name,
    userBalance: balance,
  });
}

function editUserBalanceByID(id, newBalance) {
  users.forEach((user) => {
    if (user.userID == id) user.userBalance = newBalance;
  });
}

function deleteUserByID(id) {
  arrayIndex = users.findIndex((user) => user.userID == id);
  users.splice(arrayIndex, 1);
}

addUser(8, "Hana", 2000);
addUser(1, "Osama", 8000);
addUser(7, "Yara", 1000);

editUserBalanceByID(8, 9000);

deleteUserByID(1);

console.log(users);
