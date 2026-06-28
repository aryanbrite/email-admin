const API_KEY = "re_ahMLhULV_95AC9KTRAXfUDuVGeqBeyxcV";

async function sendEmail() {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Aryan <onboarding@resend.dev>",
      to: ["aryanbrite@gmail.com"],
      subject: "Test Email",
      html: "<h1>Hello!</h1><p>This is my first email using Resend.</p>"
    })
  });

  const data = await response.json();

  console.log(data);
}

sendEmail();