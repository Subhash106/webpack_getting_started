import styles from "./clearButton.scss";

const button = document.createElement("button");
button.innerText = "Clear";
button.classList.add(styles.button);
button.onclick = function () {
  console.log("Clear button clicked");
};
document.body.appendChild(button);
