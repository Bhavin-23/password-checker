const passwordInput = document.getElementById("password");
const toggle = document.getElementById("toggle");

const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const special = document.getElementById("special");

toggle.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type");
  passwordInput.setAttribute(
    "type",
    type === "password" ? "text" : "password"
  );
  toggle.classList.toggle("fa-eye-slash");
});

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;

  // Validate Length
  val.length >= 8
    ? length.classList.replace("invalid", "valid")
    : length.classList.replace("valid", "invalid");

  // Uppercase
  /[A-Z]/.test(val)
    ? uppercase.classList.replace("invalid", "valid")
    : uppercase.classList.replace("valid", "invalid");

  // Lowercase
  /[a-z]/.test(val)
    ? lowercase.classList.replace("invalid", "valid")
    : lowercase.classList.replace("valid", "invalid");

  // Number
  /[0-9]/.test(val)
    ? number.classList.replace("invalid", "valid")
    : number.classList.replace("valid", "invalid");

  // Special Characters
  /[!@#$%^&*]/.test(val)
    ? special.classList.replace("invalid", "valid")
    : special.classList.replace("valid", "invalid");
});
