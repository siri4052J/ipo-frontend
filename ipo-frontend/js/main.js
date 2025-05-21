// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  const enableDarkMode = () => {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  };

  const disableDarkMode = () => {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  };

  // Load theme from storage
  if (localStorage.getItem("theme") === "dark") {
    enableDarkMode();
  }

  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});
