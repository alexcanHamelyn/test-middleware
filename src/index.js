const express = require('express');
const { middleware } = require('./middleware');
const app = express();

// Middleware para verificar el código de estado
app.use(middleware);

// Ruta de ejemplo
app.get('/error-capturado', (req, res) => {
    return res.status(500).send('Error capturado');
});

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Hello There!" })
});

app.get("/201", (req, res) => {
    return res.status(201).send({ message: "Status 201" })
});

app.get("/204", (req, res) => {
    return res.sendStatus(204);
});

app.get("/401", (req, res) => {
    return res.status(401).send({ message: "Status 401" });
});

app.get("/403", (req, res) => {
    return res.status(403).send({ message: "Status 403" });
});

app.get("/error", (req, res) => {
    return res.status(400).send({ errorCode: "Ups..." })
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} 🚀`);
});