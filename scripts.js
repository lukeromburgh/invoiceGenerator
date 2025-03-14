// scripts.js
/*global window, document, html2canvas, emailjs, html2pdf */

/* ======================================================
   Function: Update Button Text Dynamically (index.html)
   ====================================================== */
function updateButtonText() {
  "use strict";
  const button = document.querySelector(".callToAction");
  // Prevent errors if the button element doesn't exist
  if (button) {
    button.textContent =
      window.innerWidth <= 620
        ? "Start Free"
        : "Start Free — Create Your First Receipt in Seconds";
  }
}

// Wait for DOM content to load before attaching event listeners
window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  updateButtonText();
  window.addEventListener("resize", updateButtonText);
});

/* ======================================================
       Functions: Editable Invoice Fields (invoice.html)
       ====================================================== */
// Helper function: Prompt and replace text for a specific element
function promptAndReplace(elementId, message, prefix) {
  "use strict";
  prefix = prefix || ""; // Default parameter value
  const newValue = window.prompt(message);
  if (newValue) {
    document.getElementById(elementId).innerHTML = prefix + ": " + newValue;
  }
}

function changeName() {
  "use strict";
  const name = window.prompt("What is your name?");
  if (name) {
    document.getElementById("designerName").innerHTML = "designer: " + name;
  }
}

function changeEmail() {
  "use strict";
  const newEmail = window.prompt("What is your email?", "email@test.com");
  if (newEmail) {
    document.getElementById("email").innerHTML = newEmail;
  }
}

function changeSocial() {
  "use strict";
  const newSocial = window.prompt("What is your @?");
  if (newSocial) {
    document.getElementById("social").innerHTML = "@" + newSocial;
  }
}

function changeClientName() {
  "use strict";
  const newClient = window.prompt("What is your client's name?");
  if (newClient) {
    document.getElementById("clientName").innerHTML = "client: " + newClient;
  }
}

function changeDateTime() {
  "use strict";
  const day = window.prompt("What day is it?");
  const month = window.prompt("What month is it?");
  const year = window.prompt("What year is it?");
  if (day && month && year) {
    const newDate = day + "/" + month + "/" + year;
    document.getElementById("dateTime").innerHTML = newDate;
  }
}

function changePaymentDue() {
  "use strict";
  const dDay = window.prompt("What day would you like payment by?");
  const dMonth = window.prompt("What month would that be?");
  const dYear = window.prompt("What year is it?");
  if (dDay && dMonth && dYear) {
    const newDueDate = dDay + "/" + dMonth + "/" + dYear;
    document.getElementById("dueDate").innerHTML = "Payment Due: " + newDueDate;
  }
}

function changeInvoiceID() {
  "use strict";
  const invoiceID = window.prompt("Enter Invoice ID:");
  if (invoiceID) {
    document.querySelector(".invoiceIdNumber").innerHTML = invoiceID;
  }
}

function changeAccountName() {
  "use strict";
  const accountName = window.prompt("Enter Account Name:");
  if (accountName) {
    document.querySelector(".accName").innerHTML = accountName;
  }
}

function changeSortCode() {
  "use strict";
  const sortCode = window.prompt("Enter Sort Code (6 digits):");
  if (sortCode && /^\d{6}$/.test(sortCode)) {
    const formattedSortCode =
      sortCode.slice(0, 2) +
      "-" +
      sortCode.slice(2, 4) +
      "-" +
      sortCode.slice(4);
    document.querySelector(".sortCode").innerHTML = formattedSortCode;
  } else {
    window.alert("Please enter a valid 6-digit sort code.");
  }
}

function changeAccountNumber() {
  "use strict";
  const accountNumber = window.prompt("Enter Account Number:");
  if (accountNumber) {
    document.querySelector(".accNo").innerHTML = accountNumber;
  }
}

// Initialize item values and discount rate
let itemValues = [150, 3750, 75];
let discountRate = 0;

function changeName1() {
  "use strict";
  const newItem = window.prompt("What would you like to call Item 1?");
  if (newItem) {
    document.querySelector(".item1Name").innerHTML = newItem + ":";
  }
}

function changeName2() {
  "use strict";
  const newItem = window.prompt("What would you like to call Item 2?");
  if (newItem) {
    document.querySelector(".item2Name").innerHTML = newItem + ":";
  }
}

function changeName3() {
  "use strict";
  const newItem = window.prompt("What would you like to call Item 3?");
  if (newItem) {
    document.querySelector(".item3Name").innerHTML = newItem + ":";
  }
}

function changeValue1() {
  "use strict";
  const newValue = window.prompt("Enter the new value for Item 1:");
  if (newValue !== null && !Number.isNaN(Number(newValue))) {
    itemValues[0] = parseFloat(newValue);
    document.querySelector(".item1Value").innerHTML =
      "£" + itemValues[0].toFixed(2);
    updateCalculations();
  }
}

