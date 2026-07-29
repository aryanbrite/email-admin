const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);


module.exports = async(req,res)=>{

    if(req.method !== "GET"){
        return res.status(405).json({
            error:"Method not allowed"
        });
    }


    try {

        const { data,error } = await resend.emails.receiving.list();


        if(error){
            return res.status(500).json({
                error:error.message
            });
        }


        const emails = data.data.map(email=>({

            id: email.id,

            from: email.from,

            subject: email.subject || "No Subject",

            text: email.text || "",

            time: new Date(email.created_at)
            .toLocaleString()

        }));


        res.json(emails);


    }catch(err){

        res.status(500).json({
            error:err.message
        });

    }

};