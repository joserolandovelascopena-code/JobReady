import { supabase } from "../config/supabase.js";
import { signup, loginGoogle } from "../services/authService.js";

async function checkSession() {
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    window.location.href = "/index.html";
  }
}

checkSession();

supabase.auth.onAuthStateChange((event, session) => {
  if (session) {
    window.location.href = "/index.html";
  }
});

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

  // limpiar mensaje primero
  msg.classList.remove("active");

  if (!value) {
    setError(container);
    msg.textContent = "Este campo es obligatorio";
    msg.classList.add("active");
    return false;
  }

  if (type === "text") {
    if (value.length < 3) {
      setError(container);
      msg.textContent = "El nombre debe tener al menos 3 caracteres.";
      msg.classList.add("active");
      return false;
    }
  }

  if (type === "email") {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(value)) {
      setError(container);
      msg.textContent =
        "Por favor ingresa un correo válido (ejemplo@dominio.com)";
      msg.classList.add("active");
      return false;
    }
  }

  if (type === "password") {
    let mensajes = [];

    if (value.length < 8) mensajes.push("mínimo 8 caracteres");
    if (!/[A-Z]/.test(value)) mensajes.push("una mayúscula");
    if (!/[0-9]/.test(value)) mensajes.push("un número");
    if (!/[!@#$%^&*]/.test(value)) mensajes.push("un carácter especial");

    if (mensajes.length > 0) {
      setError(container);
      msg.textContent = "Falta: " + mensajes.join(", ");
      msg.classList.add("active");
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

    if (!valid) {
      container.querySelector("input").focus();
      hasError = true;
    }
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

document.querySelector(".googleProviders").onclick = () => {
  loginGoogle();
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
