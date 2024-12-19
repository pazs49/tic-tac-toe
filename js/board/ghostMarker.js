import { variables } from "../variables.js";

export const fillBoardWithGhostMarks = (board) => {
  const cells = document.querySelectorAll(".board__cell");

  cells.forEach((cell) => {
    if (cell.innerHTML === "") {
      cell.innerText = variables.currentSymbol;
      cell.style.opacity = ".7";
      cell.style.fontSize = "2rem";
    } else {
      cell.style.fontSize = "7rem";
      cell.style.opacity = "1";
    }
  });
};

export const clearBoardWithGhostMarks = (board) => {
  const cells = document.querySelectorAll(".board__cell");

  cells.forEach((cell) => {
    if (cell.style.fontSize === "2rem") {
      cell.innerHTML = "";
      cell.style.opacity = "1";
    }
  });
};
