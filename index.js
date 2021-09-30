const express = require("express");
const cors = require("cors");
const functions = require("./app/functions/functions");
const app = express();

//se usa en vez de body-parse
app.use(cors());
app.use(express.json());

//construye las rutas de servicio
app.post("/pokemon-informations", functions.getPokemonInformations);
app.post("/pokemon-evolutions", functions.getPokemonEvolutions);
// app.post('/errors', function (req, res) {
//     console.error(req.body, res);
//     res.sendStatus(200);
// });

//iniciar el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));
