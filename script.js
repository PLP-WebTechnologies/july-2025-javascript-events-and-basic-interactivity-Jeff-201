// 🌙 Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Button Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// 📚 FAQ Toggle
document.querySelectorAll(".faq-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// 📋 Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Validate name
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address.");
  }

  // Validate password
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  const feedback = document.getElementById("formFeedback");
  feedback.innerHTML = "";

  if (errors.length > 0) {
    feedback.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>`;
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
  }
});
