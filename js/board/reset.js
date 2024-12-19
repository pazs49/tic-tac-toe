import { setState } from "./gameState.js";

export const reset = () => {
  setState("init");
};

export const toggleReset = (element, isEnabled) => {
  if (isEnabled) {
    element.classList.add("unhide-flex");
    element.classList.remove("hide");
  } else {
    element.classList.add("hide");
    element.classList.remove("unhide-flex");
  }
};
