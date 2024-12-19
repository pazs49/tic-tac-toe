import { board } from "./board/board.js";

export const variables = {
  runOnce: false,
  gameState: "init",
  currentSymbol: "",
  moveCount: 0,
  moveLog: [], //rowIndex colIndex symbol
  redoCount: 0,
  winner: "",
  winningCells: [],
  //
  board,
  //
  boardQuestionEl: document.querySelector(".question-intro"),
  xSymbolEl: document.querySelector(".question-intro__x"),
  oSymbolEl: document.querySelector(".question-intro__o"),
  //
  undoButtonEl: document.querySelector(".history__undo-button"),
  redoButtonEl: document.querySelector(".history__redo-button"),
  historyButtonEl: document.querySelector(".history__history-button"),
  //
  cells: document.querySelectorAll(".board__cell"),
  boardUpperPart: document.querySelector(".board__upper-part"),
  boardMiddlePart: document.querySelector(".board__middle-part"),
  boardLowerPart: document.querySelector(".board__lower-part"),
  //
  winnerPopupEl: document.querySelector(".winner-popup"),
  //
  historyButtonsEl: document.querySelector(".history__buttons"),
  //
  resetContainerEl: document.querySelector(".reset-container"),
  resetContainerButtonEl: document.querySelector(".reset-container__button"),
  //
  historyMovesContainerEl: document.querySelector(".history-moves-container"),
  historyMovesContainerUlEl: document.querySelector(
    ".history-moves-container__ol"
  ),
};
