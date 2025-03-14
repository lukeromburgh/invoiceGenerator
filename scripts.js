// scripts.js

/* ======================================================
   Function: Update Button Text Dynamically (index.html)
   ====================================================== */
function updateButtonText() {
  const button = document.querySelector(".callToAction");
  // Prevent errors if the button element doesn't exist
  button.textContent =
    window.innerWidth <= 620
      ? "Start Free"
      : "Start Free — Create Your First Receipt in Seconds";
}

// Wait for DOM content to load before attaching event listeners
window.addEventListener("DOMContentLoaded", () => {
  updateButtonText();
  window.addEventListener("resize", updateButtonText);
});

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
  document.getElementById("designerName").innerHTML = "designer: " + name;
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
  document.getElementById("clientName").innerHTML = "client: " + newClient;
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
  document.getElementById("dueDate").innerHTML = "Payment Due: " + newDueDate;
}

function changeInvoiceID() {
  let invoiceID = prompt("Enter Invoice ID:");
  if (invoiceID) {
    document.querySelector(".invoiceIdNumber").innerHTML = invoiceID;
  }
}

function changeAccountName() {
  let accountName = prompt("Enter Account Name:");
  if (accountName) {
    document.querySelector(".accName").innerHTML = accountName;
  }
}

function changeSortCode() {
  let sortCode = prompt("Enter Sort Code (6 digits):");
  if (sortCode && /^\d{6}$/.test(sortCode)) {
    let formattedSortCode = `${sortCode.slice(0, 2)}-${sortCode.slice(
      2,
      4
    )}-${sortCode.slice(4)}`;
    document.querySelector(".sortCode").innerHTML = formattedSortCode;
  } else {
    alert("Please enter a valid 6-digit sort code.");
  }
}

function changeAccountNumber() {
  let accountNumber = prompt("Enter Account Number:");
  if (accountNumber) {
    document.querySelector(".accNo").innerHTML = accountNumber;
  }
}

let itemValues = [150, 3750, 75];
let discountRate = 0;

function changeName1() {
  let newItem = prompt("What would you like to call Item 1?");
  if (newItem) {
    document.querySelector(".item1Name").innerHTML = newItem + ":";
  }
}

function changeName2() {
  let newItem = prompt("What would you like to call Item 2?");
  if (newItem) {
    document.querySelector(".item2Name").innerHTML = newItem + ":";
  }
}

function changeName3() {
  let newItem = prompt("What would you like to call Item 3?");
  if (newItem) {
    document.querySelector(".item3Name").innerHTML = newItem + ":";
  }
}

function changeValue1() {
  let newValue = prompt("Enter the new value for Item 1:");
  if (!isNaN(newValue) && newValue !== null) {
    itemValues[0] = parseFloat(newValue);
    document.querySelector(".item1Value").innerHTML =
      "£" + itemValues[0].toFixed(2);
    updateCalculations();
  }
}

function changeValue2() {
  let newValue = prompt("Enter the new value for Item 2:");
  if (!isNaN(newValue) && newValue !== null) {
    itemValues[1] = parseFloat(newValue);
    document.querySelector(".item2Value").innerHTML =
      "£" + itemValues[1].toFixed(2);
    updateCalculations();
  }
}

function changeValue3() {
  let newValue = prompt("Enter the new value for Item 3:");
  if (!isNaN(newValue) && newValue !== null) {
    itemValues[2] = parseFloat(newValue);
    document.querySelector(".item3Value").innerHTML =
      "£" + itemValues[2].toFixed(2);
    updateCalculations();
  }
}

function changeDiscount() {
  let newDiscount = prompt("Enter the discount rate (0-99)%:");
  if (!isNaN(newDiscount) && newDiscount >= 0 && newDiscount <= 99) {
    discountRate = parseFloat(newDiscount);
    updateCalculations();
  } else {
    alert("Please enter a valid discount rate between 0 and 99.");
  }
}

function updateCalculations() {
  const subtotal = itemValues.reduce((acc, value) => acc + value, 0);
  const discount = (subtotal * discountRate) / 100;
  const vat = (subtotal - discount) * 0.14;
  const total = subtotal - discount + vat;

  document.querySelector("#subtotal").innerHTML = "£" + subtotal.toFixed(2);
  document.querySelector("#discount").innerHTML = `£${discount.toFixed(
    2
  )} (${discountRate}%)`;
  document.querySelector("#vat").innerHTML = "£" + vat.toFixed(2);
  document.querySelector("#total").innerHTML = "£" + total.toFixed(2);
}

