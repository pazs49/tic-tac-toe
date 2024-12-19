import { variables } from "../variables.js";
import { main } from "../app.js";

export const setState = (state) => {
  variables.gameState = state;
  main(state);
};
