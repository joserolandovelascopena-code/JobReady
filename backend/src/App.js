const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    "Faltan variables de entorno. Verifica SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en backend/.env",
  );
}

// Conexion con Supabase
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API JobReady funcionando");
});

// Ejemplo de ruta que consulta la base de datos
app.get("/usuarios", async (req, res) => {
  const { data, error } = await supabase.from("usuarios").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
