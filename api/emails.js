module.exports = async (req, res) => {

    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }


    try {

        // temporary test data
        const emails = [
            {
                id: "1",
                from: "test@example.com",
                subject: "Hello Aryan",
                date: "Today"
            },
            {
                id: "2",
                from: "user@gmail.com",
                subject: "Contact request",
                date: "Yesterday"
            }
        ];


        res.status(200).json(emails);


    } catch(error){

        res.status(500).json({
            error: error.message
        });

    }

};