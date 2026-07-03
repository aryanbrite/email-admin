require("dotenv").config();

const express = require("express");
const path = require("path");
const { Resend } = require("resend");

const app = express();
const PORT = 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.static(__dirname));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send-email", async (req, res) => {
    try {
        const { to, subject, text } = req.body;

        if (!to || !subject || !text) {
            return res.status(400).json({
                error: "Missing fields."
            });
        }

        const result = await resend.emails.send({
            from: "Aryan Brite <hi@aryan.my>",
            to,
            subject,
            text
        });

        res.json(result);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});