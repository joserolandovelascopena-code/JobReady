/* main.js ======================== */
import "./server.js";
import "./modals.js";

import { protectRoute, logout } from "./services/authService.js";

document.addEventListener("DOMContentLoaded", async () => {
  await protectRoute();

  const btn = document.getElementById("logoutBtn");
  if (btn) btn.onclick = () => logout();

  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
    } catch (err) {
      console.warn("Service Worker no registrado:", err);
    }
  }
});
