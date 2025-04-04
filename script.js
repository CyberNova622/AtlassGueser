document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.getElementById("logo1").addEventListener("click", function () {
  window.location.href = "index.html";
});

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function scrollToSection(sectionId) {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function startGame() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("gameModal");

  overlay.style.display = "block";
  modal.style.display = "block";

  modal.offsetHeight;

  overlay.classList.add("active");
  modal.classList.add("active");
}

function closeModal() {
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("gameModal");

  overlay.classList.remove("active");
  modal.classList.remove("active");

  setTimeout(() => {
    overlay.style.display = "none";
    modal.style.display = "none";
  }, 300);

  window.location.href = "game.html";
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize form handlers
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", Auth.handleSignup.bind(Auth));
  }

  // Initialize password toggle
  PasswordToggle.init();

  // Initialize particle system if container exists
  if (document.getElementById("particles-container")) {
    ParticleSystem.init();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("tvakopche");

  if (!button) {
    console.error("Button #tvakopche not found in DOM!");
    return;
  }

  console.log("Button found! Adding event listener...");

  button.addEventListener("click", () => {
    console.log("Button clicked! Calling pyrvo()...");
    pyrvo();
  });
});
