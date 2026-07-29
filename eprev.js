const email = JSON.parse(localStorage.getItem("selectedEmail"));

if(!email){
    window.location.href = "index.html";
}


document.querySelector(".emailname").textContent = email.from;

document.querySelector(".emailsubject").textContent = email.subject;


document.querySelector("#emailtext p").textContent =
    email.text || "No email content available";