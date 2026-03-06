/* main.js ======================== */
import "./server.js";
import "./modals.js";

document.addEventListener("DOMContentLoaded", async () => {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
    } catch (err) {
      console.warn("Service Worker no registrado:", err);
    }
  }
});
