import { variables } from "../variables.js";
import { toggleHistory, toggleReset } from "./board.js";

export const displayBoard = (boardElements, board) => {
  for (let i = 0; i < 3; i++) {
    let cells = boardElements[i].children;
    for (let j = 0; j < 3; j++) {
      cells[j].innerText = board[i][j];
    }
  }
};

export const clearBoard = (boardElements, board) => {
  for (let i = 0; i < 3; i++) {
    let cells = boardElements[i].children;
    for (let j = 0; j < 3; j++) {
      cells[j].innerText = "";
      cells[j].classList.remove(...cells[j].classList);
      cells[j].classList.add("board__cell");
      cells[j].parentNode.classList.remove("unclickable");
    }
  }

  variables.historyMovesContainerUlEl.replaceChildren();

  toggleHistory(false);
  toggleReset(variables.resetContainerEl, false);

  variables.boardQuestionEl.classList.remove("hide-up");
  variables.currentSymbol = "";
  variables.redoCount = 0;
  variables.moveCount = 0;
  variables.winner = "";
  variables.moveLog = [];
  variables.winningCells = [];
  variables.cells.forEach((cell) => {
    cell.style.opacity = "1";
  });
  variables.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
};
