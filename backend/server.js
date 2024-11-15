require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta principal para verificar funcionamiento
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente 🚀");
});

// Ruta para obtener todos los países y sus banderas
app.get("/api/countries", async (req, res) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    // Transformar los datos para enviar solo lo necesario
    const countries = response.data.map((country) => ({
      name: country.name.common,
      flag: country.flags.png,
    }));

    res.json(countries);
  } catch (error) {
    console.error("Error al obtener los países:", error);
    res.status(500).json({ error: "No se pudieron obtener los países." });
  }
});

// Ruta para obtener una curiosidad sobre un país desde Wikipedia
app.get("/api/countries/:name/fact", async (req, res) => {
  const { name } = req.params;

  try {
    const response = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        format: "json",
        prop: "extracts",
        exintro: true,
        explaintext: true,
        titles: name,
      },
    });

    const pages = response.data.query.pages;
    const page = Object.values(pages)[0];

    if (page.extract) {
      res.json({ fact: page.extract });
    } else {
      res.json({
        fact: `No se encontró una curiosidad para ${name}. Intenta con otro país.`,
      });
    }
  } catch (error) {
    console.error("Error al obtener datos de Wikipedia:", error);
    res.status(500).json({ error: "Hubo un error al obtener la curiosidad." });
  }
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
