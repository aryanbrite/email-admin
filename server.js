const express = require("express");
const app = express();
const PORT=3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.sendFile(index.html);
});
app.post("/send-email", (req,res) => {
    console.log(req.body);
    res.send("recived!");
});
app.listen(PORT, () => {
    console.log(`server is running at localhost:${PORT}`);
});