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

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const mailtoLink = `mailto:sivanagarajudavuluri9@gmail.com
    ?subject=Portfolio Contact from ${name}
    &body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

  window.location.href = mailtoLink;

  statusText.innerText = "📧 Opening email client...";
  form.reset();
});
setTimeout(() => {
  const alertBox = document.getElementById("alertBox");
  if (alertBox) {
    alertBox.style.display = "none";
  }
}, 5000);
