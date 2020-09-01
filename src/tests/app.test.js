import Game from '../modules/app'

describe('the game class functionality', () => {
  let game;
  let gameboard = ['', '', '', '', '', '', '', '', ''];
  const player1 = 'eric'
  const player2 = 'azeem'
  let counter = 0

  beforeEach(() => {
    game = new Game('eric', 'azeem', 'azeem', gameboard, counter);
  });

  test('it shoud switch the players', () => {
    expect(game.switchPlayer()).toBe('eric')
  })

})
