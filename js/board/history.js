import { variables } from "../variables.js";
import { displayBoard } from "./displayBoard.js";

export const navigateHistory = (isForward) => {
  if (isForward) {
    if (variables.redoCount === 0) {
      return;
    }
    variables.redoCount--;
    // console.log("redo");
    variables.moveCount++;
    // console.log("move count:", variables.moveCount);
    // console.log(variables.moveLog[variables.moveCount - 1].rowIndex);
    variables.board[variables.moveLog[variables.moveCount - 1].rowIndex][
      variables.moveLog[variables.moveCount - 1].colIndex
    ] = variables.moveLog[variables.moveCount - 1].symbol;
  } else {
    if (variables.moveCount === 0) return;
    // console.log("undo");
    variables.redoCount++;
    variables.moveCount--;
    // console.log("move count:", variables.moveCount);
    variables.board[variables.moveLog[variables.moveCount].rowIndex][
      variables.moveLog[variables.moveCount].colIndex
    ] = "";
  }

  // console.log("moveCount length:", variables.moveCount.length);
  if (variables.redoCount === 0) {
    variables.redoButtonEl.style.opacity = ".5";
  } else {
    variables.redoButtonEl.style.opacity = "1";
  }

  if (variables.moveCount === 0) {
    variables.undoButtonEl.style.opacity = ".5";
  } else {
    variables.undoButtonEl.style.opacity = "1";
  }

  displayBoard(
    [
      variables.boardUpperPart,
      variables.boardMiddlePart,
      variables.boardLowerPart,
    ],
    variables.board
  );
};

export const viewHistory = () => {
  if (variables.historyMovesContainerUlEl.children.length === 0) {
    variables.historyMovesContainerEl.classList.add("unhide-flex");
    variables.historyMovesContainerEl.classList.remove("hide");

    variables.moveLog.forEach((move) => {
      // console.log("------");
      // console.log(move);
      // console.log("------");
      const moveLi = document.createElement("li");
      let rowMove = "";
      let colMove = "";
      if (move.rowIndex === 0) {
        rowMove = "Top";
      } else if (move.rowIndex === 1) {
        rowMove = "Middle";
      } else if (move.rowIndex === 2) {
        rowMove = "Bottom";
      }

      if (move.colIndex === 0) {
        colMove = "Left";
      } else if (move.colIndex === 1) {
        colMove = "Middle";
      } else if (move.colIndex === 2) {
        colMove = "Right";
      }

      moveLi.innerText = rowMove + " " + colMove + " " + move.symbol;
      document
        .querySelector(".history-moves-container__ol")
        .appendChild(moveLi);
    });
  }
};

export const toggleHistory = (isEnabled) => {
  if (isEnabled) {
    variables.historyButtonsEl.classList.add("unhide-flex");
    variables.historyButtonsEl.classList.remove("hide");
  }
};
