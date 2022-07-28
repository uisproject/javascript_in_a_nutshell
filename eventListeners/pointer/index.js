const box = document.querySelector(".box");

const positionDot = (e, dot) => {
  //   console.log(e);
  dot.style.width = `${e.width * 10}px`;
  dot.style.height = `${e.height * 10}px`;
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
};

box.addEventListener("pointerdown", (e) => {
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.backgroundColor = "red";
  dot.id = e.pointerId;
  positionDot(e, dot);
  box.append(dot);
});

box.addEventListener("pointermove", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;
  positionDot(e, dot);
});

box.addEventListener("pointercancel", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;
  positionDot(e, dot);
});

box.addEventListener("pointerup", (e) => {
  const dot = document.getElementById(e.pointerId);

  if (dot == null) return;
  dot.remove();
});
