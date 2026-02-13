function print() {
  const printWindow = window.open("/print", "_blank");
  printWindow.onload = function () {
    printWindow.print();
    // Close the print window after a delay
    setTimeout(() => printWindow.close(), 500);
  };
}

function generatePDF() {
  // Use the same print dialog as the print button for better quality
  const printWindow = window.open("/print", "_blank");
  printWindow.onload = function () {
    printWindow.print();
    // Close the print window after a delay
    setTimeout(() => printWindow.close(), 500);
  };
}
