// Task 1
var img = document.querySelector("img");
function toggleImg() {
  if (img.src.endsWith("beautiful-rainbow-nature.avif"))
    img.src = "../images/bgs.jpg";
  else img.src = "../images/beautiful-rainbow-nature.avif";
}

// Task 2, 3
var form = document.getElementById("addForm"),
  users = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  users.push({
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    // balance: e.target.elements.balance.value,
  });
  console.log(users);
  showUser();
});

var editForm = document.getElementById("editForm"),
  editName = document.getElementById("editName"),
  editEmail = document.getElementById("editEmail"),
  editingIndex;
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  users[editingIndex].name = e.target.elements.editName.value;
  users[editingIndex].email = e.target.elements.editEmail.value;
  editForm.classList.replace("d-block", "d-none");
  showUser();
});

function showUser() {
  var tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";
  users.forEach((user, i) => {
    var tr = document.createElement("tr"),
      td1 = document.createElement("td"),
      td2 = document.createElement("td"),
      td3 = document.createElement("td");
    td1.innerText = user.name;
    td2.innerText = user.email;

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "btn-success", "btn-sm");
    editBtn.addEventListener("click", (e) => {
      editUser(i);
    });
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
    deleteBtn.addEventListener("click", () => {
      deleteUser(i);
    });
    td3.append(editBtn);
    td3.append(deleteBtn);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    tbody.append(tr);
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  showUser();
}

function editUser(i) {
  editName.value = users[i].name;
  editEmail.value = users[i].email;
  editForm.classList.replace("d-none", "d-block");
  editingIndex = i;
}
