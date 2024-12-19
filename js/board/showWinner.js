export const showWinner = (element, winner) => {
  element.classList.add("unhide");
  if (winner === "X" || winner === "O") {
    element.firstElementChild.innerText = winner + " won!";
  } else {
    element.firstElementChild.innerText = "Draw!";
  }
  // console.log(element.firstChild);
  setTimeout(() => {
    element.classList.add("grow-animation");
  }, 1);
  setTimeout(() => {
    element.classList.remove("grow-animation");
    element.classList.remove("unhide");
    element.classList.add("hide");
  }, 1000);
};
