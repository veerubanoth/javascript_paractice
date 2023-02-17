window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);
document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);
document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("DIV 2");
  },
  { once: true } //fire event once only
);
document.querySelector(".div1").addEventListener(
  "click",
  function (e) {
    console.log("DIV 1");
  },
  false
);
document.querySelector("#inner").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "Clicked!"));
  },
  false
);
