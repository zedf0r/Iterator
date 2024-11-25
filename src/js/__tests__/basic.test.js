import { Character, Team } from '../app';

test ('testing error name', () => {
  expect(() => new Character('R', 'Magician')).toThrow('Неправильный ввод имени')
})

test ('testing error type', () => {
  expect(() => new Character('Rows', 'Magic')).toThrow('Неправильный ввод типа')
})

test ('iterator team', () => {
  const team = new Team();
  const iterator = team[Symbol.iterator]();
  expect(iterator.next()).toEqual({ value: 'Wolf', done: false })
  expect(iterator.next()).toEqual({ value: 'Gendalf', done: false })
  expect(iterator.next()).toEqual({ value: undefined, done: true })
})