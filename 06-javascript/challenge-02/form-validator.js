// Form Validator Script
const form = document.getElementById("registerForm");
const submitButton = document.getElementById("submitBtn");

const fields = [
  {
    input: document.getElementById("username"),
    validate: value => /^[a-zA-Z0-9]{3,15}$/.test(value),
    error: "Username must be 3–15 alphanumeric characters"
  },
  {
    input: document.getElementById("email"),
    validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    error: "Invalid email format"
  },
  {
    input: document.getElementById("password"),
    validate: value => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value),
    error: "Password must contain uppercase, number & symbol"
  },
  {
    input: document.getElementById("confirmPassword"),
    validate: value =>
      value !== "" &&
      value === document.getElementById("password").value,
    error: "Passwords do not match"
  }
];

// Show error
const showError = (input, message) => {
  input.nextElementSibling.innerText = message;
};

// Clear error
const showSuccess = input => {
  input.nextElementSibling.innerText = "";
};

// Validate single field
const validateField = field => {
  const value = field.input.value.trim();
  const isValid = field.validate(value);

  isValid
    ? showSuccess(field.input)
    : showError(field.input, `${field.error}`);

  return isValid;
};

// Validate entire form
const validateForm = () => {
  submitButton.disabled = !fields.every(validateField);
};

// Attach listeners
fields.forEach(field => {
  field.input.addEventListener("blur", validateForm);
});

// Prevent actual submit
form.addEventListener("submit", e => e.preventDefault());
