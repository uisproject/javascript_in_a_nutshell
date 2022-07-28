// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// grandparent.addEventListener(
//   "click",
//   (e) => {
//     console.log("grandparent1");
//     //so anywhere you click on grandparent, parent, or child, it will be executed
//   },
//   { capture: true }
// );

// // grandparent.addEventListener("click", (e) => {
// //   console.log("grandparent2");
// // });

// parent.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("parent");
// });

// child.addEventListener("click", (e) => {
//   console.log("child");
// });

// document.addEventListener("click", () => {
//   console.log("document");
// });

// if you notice,
// 1. when you click on granparent, it will be executed twice for grandparent1 and grandparent2
// 2. when you click on parent, it will be executed once for parent, twice on grandparent and once for document. this happens because behind the parent there grandchild and behind grandchild there is document, this is called bubbling.

// if you see there is capture in the event, it means it will be executed first before bubbling is executed. for example when you click on parent area the order would be
// grandparent1, parent, document.
// without capture it would be : parent, grandparent1, document.

// stop propagation means it will stop the event from bubbling up to the parent.

// Event Delegation
const addGlobalEventListener = (event, selector, callback) => {
  document.addEventListener(event, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
};

addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
