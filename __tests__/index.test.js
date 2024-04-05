const { hello } = require("..");

test('hello function should return "hello"', () => {
  expect(hello()).toBe("Hello, GitHub Packaes!");
});
