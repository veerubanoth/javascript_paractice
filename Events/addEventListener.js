const greeting = document.querySelector("#greeting");
const daybtn = document.querySelector("#day");
const afternoonbtn = document.querySelector("#afternoon");
const eveningbtn = document.querySelector("#evening");
const nightbtn = document.querySelector("#night");
const morningbtn = document.querySelector("#morning");

morningbtn.addEventListener("click", function () {
  greeting.innerText = "Good Morning!";
});
afternoonbtn.addEventListener("click", function () {
  greeting.innerText = "Good Afternoon!";
});
daybtn.addEventListener("click", function () {
  greeting.innerText = "Have a Good Day!";
});
eveningbtn.addEventListener("click", function () {
  greeting.innerText = "Good evening!";
});
nightbtn.addEventListener("click", function () {
  greeting.innerText = "Good Night!";
});
morningbtn.addEventListener("click", function () {
  greeting.innerText = "Good Morning!";
});
