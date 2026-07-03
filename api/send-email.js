const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { to, subject, text } = req.body;

        const data = await resend.emails.send({
            from: "Aryan Brite <hi@aryan.my>",
            to,
            subject,
            text
        });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};