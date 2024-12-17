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

  function changeSocial() {
    let newSocial = prompt("What is your @?");
    document.getElementById("social").innerHTML = "@" + newSocial;
  }

  function changeClientName() {
    let newClient = prompt("What is your client's name?");
    document.getElementById("clientName").innerHTML =
      "client: " + newClient;
  }

  function changeDateTime() {
    let Day = prompt("What day is it?");
    let Month = prompt("What month is it?");
    let Year = prompt("What year is it?");

    let newDate = Day + "/" + Month + "/" + Year;

    document.getElementById("dateTime").innerHTML = newDate;
  }

  function changePaymentDue() {
    let dDay = prompt("What day would you like payment by?");
    let dMonth = prompt("What month would that be?");
    let dYear = prompt("What year is it?");

    let newDueDate = dDay + "/" + dMonth + "/" + dYear;

    document.getElementById("dueDate").innerHTML =
      "Payment Due: " + newDueDate;
  }

  function changeInvoiceID() {
    let invoiceID = prompt("Enter Invoice ID:");
    if (invoiceID) {
      document.querySelector(".InvoiceIdNumber").innerHTML = invoiceID;
    }
  }