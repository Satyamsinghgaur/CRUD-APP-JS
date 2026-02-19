const employeesContainerEle = document.getElementById("employees-container");

async function getAllEmployees() {
  try {
    let resp = await fetch("https://crud-app-js-f021.onrender.com/employees");
    let data = await resp.json();
    console.log(data); //[{}, {}, {}, {}]
    displayEmployees(data);
  } catch (err) {
    console.log(err);
    alert("Something Went Wrong ❌");
  }
}

//CASS FUNCTION AFTER DOM TREE CREATION
window.addEventListener("DOMContentLoaded", () => {
  getAllEmployees();
});

function displayEmployees(allEmployees) {
  allEmployees.map((emp) => {
    const empCard = document.createElement("article");
    empCard.className = "emp-card";

    empCard.innerHTML = `
        <header class="emp-header">
        <h3 class="emp-name">
          ${emp.firstname} ${emp.middlename} ${emp.lastname}
        </h3>
        <span class="emp-id">ID: ${emp.id}</span>
      </header>

      <section class="emp-info">
        <p><strong>Date of Birth:</strong> ${emp.dob}</p>
        <p><strong>Marital Status:</strong> ${emp.maritalstatus}</p>
      </section>

      <section class="emp-contact">
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Phone:</strong> ${emp.phoneno}</p>
      </section>

      <section class="emp-address">
        <p><strong>Address:</strong></p>
        <p>
          ${emp.address.street}, ${emp.address.city},<br>
          ${emp.address.state}, ${emp.address.country} - ${emp.address.zipcode}
        </p>
      </section>

      <footer class="emp-actions">
        <button class="btn edit-btn" data-id="${emp.id}">Edit</button>
        <button class="btn delete-btn" data-id="${emp.id}" >Delete</button>
      </footer>
        `;
    //apply Click event in deleteBTN
    const deletebtn = empCard.querySelector(".delete-btn");
    deletebtn.addEventListener("click", () => {
      handleDelete(emp.id);
    });
    employeesContainerEle.append(empCard);

    const editbtn = empCard.querySelector(".edit-btn");
    editbtn.addEventListener("click", () => {
      handleEdit(emp.id);
    });
  });
}

async function handleDelete(id) {
  console.log(id);

  try {
    let resp = fetch(`http://localhost:5000/employees/${id}`, {
      method: "DELETE",
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
    alert("Unable to delete ❌");
  }
}

function handleEdit(id) {
  console.log(id);
  window.location.href = `EdiEmployee.html?id=${id}`;
}