function changeValue2() {
  "use strict";
  const newValue = window.prompt("Enter the new value for Item 2:");
  if (newValue !== null && !Number.isNaN(Number(newValue))) {
    itemValues[1] = parseFloat(newValue);
    document.querySelector(".item2Value").innerHTML =
      "£" + itemValues[1].toFixed(2);
    updateCalculations();
  }
}

function changeValue3() {
  "use strict";
  const newValue = window.prompt("Enter the new value for Item 3:");
  if (newValue !== null && !Number.isNaN(Number(newValue))) {
    itemValues[2] = parseFloat(newValue);
    document.querySelector(".item3Value").innerHTML =
      "£" + itemValues[2].toFixed(2);
    updateCalculations();
  }
}

function changeDiscount() {
  "use strict";
  const newDiscount = window.prompt("Enter the discount rate (0-99)%:");
  if (
    newDiscount !== null &&
    !Number.isNaN(Number(newDiscount)) &&
    parseFloat(newDiscount) >= 0 &&
    parseFloat(newDiscount) <= 99
  ) {
    discountRate = parseFloat(newDiscount);
    updateCalculations();
  } else {
    window.alert("Please enter a valid discount rate between 0 and 99.");
  }
}

function updateCalculations() {
  "use strict";
  const subtotal = itemValues.reduce(function (acc, value) {
    return acc + value;
  }, 0);
  const discount = (subtotal * discountRate) / 100;
  const vat = (subtotal - discount) * 0.14;
  const total = subtotal - discount + vat;

  document.querySelector("#subtotal").innerHTML = "£" + subtotal.toFixed(2);
  document.querySelector("#discount").innerHTML =
    "£" + discount.toFixed(2) + " (" + discountRate + "%)";
  document.querySelector("#vat").innerHTML = "£" + vat.toFixed(2);
  document.querySelector("#total").innerHTML = "£" + total.toFixed(2);
}

// Initialize calculations
updateCalculations();

// Paper textures for background
const paperTextureList = [
  "url('/assets/images/paper-texture.webp')",
  "url('/assets/images/paperTexture.jpeg')",
  "url('assets/images/cardboard.webp')",
  "url('assets/images/colorful.webp')",
  "url('assets/images/envelope.webp')",
  "url('assets/images/envelope2.webp')",
  "url('assets/images/graffitti.webp')",
  "url('assets/images/holes.webp')",
  "url('assets/images/lined-paper.webp')",
  "url('assets/images/paper-texture2.webp')",
  "url('assets/images/paper-texture2.webp')",
  "url('assets/images/paper-texture3.webp')",
  "url('assets/images/receiptOld.webp')",
  "url('assets/images/stickytape.webp')",
];

let i = 0;

function changePaper() {
  "use strict";
  if (i < paperTextureList.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  document.getElementById("invoice-div").style.backgroundImage =
    paperTextureList[i];
}

function showPopup() {
  "use strict";
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

function hidePopup() {
  "use strict";
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";
}

function saveInvoiceAsImage() {
  "use strict";
  const invoiceDiv = document.getElementById("invoice-div");

  html2canvas(invoiceDiv, {
    useCORS: true, // Enable Cross-Origin Resource Sharing (CORS)
    allowTaint: false, // Do not allow tainting of the canvas
    logging: true, // Enable logging to help debug
  })
    .then(function (canvas) {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download =
        "Invoice_" + new Date().toISOString().slice(0, 10) + ".png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch(function (error) {
      console.error("Error saving invoice as image:", error);
    });
}

// Initialize EmailJS
(function () {
  "use strict";
  emailjs.init("2Ip3jr8nRZeJ-wIAK");
})();

function sendInvoice() {
  "use strict";
  const invoiceDiv = document.getElementById("invoice-div");

  const options = {
    margin: 1,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  document.fonts.ready.then(function () {
    html2canvas(invoiceDiv);

    html2pdf()
      .set(options)
      .from(invoiceDiv)
      .toPdf()
      .output("datauristring")
      .then(function (pdfBase64) {
        // Remove the data URI prefix to get a pure base64 string
        const pdfData = pdfBase64.split(",")[1];

        // Collect data for EmailJS
        const clientEmail = window.prompt("Enter the client's email:");
        if (!clientEmail) {
          window.alert("Email send canceled.");
          return;
        }

        const clientName = document
          .getElementById("clientName")
          .textContent.replace("client: ", "");
        const yourName = document
          .getElementById("designerName")
          .textContent.replace("designer: ", "");
        const invoiceId =
          document.querySelector(".invoiceIdNumber").textContent;

        const invoiceData = {
          client_email: clientEmail,
          client_name: clientName,
          your_name: yourName,
          invoice_id: invoiceId,
          pdf_attachment: pdfData, // Base64-encoded PDF
        };

        emailjs
          .send("service_nayof0a", "template_410k4yj", invoiceData)
          .then(function () {
            window.alert("Invoice sent successfully!");
          })
          .catch(function (error) {
            window.alert("Failed to send the invoice. Please try again.");
            console.error("Error sending email:", error);
          });
      });
  });
}
