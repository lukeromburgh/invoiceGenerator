// scripts.js

/* ======================================================
   Function: Update Button Text Dynamically (index.html)
   ====================================================== */
   function updateButtonText() {
    const button = document.querySelector(".CTA");
    button.textContent = window.innerWidth <= 620 
      ? "Start Free"
      : "Start Free — Create Your First Receipt in Seconds";
  }
  
  window.addEventListener("resize", updateButtonText);
  window.addEventListener("load", updateButtonText);
  
  /* ======================================================
     Functions: Editable Invoice Fields (invoice.html)
     ====================================================== */
  // Helper function: Prompt and replace text for a specific element
  function promptAndReplace(elementId, message, prefix = "") {
    const newValue = prompt(message);
    if (newValue) {
      document.getElementById(elementId).innerHTML = prefix + ": " + newValue;
    }
  }

  function changeName() {
    let name = prompt("What is your name?");
    document.getElementById("designerName").innerHTML =
      "designer: " + name;
  }

  function changeEmail() {
    let newEmail = prompt("What is your email?", "email@test.com");
    document.getElementById("email").innerHTML = newEmail;
  }