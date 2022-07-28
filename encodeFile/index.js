const inputFile = document.getElementById("inputFile");

inputFile.addEventListener("change", () => {
  const uploadedFile = inputFile.files;
  const fileToLoad = uploadedFile[0];
  if (uploadedFile.length <= 0) return;
  const fileReader = new FileReader();
  let base64;
  // Onload of file read the file content
  fileReader.onload = function (fileLoadedEvent) {
    base64 = fileLoadedEvent.target.result;
    // Print data in console
    console.log(base64);
  };
  // Convert data to base64
  fileReader.readAsDataURL(fileToLoad);
});
