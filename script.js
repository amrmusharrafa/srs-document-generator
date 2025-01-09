// Function to export form data to PDF
function exportToPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add content to PDF
  let yPos = 10; // Vertical position for text

  // Title
  doc.setFontSize(18);
  doc.text("Software Requirement Specification (SRS) Document", 10, yPos);
  yPos += 10;

  // 1. Introduction
  doc.setFontSize(14);
  doc.text("1. Introduction", 10, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text(`Purpose: ${document.getElementById("purpose").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Intended Audience: ${document.getElementById("audience").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Product Scope: ${document.getElementById("scope").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Product Value: ${document.getElementById("value").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Intended Use: ${document.getElementById("use").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Definitions and Acronyms: ${document.getElementById("definitions").value}`, 10, yPos);
  yPos += 10;

  // 2. System and Functional Requirements
  doc.setFontSize(14);
  doc.text("2. System and Functional Requirements", 10, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text(`Functional Requirements: ${document.getElementById("functionalReqs").value}`, 10, yPos);
  yPos += 10;

  // 3. External Interface Requirements
  doc.setFontSize(14);
  doc.text("3. External Interface Requirements", 10, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text(`User Interfaces: ${document.getElementById("userInterfaces").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Hardware Interfaces: ${document.getElementById("hardwareInterfaces").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Software Interfaces: ${document.getElementById("softwareInterfaces").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Communication Interfaces: ${document.getElementById("communicationInterfaces").value}`, 10, yPos);
  yPos += 10;

  // 4. Non-Functional Requirements (NFRs)
  doc.setFontSize(14);
  doc.text("4. Non-Functional Requirements (NFRs)", 10, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text(`Security: ${document.getElementById("security").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Capacity: ${document.getElementById("capacity").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Compatibility: ${document.getElementById("compatibility").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Reliability and Availability: ${document.getElementById("reliability").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Scalability: ${document.getElementById("scalability").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Maintainability: ${document.getElementById("maintainability").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Usability: ${document.getElementById("usability").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Performance: ${document.getElementById("performance").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Regulatory and Environmental Requirements: ${document.getElementById("regulatory").value}`, 10, yPos);
  yPos += 10;

  // 5. Appendices
  doc.setFontSize(14);
  doc.text("5. Appendices", 10, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text(`Visuals and Diagrams: ${document.getElementById("visuals").value}`, 10, yPos);
  yPos += 10;
  doc.text(`Change Log: ${document.getElementById("changeLog").value}`, 10, yPos);
  yPos += 10;
  doc.text(`References: ${document.getElementById("references").value}`, 10, yPos);

  // Save the PDF
  doc.save("SRS_Document.pdf");
}

// Function to export form data to TXT
function exportToTXT() {
  let txtContent = "Software Requirement Specification (SRS) Document\n\n";

  // 1. Introduction
  txtContent += "1. Introduction\n";
  txtContent += `Purpose: ${document.getElementById("purpose").value}\n`;
  txtContent += `Intended Audience: ${document.getElementById("audience").value}\n`;
  txtContent += `Product Scope: ${document.getElementById("scope").value}\n`;
  txtContent += `Product Value: ${document.getElementById("value").value}\n`;
  txtContent += `Intended Use: ${document.getElementById("use").value}\n`;
  txtContent += `Definitions and Acronyms: ${document.getElementById("definitions").value}\n\n`;

  // 2. System and Functional Requirements
  txtContent += "2. System and Functional Requirements\n";
  txtContent += `Functional Requirements: ${document.getElementById("functionalReqs").value}\n\n`;

  // 3. External Interface Requirements
  txtContent += "3. External Interface Requirements\n";
  txtContent += `User Interfaces: ${document.getElementById("userInterfaces").value}\n`;
  txtContent += `Hardware Interfaces: ${document.getElementById("hardwareInterfaces").value}\n`;
  txtContent += `Software Interfaces: ${document.getElementById("softwareInterfaces").value}\n`;
  txtContent += `Communication Interfaces: ${document.getElementById("communicationInterfaces").value}\n\n`;

  // 4. Non-Functional Requirements (NFRs)
  txtContent += "4. Non-Functional Requirements (NFRs)\n";
  txtContent += `Security: ${document.getElementById("security").value}\n`;
  txtContent += `Capacity: ${document.getElementById("capacity").value}\n`;
  txtContent += `Compatibility: ${document.getElementById("compatibility").value}\n`;
  txtContent += `Reliability and Availability: ${document.getElementById("reliability").value}\n`;
  txtContent += `Scalability: ${document.getElementById("scalability").value}\n`;
  txtContent += `Maintainability: ${document.getElementById("maintainability").value}\n`;
  txtContent += `Usability: ${document.getElementById("usability").value}\n`;
  txtContent += `Performance: ${document.getElementById("performance").value}\n`;
  txtContent += `Regulatory and Environmental Requirements: ${document.getElementById("regulatory").value}\n\n`;

  // 5. Appendices
  txtContent += "5. Appendices\n";
  txtContent += `Visuals and Diagrams: ${document.getElementById("visuals").value}\n`;
  txtContent += `Change Log: ${document.getElementById("changeLog").value}\n`;
  txtContent += `References: ${document.getElementById("references").value}\n`;

  // Create a Blob and download the TXT file
  const blob = new Blob([txtContent], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "SRS_Document.txt";
  link.click();
}

// Function to show preview
function showPreview() {
  const previewContent = document.getElementById("previewContent");
  const modal = document.getElementById("previewModal");

  // Generate preview content
  let previewText = "Software Requirement Specification (SRS) Document\n\n";

  // 1. Introduction
  previewText += "1. Introduction\n";
  previewText += `Purpose: ${document.getElementById("purpose").value}\n`;
  previewText += `Intended Audience: ${document.getElementById("audience").value}\n`;
  previewText += `Product Scope: ${document.getElementById("scope").value}\n`;
  previewText += `Product Value: ${document.getElementById("value").value}\n`;
  previewText += `Intended Use: ${document.getElementById("use").value}\n`;
  previewText += `Definitions and Acronyms: ${document.getElementById("definitions").value}\n\n`;

  // 2. System and Functional Requirements
  previewText += "2. System and Functional Requirements\n";
  previewText += `Functional Requirements: ${document.getElementById("functionalReqs").value}\n\n`;

  // 3. External Interface Requirements
  previewText += "3. External Interface Requirements\n";
  previewText += `User Interfaces: ${document.getElementById("userInterfaces").value}\n`;
  previewText += `Hardware Interfaces: ${document.getElementById("hardwareInterfaces").value}\n`;
  previewText += `Software Interfaces: ${document.getElementById("softwareInterfaces").value}\n`;
  previewText += `Communication Interfaces: ${document.getElementById("communicationInterfaces").value}\n\n`;

  // 4. Non-Functional Requirements (NFRs)
  previewText += "4. Non-Functional Requirements (NFRs)\n";
  previewText += `Security: ${document.getElementById("security").value}\n`;
  previewText += `Capacity: ${document.getElementById("capacity").value}\n`;
  previewText += `Compatibility: ${document.getElementById("compatibility").value}\n`;
  previewText += `Reliability and Availability: ${document.getElementById("reliability").value}\n`;
  previewText += `Scalability: ${document.getElementById("scalability").value}\n`;
  previewText += `Maintainability: ${document.getElementById("maintainability").value}\n`;
  previewText += `Usability: ${document.getElementById("usability").value}\n`;
  previewText += `Performance: ${document.getElementById("performance").value}\n`;
  previewText += `Regulatory and Environmental Requirements: ${document.getElementById("regulatory").value}\n\n`;

  // 5. Appendices
  previewText += "5. Appendices\n";
  previewText += `Visuals and Diagrams: ${document.getElementById("visuals").value}\n`;
  previewText += `Change Log: ${document.getElementById("changeLog").value}\n`;
  previewText += `References: ${document.getElementById("references").value}\n`;

  // Insert preview content into modal
  previewContent.textContent = previewText;

  // Show the modal
  modal.style.display = "flex";
}

// Function to close preview
function closePreview() {
  const modal = document.getElementById("previewModal");
  modal.style.display = "none";
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}