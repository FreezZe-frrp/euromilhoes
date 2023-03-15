let numD = document.getElementById("numbers");
let starD = document.getElementById("stars");

function getNum() {
  let numbers = [];
  let stars = [];

  for (let i = 1; i <= 5; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
  }
  for (let i = 1; i <= 2; i++) {
    stars.push(Math.floor(Math.random() * 12) + 1);
  }

  let numStr = "";
  let starStr = "";

  for (let i = 0; i < 5; i++) {
    numStr += numbers[i] + ", ";
  }
  for (let i = 0; i < 2; i++) {
    starStr += stars[i] + ", ";
  }

  return {
    numbers: numStr,
    stars: starStr,
  };
}

document.querySelector("#btn").addEventListener("click", () => {
  numD.innerText = "numbers: " + getNum().numbers;
  starD.innerText = "Stars: " + getNum().stars;
});
