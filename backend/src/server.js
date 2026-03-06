const express = require("express");
const cors = require("cors");
require("dotenv").config();

const certificateRoutes = require("./routes/certificateRoutes");
const cvRoutes = require("./routes/cvRoutes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rutas de la API
app.use("/api/certificates", certificateRoutes);
app.use("/api/cv", cvRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API JobReady funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
