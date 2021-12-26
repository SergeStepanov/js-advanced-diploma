import Character from '../Character';
import Bowman from '../Bowman';

test('Запрет создания объектов Character', () => {
  expect(() => {
    const daemon = new Character();
    return daemon;
  }).toThrow();
});

test('Создаются унаследованные классы от Character', () => {
  const bowman = new Bowman();
  expect(bowman.defence).toBe(25);
});
