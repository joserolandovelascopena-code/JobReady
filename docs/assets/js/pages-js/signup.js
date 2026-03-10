import { signup } from "../services/authService.js";

const inputsSignup = document.querySelectorAll(".input-group");
const msg = document.querySelector(".menssages");
const loader = document.querySelector(".loader");
const textLoader = document.querySelector(".content_text_loader p");

function setError(container) {
  container.classList.remove("success");
  container.classList.add("error");
}

function setSuccess(container) {
  container.classList.remove("error");
  container.classList.add("success");
}

function validateContainer(container) {
  const input = container.querySelector("input");
  const value = input.value.trim();
  const type = input.type;

  if (!value) {
    setError(container);
    return false;
  }
  if (type === "text") {
    if (value.length < 3) {
      setError(container);
      return false;
    }
  }

  if (type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError(container);
      return false;
    }
  }

  if (type === "password") {
    if (value.length < 8) {
      setError(container);
      return false;
    }
  }

  setSuccess(container);
  return true;
}
inputsSignup.forEach((container) => {
  const input = container.querySelector("input");

  input.addEventListener("input", () => {
    validateContainer(container);
  });
});

document.getElementById("signupBtn").onclick = async () => {
  let hasError = false;

  inputsSignup.forEach((container) => {
    const valid = validateContainer(container);
    if (!valid) hasError = true;
  });

  if (hasError) {
    msg.textContent = "Corrige los campos marcados en rojo";
    msg.classList.add("active");
    return;
  }

  const nameValue = document.getElementById("fullName").value.trim();
  const emailValue = document
    .getElementById("email")
    .value.trim()
    .toLowerCase();
  const passValue = document.getElementById("password").value;

  if (!navigator.onLine) {
    msg.textContent = "En este momento no hay conexión a internet";
    msg.classList.add("active");
    return;
  }

  try {
    await signup(nameValue, emailValue, passValue);
    msg.classList.remove("active");
    loader.classList.add("show");

    setTimeout(() => {
      textLoader.textContent = "Redirigiendo a login...";
    }, 2000);
    setTimeout(() => {
      window.location.href = "./login.html";
    }, 4000);
  } catch (e) {
    msg.textContent = e.message;
    msg.classList.add("active");
  }
};

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
});

const eyePassword = document.querySelector(".eyePassword");
const inputPass = document.getElementById("password");

eyePassword.addEventListener("click", () => {
  const isPass = inputPass.type === "password";
  inputPass.type = isPass ? "text" : "password";
  eyePassword.classList.toggle("fa-eye", isPass);
  eyePassword.classList.toggle("fa-eye-slash", !isPass);
});

const btnBenefit = document.querySelector(".btnBenefit");
const benefits = document.querySelector(".benefits");
const icon_angle = document.querySelector(".iconOpenBenefits");

btnBenefit.addEventListener("click", () => {
  benefits.classList.toggle("show");

  const isIcon = icon_angle.classList.contains("fa-angle-down");

  icon_angle.classList.toggle("fa-angle-down", !isIcon);
  icon_angle.classList.toggle("fa-angle-up", isIcon);
});
