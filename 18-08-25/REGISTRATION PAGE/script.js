document.getElementById("employeeForm").addEventListener("submit", function(e) {
  e.preventDefault();


  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const position = document.getElementById("position").value;


  const table = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = age;
  newRow.insertCell(2).innerText = position;


  document.getElementById("employeeForm").reset();
});