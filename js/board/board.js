export { clearBoardWithGhostMarks } from "./ghostMarker.js";
export { toggleReset, reset } from "./reset.js";
export { navigateHistory, toggleHistory, viewHistory } from "./history.js";
export { setState } from "./gameState.js";
export { displayBoard } from "./displayBoard.js";
export { placeMarker } from "./placeMarker.js";
export { pickSymbol } from "./pickSymbol.js";
export { checkWinner } from "./checkWinner.js";
export { freezeBoard } from "./freezeBoard.js";
export { showWinner } from "./showWinner.js";
export { anim } from "./animationEffects.js";
export {
  addCellsClickListeners,
  addQuestionIntroSymbolClickListener,
  addHistoryButtonClickListener,
  addResetButtonClickListener,
} from "./eventListenersBoard.js";

export const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
