works = [];
var remaining = document.getElementById("remaining");
var taskInputValue = "";
function inputValue(event) {
  taskInputValue = event.target.value;
  event.target.value = "";
}
function addwork() {
  if (taskInputValue.trim() !== "") {
    works.push(taskInputValue);
    remaining.textContent = "The number of tasks left:" + " " + works.length;
    taskInputValue = "";
    console.log(works);
    listWork();
  } else {
    alert("Please enter a valid task.");
  }
}

var ul = document.getElementById("taskList");
function listWork() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(works[works.length - 1]));
  ul.appendChild(li);
}
var item = "";
function searchWork(event) {
  item = event.target.value.trim();
  if (event.target.value !== "") {
    event.target.value = "";
    //console.log(item);
  } else {
    alert("Please enter a valid search term.");
  }
}
function doneWork() {
  //searchWork();
  if (item === "") {
    alert("Please enter a valid task to mark as done.");
  } else if (works.includes(item)) {
    var del = works.indexOf(item);
    console.log(del);
    works.splice(del, 1);
    console.log(works);
    remaining.textContent = "The number of tasks left:" + " " + works.length;
    ul.removeChild(ul.childNodes[del]);
    alert("done");
  } else {
    alert("Task not found.");
  }
}
