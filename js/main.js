//  "service_d1n0hmf",   // 👈 service ID
//   "template_7az43wk",  // 👈 template ID
// "1YZkJN99Khg94sC2f"    // 👈 public key
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("1YZkJN99Khg94sC2f"); 

  const form = document.getElementById("contact-form");
  const button = document.getElementById("sendBtn");
  const statusText = document.getElementById("status");

  button.addEventListener("click", function () {
    statusText.style.color = "#aaa";
    statusText.innerText = "Sending...";
    button.disabled = true;
    button.querySelector("span").innerText = "Sending...";

    emailjs.sendForm(
      "service_d1n0hmf",
      "template_7az43wk",
      form
    )
    .then(() => {
      statusText.style.color = "#4caf50";
      statusText.innerText = "✅ Message sent successfully!";
      button.querySelector("span").innerText = "Sent ✔";
      form.reset();

      setTimeout(() => {
        button.disabled = false;
        button.querySelector("span").innerText = "Send Message";
      }, 2000);
    })
    .catch(() => {
      statusText.style.color = "#f44336";
      statusText.innerText = "❌ Failed to send message.";
      button.disabled = false;
      button.querySelector("span").innerText = "Send Message";
    });
  });
});
