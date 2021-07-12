/* eslint-disable no-undef */
import caesar from '../code/caesar';

test('Test wrong data type', () => {
  expect(
    () => {
      caesar.process(0, 1);
    },
  ).toThrow();
});

test('Test no argument', () => {
  expect(
    () => {
      caesar.process();
    },
  ).toThrow();
});

test('Test no shift value', () => {
  expect(
    () => {
      caesar.process('Test');
    },
  ).toThrow();
});

test('Test string shift value', () => {
  expect(
    () => {
      caesar.process('Test', 'test');
    },
  ).toThrow();
});

test('Test base functionaility', () => {
  expect(caesar.process('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Test with numbers as punctuation', () => {
  expect(caesar.process('defend the east wall of the 1st castle!', 1)).toBe('efgfoe uif fbtu xbmm pg uif 1tu dbtumf!');
});
