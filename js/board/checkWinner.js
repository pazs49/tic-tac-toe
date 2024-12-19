import { variables } from "../variables.js";
import { anim } from "./animationEffects.js";

export const checkWinner = (board, moveCount) => {
  //Horizontal
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] != "" &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      variables.winningCells.push([i, 0]);
      variables.winningCells.push([i, 1]);
      variables.winningCells.push([i, 2]);
      // console.log(variables.winningCells);
      return board[i][0];
    }
  }
  //Vertical
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] != "" &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      variables.winningCells.push([0, i]);
      variables.winningCells.push([1, i]);
      variables.winningCells.push([2, i]);
      // console.log(variables.winningCells);
      return board[0][i];
    }
  }
  //Diagonal
  if (
    board[1][1] != "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    // console.log("Winner is " + board[1][1]);
    variables.winningCells.push([0, 0]);
    variables.winningCells.push([1, 1]);
    variables.winningCells.push([2, 2]);
    // console.log(variables.winningCells);
    return board[1][1];
  } else if (
    board[1][1] != "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    variables.winningCells.push([0, 2]);
    variables.winningCells.push([1, 1]);
    variables.winningCells.push([2, 0]);
    // console.log(variables.winningCells);
    return board[1][1];
  }

  if (moveCount >= 9) {
    return "Draw";
  }
};
