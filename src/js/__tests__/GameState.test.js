import GameStateService from '../statefortest/GameStateService';
import GameState from '../statefortest/GameState';

jest.mock('../statefortest/GameState');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Хранение состояния загрузка', () => {
  const expected = '{"point":10,"maxPoint":10,"level":1,"currentTheme":"prairie","userPositions":[]}';
  GameState.mockReturnValue(expected);
  const received = GameStateService.load();
  expect(JSON.stringify(received)).toEqual(expected);
});

test('Хранение состояния ошибка', () => {
  const expected = '';
  GameState.mockReturnValue(expected);

  expect(() => GameStateService.load()).toThrow();
});
