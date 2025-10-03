const toggleSwitch = document.getElementById("darkModeSwitch");
const body = document.body;
const labelSwitch = document.querySelector("label[for='darkModeSwitch']");

// Revisar si ya hay preferencia guardada
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleSwitch.checked = true;
  labelSwitch.textContent = "☀️";
} else {
  toggleSwitch.checked = false;
  labelSwitch.textContent = "🌙";
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
    labelSwitch.textContent = "☀️";
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
    labelSwitch.textContent = "🌙";
  }
});