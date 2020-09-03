import Game from '../modules/app';

describe('the game class functionality', () => {
  let game;
  const gameboard = ['', '', '', '', '', '', '', '', ''];
  const counter = 0;

  beforeEach(() => {
    game = new Game('eric', 'azeem', 'azeem', gameboard, counter);
  });

  test('it shoud switch the players', () => {
    expect(game.switchPlayer()).toBe('eric');
  });

  test('it tests the winner method', () => {
    const spy = jest.spyOn(game, 'winner');
    const mockWinner = game.winner();

    expect(spy).toHaveBeenCalled();
    expect(mockWinner).toBe(undefined);

    spy.mockReset();
    spy.mockRestore();
  });

  test('it tests the markbox method', () => {
    const spy = jest.spyOn(game, 'markBox');
    const e = {
      target: {
        innerHTML: 'hello',
      },
    };
    const mockMarkBox = game.markBox(e);
    expect(spy).toHaveBeenCalled();
    expect(mockMarkBox).toBe(undefined);

    spy.mockReset();
    spy.mockRestore();
  });

  test('it tests the draw method', () => {
    const spy = jest.spyOn(game, 'draw');
    const mockDraw = game.draw();

    expect(spy).toHaveBeenCalled();
    expect(mockDraw).toBe(undefined);

    spy.mockReset();
    spy.mockRestore();
  });
});
