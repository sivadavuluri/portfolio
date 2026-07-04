//  "service_d1n0hmf",   // 👈 service ID
//   "template_7az43wk",  // 👈 template ID
// "1YZkJN99Khg94sC2f"    // 👈 public key
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("1YZkJN99Khg94sC2f"); 

  const form = document.getElementById("contact-form");
  const button = document.getElementById("sendBtn");
  const statusText = document.getElementById("status");

  button.addEventListener("click", function () {
    // simple validation: check required fields and email format
    const inputs = Array.from(form.querySelectorAll('input, textarea'));
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    inputs.forEach(el => {
      el.classList.remove('invalid');
      const val = (el.value || '').trim();
      if (el.required && !val) {
        valid = false;
        el.classList.add('invalid');
      }
      if (el.type === 'email' && val && !emailRegex.test(val)) {
        valid = false;
        el.classList.add('invalid');
      }
    });

    if (!valid) {
      statusText.style.color = "#f44336";
      statusText.innerText = "❌ Please fill all required fields correctly.";
      return;
    }

    statusText.style.color = "#4caf50";
    statusText.innerText = "Sending...";
    button.disabled = true;
    button.querySelector("span").innerText = "Sending...";

    emailjs.sendForm(
      "service_d1n0hmf",
      "template_7az43wk",
      form
    )
    .then(() => {
      emailjs.sendForm(
        "service_d1n0hmf",
        "template_wst3fs1",
        form
      );
      
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

// ===== NAVBAR SCROLL SPY =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY + 160;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  return false;
});

// Disable copy, inspect, save shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.ctrlKey && 
    (e.key === "u" || e.key === "s" || e.key === "c")
  ) {
    e.preventDefault();
  }

  if (e.key === "F12") {
    e.preventDefault();
  }
});

 const textEl = document.querySelector('.text');

setInterval(() => {
    if (textEl.textContent === "Front-end Developer") {
        textEl.textContent = "Full Stack Developer";
    } else {
        textEl.textContent = "Front-end Developer";
    }
}, 4000); // Toggles the text every 4 seconds to match the 8-second animation cycle
