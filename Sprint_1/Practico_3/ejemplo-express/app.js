import express from "express";

// Crea una instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http:/localhost:${PORT}`);
});

// Ruta GET para el home
// Solicitud: http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Página de inicio");
});

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario con ID: ${userId}`);
});

// Ruta GET con multiples parámetros
// Solicitud: http://localhost:3000/product/electronics/456
app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Categoría: ${category}, ID del producto: ${id}`);
});

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Resultados de búsqueda para: ${query}`);
});

// Ruta GET con multiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get("/filter", (req, res) => {
  const { type, minPrice, maxPrice } = req.query;
  res.send(
    `Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`
  );
});
