document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Memeriksa apakah semua field valid
  if (validateAllFields()) {
    const url = event.target.action;
    const formData = new FormData(document.getElementById("contact-form"));
    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        window.location.href = "/thankyou.html";
      })
      .catch((e) => {
        alert("Error occurred during form submission: " + e.message);
      });
  }
});

// Fungsi untuk menangani validasi semua field sekaligus
function validateAllFields() {
  let isValid = true;
  ["nama", "email", "subjek", "pesan"].forEach(function (fieldName) {
    if (!validateField(fieldName)) {
      isValid = false;
    }
  });
  return isValid;
}

// Fungsi untuk menangani validasi individual setiap field
function validateField(fieldName) {
  var value = document.getElementById(fieldName).value;
  var errorDiv = document.getElementById(fieldName + "Error");
  if (!value) {
    errorDiv.style.display = "inline";
    return false;
  } else {
    errorDiv.style.display = "none";
    return true;
  }
}

// Event listener untuk blur pada semua field
["nama", "email", "subjek", "pesan"].forEach(function (fieldName) {
  document.getElementById(fieldName).addEventListener("blur", function () {
    validateField(fieldName);
  });
});

//function spinner
window.addEventListener("load", function () {
  const spinner = document.querySelector(".spinner-center");
  const app = document.getElementById("app");

  app.style.display = "none";
  setTimeout(() => {
    spinner.style.display = "none";
    app.style.display = "block";
  }, 5000);
});

//function effects
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".observe-animation")[0].classList.add("fade-up");
      document.querySelectorAll(".observe-animation")[1].classList.add("fade-up");
      document.querySelectorAll(".observe-animation")[2].classList.add("fade-up");
      document.querySelectorAll(".observe-animation")[3].classList.add("fade-up");
      document.querySelectorAll(".observe-animation")[4].classList.add("fade-up");
      document.querySelectorAll(".observe-animation")[5].classList.add("fade-up");
    }
  });
});

observer.observe(document.getElementById("about-container"));
observer.observe(document.getElementById("projects-container"));
