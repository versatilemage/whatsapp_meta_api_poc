const express = require("express");
const apiRoutes = require("./src/routes/route.js")

const app = express();

const PORT = process.env.port || 8080;

app.use(express.json());
app.use("/whatsapp", apiRoutes);

app.listen(PORT, () => {(console.log(`Running on http://localhost:${PORT}/`))})
