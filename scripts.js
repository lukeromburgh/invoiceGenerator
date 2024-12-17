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
  
  // Function: Change Designer's Name
  function changeName() {
    promptAndReplace("designerName", "What is your name?", "designer");
  }
  
  // Function: Change Email Address
  function changeEmail() {
    promptAndReplace("email", "What is your email?");
  }
  
  // Function: Change Social Handle
  function changeSocial() {
    promptAndReplace("social", "What is your @?");
  }
  
  // Function: Change Client Name
  function changeClientName() {
    promptAndReplace("clientName", "What is your client's name?", "client");
  }
  
  // Function: Change Date and Time
  function changeDateTime() {
    const day = prompt("What day is it?");
    const month = prompt("What month is it?");
    const year = prompt("What year is it?");
    if (day && month && year) {
      document.getElementById("dateTime").innerHTML = `${day}/${month}/${year}`;
    }
  }
  
  // Function: Change Payment Due Date
  function changePaymentDue() {
    const day = prompt("What day is the payment due?");
    const month = prompt("What month?");
    const year = prompt("What year?");
    if (day && month && year) {
      document.getElementById("dueDate").innerHTML = `Payment Due: ${day}/${month}/${year}`;
    }
  }
  
  // Function: Change Invoice ID
  function changeInvoiceID() {
    promptAndReplace("right", "Enter Invoice ID:");
  }
  
  // Function: Change Account Name
  function changeAccountName() {
    promptAndReplace("right", "Enter Account Name:");
  }
  
  // Function: Change Sort Code
  function changeSortCode() {
    const sortCode = prompt("Enter Sort Code (6 digits):");
    if (sortCode && /^\d{6}$/.test(sortCode)) {
      const formattedCode = `${sortCode.slice(0, 2)}-${sortCode.slice(2, 4)}-${sortCode.slice(4)}`;
      document.querySelector(".sortCode").innerHTML = formattedCode;
    } else {
      alert("Please enter a valid 6-digit sort code.");
    }
  }
  
  // Function: Change Account Number
  function changeAccountNumber() {
    promptAndReplace("right", "Enter Account Number:");
  }
  
  /* ======================================================
     Invoice Item Value Updates and Calculations
     ====================================================== */
  let itemValues = [150, 3750, 75];
  let discountRate = 0;
  
  // Functions to update item names dynamically
  function changeItemName(index) {
    const newItem = prompt(`What would you like to call Item ${index + 1}?`);
    if (newItem) {
      document.querySelector(`.item${index + 1}Name`).innerHTML = `${newItem}:`;
    }
  }
  
  // Functions to update item values dynamically
  function changeItemValue(index) {
    const newValue = prompt(`Enter the new value for Item ${index + 1}:`);
    if (!isNaN(newValue) && newValue !== null) {
      itemValues[index] = parseFloat(newValue);
      document.querySelector(`.item${index + 1}Value`).innerHTML = `£${itemValues[index].toFixed(2)}`;
      updateCalculations();
    }
  }
  
  // Function to update the discount
  function changeDiscount() {
    const newDiscount = prompt("Enter the discount rate (0-99)%:");
    if (!isNaN(newDiscount) && newDiscount >= 0 && newDiscount <= 99) {
      discountRate = parseFloat(newDiscount);
      updateCalculations();
    } else {
      alert("Please enter a valid discount rate between 0 and 99.");
    }
  }
  
  // Function to calculate and update totals
  function updateCalculations() {
    const subtotal = itemValues.reduce((acc, value) => acc + value, 0);
    const discount = (subtotal * discountRate) / 100;
    const vat = (subtotal - discount) * 0.14;
    const total = subtotal - discount + vat;
  
    document.querySelector("#subtotal").innerHTML = `£${subtotal.toFixed(2)}`;
    document.querySelector("#discount").innerHTML = `£${discount.toFixed(2)} (${discountRate}%)`;
    document.querySelector("#vat").innerHTML = `£${vat.toFixed(2)}`;
    document.querySelector("#total").innerHTML = `£${total.toFixed(2)}`;
  }
  updateCalculations();
  
  /* ======================================================
     Function: Change Paper Texture
     ====================================================== */
  const paperTextures = [
    "url('images/paper-texture.webp')",
    "url('images/cardboard.webp')",
    "url('images/holes.webp')",
  ];
  let textureIndex = 0;
  
  function changePaperTexture() {
    const invoiceDiv = document.getElementById("invoice-div");
    textureIndex = (textureIndex + 1) % paperTextures.length;
    invoiceDiv.style.backgroundImage = paperTextures[textureIndex];
  }
  
  /* ======================================================
     Pop-up Handlers for How-To Guide
     ====================================================== */
  function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
  }
  
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
  }
  