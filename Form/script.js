const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

console.log(validateInputs());

function validateInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;

  if (usernameVal === "") {
    setError(username, "Username is required");
    success = false;
  } else {
    setSuccess(username);
    success = true;
  }

  if (emailVal === "") {
    setError(email, "Email is required");
    success = false;
  } else if (!validateEmail(emailVal)) {
    setError(email, "Please enter a valid email");
    success = false;
  } else {
    setSuccess(email);
    success = true;
  }

  if (passwordVal === "") {
    setError(password, "Password is required");
    success = false;
  } else if (passwordVal.length < 8) {
    setError(password, "Password must need 8 characters");
    success = false;
  } else {
    setSuccess(password);
    success = true;
  }

  if (cpasswordVal === "") {
    setError(cpassword, "Confirm Password is required");
    success = false;
  } else if (cpasswordVal !== passwordVal) {
    setError(cpassword, "Paassword does not match");
    success = false;
  } else {
    setSuccess(cpassword);
    success = true;
  }

  
  return success;
}
//Error function
function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}
//Success function
function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};
