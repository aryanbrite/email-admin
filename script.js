const send = document.getElementById("send");
const emailList = document.getElementById("emailList");


send.onclick = function () {
    window.location.href = "compose.html";
};



async function loadEmails(){

    try{

        const response = await fetch("/api/emails");

        const emails = await response.json();


        emailList.innerHTML = "";


        if(emails.length === 0){

            emailList.innerHTML = `
            <div id="prev1">
                <p class="emailname">
                No emails
                </p>

                <p class="emailsub">
                Inbox empty
                </p>
            </div>
            `;

            return;
        }



        emails.forEach((email,index)=>{


            const box = document.createElement("div");

            box.id="prev1";


            box.innerHTML = `

            <p class="emailname">
            ${email.from}
            </p>


            <p class="emailsub">
            ${email.subject}
            </p>


            <p class="emailtime">
            ${email.time}
            </p>

            `;


            box.onclick=function(){

                localStorage.setItem(
                    "selectedEmail",
                    JSON.stringify(email)
                );


                window.location.href="eprev.html";

            };


            emailList.appendChild(box);


        });


    }
    catch(error){

        console.log(error);


        emailList.innerHTML=`

        <div id="prev1">
            <p class="emailname">
            Error
            </p>

            <p class="emailsub">
            Cannot load emails
            </p>
        </div>

        `;

    }

}



loadEmails();