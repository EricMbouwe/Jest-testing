import Game from '../modules/app'
import displayController from '../modules/dom';

describe('the game class functionality', () => {
  let game;
  let gameboard = ['', '', '', '', '', '', '', '', ''];
  const player1 = 'eric'
  const player2 = 'azeem'
  let counter = 0
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  beforeEach(() => {
    game = new Game('eric', 'azeem', 'azeem', gameboard, counter);
  });

  test('it shoud switch the players', () => {
    expect(game.switchPlayer()).toBe('eric')
  })

  test('it should return the winner', () => {
    gameboard = 
    ['x', 'x', 'x', 
    'o', 'o', 'x', 
    'o', 'x', 'o'];
    game = new Game('eric', 'azeem', 'azeem', gameboard, counter);

    expect(game.winner()).toBe(1)
  })

  test('it should check if there is a draw', () => {
    gameboard = 
    ['x', 'o', 'x', 
    'o', 'o', 'x', 
    'o', 'x', 'o'];

    game = new Game('eric', 'azeem', 'azeem', gameboard, counter);

    expect(game.draw()).toBe(1)
  })

})
