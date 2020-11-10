const prompts = require('prompts');

const cleanBoard = [
  [' ',' ',' '],
  [' ',' ',' '],
  [' ',' ',' ']
];
let board = cleanBoard;



const startGame = () => {
  console.log('Welcome to CLI Tic Tac Toe!');
  renderBoard(board);
  nextMove('X');
};

const renderBoard = (board) => {
  console.log('\n');
  console.log('   | 1 | 2 | 3 |');
  console.log('---*---*---*---*');
  for (let i = 0; i < board.length; i++) {
    let row = ` ${i + 1} `;
    for (let j = 0; j < board[i].length; j++) {
      row += `| ${board[i][j]} `;
    }
    console.log(`${row}|`);
    console.log('---*---*---*---*');
  }
  console.log('\n');
};

const nextMove = (player) => {
  const response = (async () => {
    await prompts({
      type: 'text',
      name: 'nextMove',
      message: `Player ${player}, enter your next move's row and column, separated with 1 space.`,
      validate: nextMove => checkValidity(nextMove)
        ? `${nextMove} is not a valid move.`
        : updateBoard(nextMove)
    });
    console.log(response);
  })();
};

const checkValidity = (nextMove) => {
  let valid = true;
  const validMoves = [];
  return valid;
};

const updateBoard = (nextMove) => {
  //
};

startGame();