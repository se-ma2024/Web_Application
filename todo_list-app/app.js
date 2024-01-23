const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});