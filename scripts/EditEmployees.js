const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstName");
const middleNameEle = document.getElementById("middleName");
const lastNameEle = document.getElementById("lastName");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("street");
const stateEle = document.getElementById("State");
const countryEle = document.getElementById("country");
const citytEle = document.getElementById("city");
const zipCodeEle = document.getElementById("zipCode");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function getEditEmployee() {
  try {
    let resp = await fetch(`http://localhost:5000/employees/${id}`);
    // console.log(resp);
    let data = await resp.json();
    console.log(data);
    firstNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalStatus;
    phoneNoEle.value = data.phoneno;
    streetEle.value = data.address.street;
    citytEle.value = data.address.city;
    stateEle.value = data.address.state;
    countryEle.value = data.address.country;
    zipCodeEle.value = data.address.zipcode;
  } catch (error) {
    console.log(error);
    alert("SomeThing Went Wrong ❌");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  getEditEmployee();
});

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();

  //Update previous data
  let updatedEmployeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalStatus: maritalStatusEle.value.trim(),
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: citytEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipCodeEle.value.trim(),
    },
  };

  try {
    let resp = await fetch("http://localhost:5000/employees/${id}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmployeeData),
    });
  } catch (error) {
    console.log(error);
    alert("Something Went Wrong ❌");
  }
});
