const displayDiv = document.querySelector(".display-dt");
const DateButton = document.getElementById("btn");

DateButton.addEventListener("click", function () {
  let time = new Date();
  displayDiv.textContent = time;
});
