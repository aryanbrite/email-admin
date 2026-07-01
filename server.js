const express = require("express");
const app = express();
const path = require("path");
const PORT=3000;
app.use(express.static(__dirname));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});
app.post("/send-email", (req,res) => {
    console.log(req.body);
    res.send("recived!");
});
app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
});