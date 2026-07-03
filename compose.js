const button = document.getElementById("sendBtn");
const to = document.getElementById("rec1");
const subject = document.getElementById("send111");
const text = document.getElementById("text1");
const toast = document.getElementById("toast");

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

button.addEventListener("click", async () => {
    const email = {
        to: to.value.trim(),
        subject: subject.value.trim(),
        text: text.value.trim()
    };

    if (!email.to || !email.subject || !email.text) {
        alert("Please fill all fields.");
        return;
    }

    try {
        const response = await fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Email sent successfully!");
            console.log(data);
        } else {
            alert(data.error || "Failed to send email.");
        }

    } catch (err) {
        console.error(err);
        alert("Server error.");
    }
});