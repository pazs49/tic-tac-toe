import { variables } from "../variables.js";
import {
  pickSymbol,
  placeMarker,
  navigateHistory,
  reset,
  viewHistory,
} from "./board.js";

export const addCellsClickListeners = (boardElements) => {
  for (let i = 0; i < boardElements.length; i++) {
    const cells = boardElements[i].children;
    for (let j = 0; j < boardElements.length; j++) {
      cells[j].addEventListener("click", (event) => {
        placeMarker(variables.currentSymbol, event.currentTarget, i, j);
      });
    }
  }
};

export const addQuestionIntroSymbolClickListener = (els) => {
  for (let i = 0; i < els.length; i++) {
    els[i].addEventListener("click", (event) => {
      pickSymbol(event);
    });
  }
};

export const addHistoryButtonClickListener = (buttons) => {
  buttons[0].addEventListener("click", () => {
    navigateHistory(false);
  });
  buttons[1].addEventListener("click", () => {
    navigateHistory(true);
  });
  buttons[2].addEventListener("click", () => {
    viewHistory();
  });
};

export const addResetButtonClickListener = (button) => {
  button.addEventListener("click", () => {
    reset();
  });
};
