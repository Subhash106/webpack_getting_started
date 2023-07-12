import _ from "lodash";

const heading = document.getElementById("heading");
const button = document.getElementById("update_heading");
const fruitList = document.getElementById("favorite_fruits");

button.addEventListener("click", function () {
  heading.textContent = "This is updated heading";

  const fruits = ["Apple", "Orange", "Banana"];

  _.forEach(fruits, function (fruit) {
    const fruitElement = document.createElement("li");
    fruitElement.textContent = fruit;
    fruitList.appendChild(fruitElement);
  });
});
