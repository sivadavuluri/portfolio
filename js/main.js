AOS.init({
  duration: 1300,
  easing: 'ease-in-out',
  once: true
});

window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

const form = document.getElementById("contactForm");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusText.innerText = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch("BACKEND_URL_HERE/contact/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      statusText.innerText = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusText.innerText = "❌ Failed to send message.";
    }
  } catch (error) {
    statusText.innerText = "⚠️ Server error. Try later.";
  }
});
