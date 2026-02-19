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

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");
  let newEmployeeData = {
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
    let resp = await fetch("https://crud-app-js-f021.onrender.com/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeeData),
    });

    console.log(resp);
  } catch (err) {
    console.log(err);
    alert("Something Went Wrong ❌");
  }
  //Navigation
  window.location.href = "AllEmployee.html";
});
