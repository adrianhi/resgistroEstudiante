// Arreglo para almacenar los datos de los inputs
let estudiantes = [];
let mensaje = document.getElementById("aprobacion");

function validateForm() {
  let nombre = document.getElementById("txtnombre").value;
  let apellido = document.getElementById("apellido").value;
  let matricula = document.getElementById("matricula").value;
  let nota = document.getElementById("nota").value;

  // Validar la nota
  if (isNaN(nota) || nota < 1 || nota > 100) {
    mensaje.innerHTML = "Ingrese una nota válida";
    mensaje.style.color = "red";
  } else {
    mensaje.innerHTML = "";
    estudiantes.push({
      nombre: nombre,
      apellido: apellido,
      matricula: matricula,
      nota: nota,
    });

    clearInputs();

    updateTable();
  }
}

function clearInputs() {
  let inputFields = document.getElementsByClassName("input");
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
}

function updateTable() {
  let table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];

  table.innerHTML = "";

  //Agrega el nuevo estudiante
  for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    let newRow = table.insertRow(table.rows.length);

    newRow.setAttribute("scope", "row");

    //Insertando filas
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    //otorgando valores
    cell1.innerHTML = estudiante.nombre;
    cell2.innerHTML = estudiante.apellido;
    cell3.innerHTML = estudiante.matricula;
    cell4.innerHTML = estudiante.nota;

    //Btneditar
    let editButton = document.createElement("button");
    editButton.innerHTML =
      '<i class="fa-solid fa-pen" style="color: #0040ff;"></i>';
    editButton.classList.add("btn-accion");
    editButton.onclick = function () {
      editRow(i);
    };

    //Btn eliminar
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML =
      '<i class="fa-solid fa-trash" style="color: #ff0000;"></i>';
    deleteButton.onclick = function () {
      deleteRow(i);
    };
    deleteButton.classList.add("btn-accion");

    //añadiendo btn al campo acciones
    cell5.appendChild(editButton);
    cell5.appendChild(deleteButton);
  }
}

//Editar Filas
function editRow(index) {
  let estudiante = estudiantes[index];

  document.getElementById("txtnombre").value = estudiante.nombre;
  document.getElementById("apellido").value = estudiante.apellido;
  document.getElementById("matricula").value = estudiante.matricula;
  document.getElementById("nota").value = estudiante.nota;
  deleteRow();
}

//btn Borrar
function deleteRow(index) {
  estudiantes.splice(index, 1);
  updateTable();
}
