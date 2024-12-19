import { variables } from "../variables.js";

export const freezeBoard = (elements, isFreeze) => {
  if (isFreeze) {
    for (const element of elements) {
      element.classList.add("unclickable");
    }
  }
};
