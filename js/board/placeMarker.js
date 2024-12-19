import { variables } from "../variables.js";
import { anim, checkWinner, displayBoard, setState } from "./board.js";
import { fillBoardWithGhostMarks } from "./ghostMarker.js";

export const placeMarker = (symbol, cell, rowIndex, colIndex) => {
  if (variables.gameState !== "playing") setState("playing");

  // animation pop
  cell.classList.add("unclickable");
  anim.pop(cell);

  variables.moveCount++;
  if (symbol.toLowerCase() === "") symbol = "X"; // When no one picked, and just clicked the board
  if (symbol.toLowerCase() === "x") {
    variables.currentSymbol = "O";
  } else {
    variables.currentSymbol = "X";
  }
  variables.moveLog.push({ rowIndex, colIndex, symbol });
  variables.board[rowIndex][colIndex] = symbol;
  // console.log(variables.moveLog);
  displayBoard(
    [
      variables.boardUpperPart,
      variables.boardMiddlePart,
      variables.boardLowerPart,
    ],
    variables.board
  );
  fillBoardWithGhostMarks(variables.board);
  if (checkWinner(variables.board, variables.moveCount) === "X") {
    // console.log("X Winner");
    variables.winner = "X";
    setState("winner");
  } else if (checkWinner(variables.board, variables.moveCount) === "O") {
    // console.log("O Winner");
    variables.winner = "O";
    setState("winner");
  } else if (checkWinner(variables.board, variables.moveCount) === "Draw") {
    variables.winner = "Draw";
    // console.log("Draw");
    setState("draw");
  }
};
