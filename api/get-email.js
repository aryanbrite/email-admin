const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {

    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    try {

        const id = req.query.id;

        if (!id) {
            return res.status(400).json({
                error: "Missing email id"
            });
        }


        const { data, error } = await resend.emails.receiving.get(id);


        if (error) {
            return res.status(500).json({
                error: error.message
            });
        }


        res.status(200).json(data);


    } catch(err) {

        res.status(500).json({
            error: err.message
        });

    }

};