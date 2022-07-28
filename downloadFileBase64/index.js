const getPDFData = async () => {
  const URL = await fetch("pdfFile.json");
  const { data } = await URL.json();

  const decodedPdfContent = window.atob(data); // The atob() method decodes a string that has been encoded by the btoa() method.
  const arrayBuffer = new ArrayBuffer(decodedPdfContent.length); // The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. and set the length of the array buffer

  console.log(arrayBuffer);

  // convert to byteArray
  const int8Array = new Uint8Array(arrayBuffer); // set size of the array as large as the byteArray

  for (let i = 0; i < decodedPdfContent.length; i++) {
    int8Array[i] = decodedPdfContent.charCodeAt(i); // charCodeAt gives you the unicode of the letter
    // and storing every unicode letter into decodePdfContent
  }

  // storing into BLOB
  // BLOB stands for a “Binary Large Object,” a data type that stores binary data. Binary Large Objects (BLOBs) can be complex files like images or videos, unlike other data strings that only store letters and numbers. A BLOB will hold multimedia objects to add to a database; however, not all databases support BLOB storage.

  const blob = new Blob([int8Array], { type: "application/pdf" });
  console.log(blob);
  const url = window.URL.createObjectURL(blob);

  const PdfDownloadComponent = `<a href="${url}" target="_blank" download >Download this file</a>`;
  document.querySelector(".container").innerHTML = PdfDownloadComponent;
};

getPDFData();
