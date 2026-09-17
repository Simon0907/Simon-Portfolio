// ===== MOBILE MENU =====
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Close menu after clicking a link
document
  .querySelectorAll(".nav-links a")
  .forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

// ===== NAVBAR SCROLL EFFECT =====
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===== RESUME OVERLAY =====
var resumeOverlay = document.getElementById("resumeOverlay");
var resumeCloseBtn = document.getElementById("resumeCloseBtn");
var resumePrintBtn = document.getElementById("resumePrintBtn");
var heroResumeBtn = document.getElementById("heroResumeBtn");
var navResumeLink = document.getElementById("navResumeLink");

function openResume() {
  resumeOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeResume() {
  resumeOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

heroResumeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  openResume();
});

navResumeLink.addEventListener("click", function (e) {
  e.preventDefault();
  navLinks.classList.remove("active");
  menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  openResume();
});

resumeCloseBtn.addEventListener("click", closeResume);

resumeOverlay.addEventListener("click", function (e) {
  if (e.target === resumeOverlay) {
    closeResume();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && resumeOverlay.classList.contains("active")) {
    closeResume();
  }
});

resumePrintBtn.addEventListener("click", function () {
  window.print();
});

// ===== CONTACT FORM =====
var contactForm = document.getElementById("contactForm");
var btnText = document.getElementById("btnText");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  btnText.innerHTML = "Message sent! Thank you. <i class='fa-solid fa-check'></i>";

  setTimeout(function () {
    btnText.innerHTML = "Send Message <i class='fa-solid fa-paper-plane'></i>";
    contactForm.reset();
  }, 3000);
});

// ===== FOOTER YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();
