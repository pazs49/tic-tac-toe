import { variables } from "./variables.js";
import {
  setState,
  addCellsClickListeners,
  addQuestionIntroSymbolClickListener,
  addHistoryButtonClickListener,
  addResetButtonClickListener,
  freezeBoard,
  showWinner,
  toggleHistory,
  clearBoardWithGhostMarks,
  anim,
  clearBoard,
} from "./board/board.js";
import { toggleReset } from "./board/reset.js";

export const main = (currState) => {
  switch (currState) {
    case "init":
      // resetting
      clearBoard(
        [
          variables.boardUpperPart,
          variables.boardMiddlePart,
          variables.boardLowerPart,
        ],
        variables.board
      );

      // Guard against adding another event listeners resulting in multiple calls!
      if (!variables.runOnce) {
        variables.runOnce = true;
        // console.log("Entered state init");
        addCellsClickListeners([
          variables.boardUpperPart,
          variables.boardMiddlePart,
          variables.boardLowerPart,
        ]);
        addQuestionIntroSymbolClickListener([
          variables.xSymbolEl,
          variables.oSymbolEl,
        ]);
        addHistoryButtonClickListener([
          variables.undoButtonEl,
          variables.redoButtonEl,
          variables.historyButtonEl,
        ]);
        addResetButtonClickListener(variables.resetContainerButtonEl);
      }
      setState("picking");
      break;
    case "picking":
      // console.log("Entered state picking");
      break;
    case "playing":
      // console.log("Entered state playing");
      anim.hideUp(variables.boardQuestionEl);
      break;
    case "winner":
      // console.log("Entered state winner");
      //
      let firstCell = variables.winningCells[0];
      let secondCell = variables.winningCells[1];
      let thirdCell = variables.winningCells[2];
      const calculateIndex = (rowIndex, colIndex) => {
        rowIndex *= 3;
        colIndex = colIndex;
        let index = rowIndex + colIndex;
        return index;
      };
      firstCell = calculateIndex(firstCell[0], firstCell[1]);
      secondCell = calculateIndex(secondCell[0], secondCell[1]);
      thirdCell = calculateIndex(thirdCell[0], thirdCell[1]);

      anim.beat(variables.cells[firstCell]);
      anim.beat(variables.cells[secondCell]);
      anim.beat(variables.cells[thirdCell]);
      //
      freezeBoard(
        [
          variables.boardUpperPart,
          variables.boardMiddlePart,
          variables.boardLowerPart,
        ],
        true
      );
      variables.redoButtonEl.style.opacity = ".5";
      showWinner(variables.winnerPopupEl, variables.winner);
      toggleHistory(true);
      toggleReset(variables.resetContainerEl, true);
      clearBoardWithGhostMarks(variables.board);
      break;
    case "draw":
      // console.log("Entered state draw");
      freezeBoard(
        [
          variables.boardUpperPart,
          variables.boardMiddlePart,
          variables.boardLowerPart,
        ],
        true
      );
      variables.redoButtonEl.style.opacity = ".5";
      showWinner(variables.winnerPopupEl, variables.winner);
      toggleHistory(true);
      toggleReset(variables.resetContainerEl, true);
      clearBoardWithGhostMarks(variables.board);
      break;
    default:
      break;
  }
};

main(variables.gameState);
// setInterval(() => main(variables.gameState), 100);

// setInterval(() => {
//   console.log("board", variables.board);
// }, 1000);
