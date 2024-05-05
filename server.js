// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Carga variables de entorno
dotenv.config();

// Importa la función para conectar con la base de datos
const connectDB = require("./app/config/db");

// Inicia la conexión a la base de datos
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());


const userRoutes = require('./app/routes/userRoutes');
const categoriesRoutes = require('./app/routes/categoriesRoutes');

app.use('/api/users', userRoutes);
app.use('/api/categories', categoriesRoutes); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
