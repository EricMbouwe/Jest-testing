const sum =  require('../modules/sum')

test('it makes the sum of two nbers', () => {
  expect(sum(4, 5)).toBe(9)
})