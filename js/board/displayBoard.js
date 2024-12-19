export const displayBoard = (boardElements, board) => {
  for (let i = 0; i < 3; i++) {
    let cells = boardElements[i].children;
    for (let j = 0; j < 3; j++) {
      cells[j].innerText = board[i][j];
    }
  }
};
