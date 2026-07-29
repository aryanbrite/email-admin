const params = new URLSearchParams(window.location.search);

const id = params.get("id");


if(!id){
    window.location.href = "index.html";
}
async function loadEmail(){

    try{

        const response = await fetch(`/api/get-email?id=${id}`);

        const email = await response.json();

        console.log(email);


        document.querySelector(".emailname").textContent =
        email.from || "Unknown";


        document.querySelector(".emailsubject").textContent =
        email.subject || "No Subject";



        let content = "No email content";


        if(email.text){
            content = email.text;
        }
        else if(email.html){
            content = email.html;
        }
        else if(email.body){
            content = email.body;
        }



        document.querySelector("#emailtext p").textContent = content;


    }
    catch(error){

        console.log(error);

        document.querySelector("#emailtext p").textContent =
        "Cannot load email";

    }

}


loadEmail();