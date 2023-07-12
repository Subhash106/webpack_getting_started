import styles from "./index.css";

import _ from "lodash";

import "./clearButton.js";

import logo from "./asset/webpack_logo.png";

const heading = document.getElementById("heading");
const button = document.getElementById("update_heading");
const fruitList = document.getElementById("favorite_fruits");
const logoContainer = document.getElementById("logo");

button.addEventListener("click", function () {
  heading.textContent = "This is updated heading";

  const fruits = ["Apple", "Orange", "Banana"];
  logoContainer.src = logo;

  _.forEach(fruits, function (fruit) {
    const fruitElement = document.createElement("li");
    fruitElement.textContent = fruit;
    fruitElement.className = styles["list-item"];
    fruitList.appendChild(fruitElement);
  });
});

button.classList.add(styles.button);
