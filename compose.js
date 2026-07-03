const button = document.getElementById("sendBtn");
const to = document.getElementById("rec1");
const subject = document.getElementById("send111");
const text = document.getElementById("text1");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toasth2");
const toastImg = document.getElementById("toastimg");

function showToast(message) {
    toastText.textContent = message;

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
        toastImg.src = "https://cdn.hackclub.com/019f294c-4f78-7870-aeb7-b19a674be042/Untitled%20design%20(79).png";
        showToast("Fill Feilds");
        return;
    }

    try {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });

        const data = await response.json();

        if (response.ok) {
            showToast("Email sent !");
            console.log(data);
            toastImg.src = "https://cdn.hackclub.com/019f290c-9dbb-75e7-a485-2e89c7a5593c/Untitled%20design%20(78).png";
        } else {
            showToast((data.error || "Failed :("));
            toastImg.src = "https://cdn.hackclub.com/019f294c-4f78-7870-aeb7-b19a674be042/Untitled%20design%20(79).png";
        }

    } catch (err) {
        console.error(err);
        showToast("Server error.");
    }
});