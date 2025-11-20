function btaction(val) {
  if (val === "ac") {
    document.getElementById("displayResult").value = "";
  } else if (val === "del") {
    var del = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = del.slice(0, -1);
  } else if (val === "neg") {
    var neg = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = neg * -1;
  } else {
    document.getElementById("displayResult").value += val;
  }
}
function finalResult() {
  document.getElementById("displayResult").value = eval(
    document.getElementById("displayResult").value
  );
}
