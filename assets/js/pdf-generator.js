function print() {
  const baseurl = window.siteConfig?.baseurl || '';
  const printWindow = window.open(baseurl + "/print", "_blank");
  printWindow.onload = function () {
    printWindow.print();
    // Close the print window after a delay
    setTimeout(() => printWindow.close(), 500);
  };
}

function generatePDF() {
  // Use the browser's native print dialog for best quality
  // JavaScript PDF generators can't match the browser's rendering quality,
  // especially with complex layouts like the continuous sidebar background
  const baseurl = window.siteConfig?.baseurl || '';
  const printWindow = window.open(baseurl + "/print", "_blank");
  printWindow.onload = function () {
    printWindow.print();
    // Close the print window after a delay
    setTimeout(() => printWindow.close(), 500);
  };
}
