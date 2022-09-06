function sum(a, b) {
  return a + b;
}

test('sum 求和', () => {
  expect(sum(1, 1)).toBe(2);
});
