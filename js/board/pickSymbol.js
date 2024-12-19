import { variables } from "../variables.js";
import { setState } from "./gameState.js";

export const pickSymbol = (event) => {
  if (event.currentTarget.innerText.toLowerCase() === "x") {
    variables.currentSymbol = "X";
  } else {
    variables.currentSymbol = "O";
  }

  setState("playing");
};
