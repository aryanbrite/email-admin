const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {
        const { data, error } = await resend.emails.receiving.list();

        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};