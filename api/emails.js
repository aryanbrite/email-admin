const fs = require("fs");
const path = require("path");


module.exports = async (req,res)=>{


    if(req.method !== "GET"){
        return res.status(405).json({
            error:"Method not allowed"
        });
    }


    try{


        const file = path.join(
            process.cwd(),
            "api",
            "emails.json"
        );


        const emails = JSON.parse(
            fs.readFileSync(file,"utf-8")
        );


        res.status(200).json(emails);



    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};
