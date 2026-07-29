const send = document.getElementById("send");
const emailList = document.getElementById("emailList");


send.onclick = function () {
    window.location.href = "compose.html";
};



async function loadEmails(){

    try{

        const response = await fetch("/api/emails");

        const emails = await response.json();

        console.log(emails);


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



        emails.forEach((email)=>{


            const box = document.createElement("div");

            box.id="prev1";


            box.innerHTML = `

            <p class="emailname">
            ${email.from}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>


            <p class="emailsub">
            ${email.subject}
            </p>


            <p class="emailtime">
            ${email.time}
            </p>

            `;


            box.onclick=function(){

                window.location.href =
                `eprev.html?id=${email.id}`;

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