// ===== BURGER MENU FUNCTIONALITY =====
function toggleMenu(btn) {
  btn.classList.toggle("open");
  const menu = document.getElementById("menu");

  if (btn.classList.contains("open")) {
    btn.textContent = "✖"; // Show cross icon
    menu.classList.add("active");
  } else {
    btn.textContent = "☰"; // Show hamburger icon
    menu.classList.remove("active");
  }
}
