window.addEventListener("keydown", (event) => {
  console.log("button key is being pressed down");

  if (event.key === "Tab") {
    alert("tab is clicked");
  }
});

window.addEventListener("keyup", () => {
  console.log("button key is being released");
});
