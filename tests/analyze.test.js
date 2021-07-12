/* eslint-disable no-undef */
import analyze from '../code/analyze';

test('Test wrong data type', () => {
  expect(
    () => {
      analyze.run(1);
    },
  ).toThrow();
});

test('Test missing argument', () => {
  expect(
    () => {
      analyze.run();
    },
  ).toThrow();
});

test('Test non numeric argument', () => {
  expect(
    () => {
      analyze.run([1, 8, 'test', 4, 2, 6]);
    },
  ).toThrow();
});

test('Test base functionaility', () => {
  expect(analyze.run([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});
