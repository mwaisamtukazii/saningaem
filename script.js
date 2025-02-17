function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrContainer = document.getElementById("qr-code");
    qrContainer.innerHTML = ""; // Clear previous QR code
    new QRCode(qrContainer, text); // Generate QR code

    setTimeout(() => {
        document.getElementById("downloadQR").style.display = "block"; // Show download button
        showPopup(); // Show the popup message after QR code generation
    }, 500);
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qr-code canvas");
    if (qrCanvas) {
        let link = document.createElement("a");
        link.href = qrCanvas.toDataURL("image/png"); // Get QR code as image
        link.download = "qr-code.png"; // Set download filename
        link.click(); // Trigger download
    }
}

// Show the modal popup with "Made by Saninga" message
function showPopup() {
    const popup = document.getElementById("popupModal");
    popup.style.display = "block";
}

// Close the modal when the close button is clicked
document.getElementById("closePopup").onclick = function () {
    const popup = document.getElementById("popupModal");
    popup.style.display = "none";
}