updateCalculations();

const paperTextureList = [
  "url('images/paper-texture.webp')",
  "url('images/paperTexture.jpeg')",
  "url('images/cardboard.webp')",
  "url('images/colorful.webp')",
  "url('images/envelope.webp')",
  "url('images/envelope2.webp')",
  "url('images/graffitti.webp')",
  "url('images/holes.webp')",
  "url('images/lined-paper.webp')",
  "url('images/paper-texture2.webp')",
  "url('images/paper-texture2.webp')",
  "url('images/paper-texture3.webp')",
  "url('images/receiptOld.webp')",
  "url('images/stickytape.webp')",
];

let i = 0;

function changePaper() {
  if (i < paperTextureList.length) {
    i += 1;
    document.getElementById("invoice-div").style.backgroundImage =
      paperTextureList[i];
  } else {
    i = 0;
    document.getElementById("invoice-div").style.backgroundImage =
      paperTextureList[i];
  }
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup-overlay").style.display = "none";
}

function saveInvoiceAsImage() {
  const invoiceDiv = document.getElementById("invoice-div");

  html2canvas(invoiceDiv, {
    useCORS: true, // Enable Cross-Origin Resource Sharing (CORS)
    allowTaint: false, // Do not allow tainting of the canvas (important for image security)
    logging: true, // Enable logging to help debug
  })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `Invoice_${new Date().toISOString().slice(0, 10)}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error("Error saving invoice as image:", error);
    });
}

(function () {
  emailjs.init("2Ip3jr8nRZeJ-wIAK");
})();

function sendInvoice() {
  const invoiceDiv = document.getElementById("invoice-div");

  const options = {
    margin: 1,
    filename: "invoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  document.fonts.ready.then(() => {
    html2canvas(invoiceDiv);
    function changeName() {
      let name = prompt("What is your name?");
      document.getElementById("designerName").innerHTML = "designer: " + name;
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
      document.getElementById("clientName").innerHTML = "client: " + newClient;
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
        document.querySelector(".invoiceIdNumber").innerHTML = invoiceID;
      }
    }

    function changeAccountName() {
      let accountName = prompt("Enter Account Name:");
      if (accountName) {
        document.querySelector(".accName").innerHTML = accountName;
      }
    }

    function changeSortCode() {
      let sortCode = prompt("Enter Sort Code (6 digits):");
      if (sortCode && /^\d{6}$/.test(sortCode)) {
        let formattedSortCode = `${sortCode.slice(0, 2)}-${sortCode.slice(
          2,
          4
        )}-${sortCode.slice(4)}`;
        document.querySelector(".sortCode").innerHTML = formattedSortCode;
      } else {
        alert("Please enter a valid 6-digit sort code.");
      }
    }

    function changeAccountNumber() {
      let accountNumber = prompt("Enter Account Number:");
      if (accountNumber) {
        document.querySelector(".accNo").innerHTML = accountNumber;
      }
    }

    let itemValues = [150, 3750, 75];
    let discountRate = 0;

    function changeName1() {
      let newItem = prompt("What would you like to call Item 1?");
      if (newItem) {
        document.querySelector(".item1Name").innerHTML = newItem + ":";
      }
    }

    function changeName2() {
      let newItem = prompt("What would you like to call Item 2?");
      if (newItem) {
        document.querySelector(".item2Name").innerHTML = newItem + ":";
      }
    }

    function changeName3() {
      let newItem = prompt("What would you like to call Item 3?");
      if (newItem) {
        document.querySelector(".item3Name").innerHTML = newItem + ":";
      }
    }

    function changeValue1() {
      let newValue = prompt("Enter the new value for Item 1:");
      if (!isNaN(newValue) && newValue !== null) {
        itemValues[0] = parseFloat(newValue);
        document.querySelector(".item1Value").innerHTML =
          "£" + itemValues[0].toFixed(2);
        updateCalculations();
      }
    }

    function changeValue2() {
      let newValue = prompt("Enter the new value for Item 2:");
      if (!isNaN(newValue) && newValue !== null) {
        itemValues[1] = parseFloat(newValue);
        document.querySelector(".item2Value").innerHTML =
          "£" + itemValues[1].toFixed(2);
        updateCalculations();
      }
    }

    function changeValue3() {
      let newValue = prompt("Enter the new value for Item 3:");
      if (!isNaN(newValue) && newValue !== null) {
        itemValues[2] = parseFloat(newValue);
        document.querySelector(".item3Value").innerHTML =
          "£" + itemValues[2].toFixed(2);
        updateCalculations();
      }
    }

    function changeDiscount() {
      let newDiscount = prompt("Enter the discount rate (0-99)%:");
      if (!isNaN(newDiscount) && newDiscount >= 0 && newDiscount <= 99) {
        discountRate = parseFloat(newDiscount);
        updateCalculations();
      } else {
        alert("Please enter a valid discount rate between 0 and 99.");
      }
    }

    function updateCalculations() {
      const subtotal = itemValues.reduce((acc, value) => acc + value, 0);
      const discount = (subtotal * discountRate) / 100;
      const vat = (subtotal - discount) * 0.14;
      const total = subtotal - discount + vat;

      document.querySelector("#subtotal").innerHTML = "£" + subtotal.toFixed(2);
      document.querySelector("#discount").innerHTML = `£${discount.toFixed(
        2
      )} (${discountRate}%)`;
      document.querySelector("#vat").innerHTML = "£" + vat.toFixed(2);
      document.querySelector("#total").innerHTML = "£" + total.toFixed(2);
    }

    updateCalculations();

    const paperTextureList = [
      "url('images/paper-texture.webp')",
      "url('images/paperTexture.jpeg')",
      "url('images/cardboard.webp')",
      "url('images/colorful.webp')",
      "url('images/envelope.webp')",
      "url('images/envelope2.webp')",
      "url('images/graffitti.webp')",
      "url('images/holes.webp')",
      "url('images/lined-paper.webp')",
      "url('images/paper-texture2.webp')",
      "url('images/paper-texture2.webp')",
      "url('images/paper-texture3.webp')",
      "url('images/receiptOld.webp')",
      "url('images/stickytape.webp')",
    ];

    let i = 0;

    function changePaper() {
      if (i < paperTextureList.length) {
        i += 1;
        document.getElementById("invoice-div").style.backgroundImage =
          paperTextureList[i];
      } else {
        i = 0;
        document.getElementById("invoice-div").style.backgroundImage =
          paperTextureList[i];
      }
    }

    function showPopup() {
      document.getElementById("popup").style.display = "block";
      document.getElementById("popup-overlay").style.display = "block";
    }

    function hidePopup() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popup-overlay").style.display = "none";
    }

    function saveInvoiceAsImage() {
      const invoiceDiv = document.getElementById("invoice-div");

      html2canvas(invoiceDiv)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = `Invoice_${new Date()
            .toISOString()
            .slice(0, 10)}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error saving invoice as image:", error);
        });
    }

    (function () {
      emailjs.init("2Ip3jr8nRZeJ-wIAK"); // Replace with your EmailJS user ID
    })();

    function sendInvoice() {
      const invoiceDiv = document.getElementById("invoice-div");

      // Generate PDF
      const options = {
        margin: 1,
        filename: "invoice.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      document.fonts.ready.then(() => {
        html2canvas(invoiceDiv)
          .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 180, 240);
            pdf.save("invoice.pdf");
          })
          .catch((error) => {
            console.error("Error capturing the invoice div:", error);
          });
      });

      html2pdf()
        .set(options)
        .from(invoiceDiv)
        .toPdf()
        .output("datauristring")
        .then(function (pdfBase64) {
          // Remove the data URI prefix to get a pure base64 string
          const pdfData = pdfBase64.split(",")[1];

          // Collect data for EmailJS
          const invoiceData = {
            client_email: prompt("Enter the client's email:"),
            client_name: document
              .getElementById("clientName")
              .textContent.replace("client: ", ""),
            your_name: document
              .getElementById("designerName")
              .textContent.replace("designer: ", ""),
            invoice_id: document.querySelector(".invoiceIdNumber").textContent,
            pdf_attachment: pdfData, // Base64-encoded PDF
          };

          // Send email with PDF attachment
          emailjs
            .send("service_nayof0a", "template_410k4yj", invoiceData)
            .then((response) => {
              alert("Invoice sent successfully!");
            })
            .catch((error) => {
              alert("Failed to send the invoice. Please try again.");
              console.error("Error sending email:", error);
            });
        });
    }
  });
}
