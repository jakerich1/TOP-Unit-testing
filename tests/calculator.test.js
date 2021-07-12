/* eslint-disable no-undef */
import calculate from '../code/calculator';

// Add tests
test('Initial test', () => {
  expect(calculate.add(1, 2)).toBe(3);
});

test('Test 2', () => {
  expect(calculate.add(-51, 2)).toBe(-51 + 2);
});

test('Test 3', () => {
  expect(calculate.add(1.5, 1.2)).toBe(2.7);
});

test('Test 4', () => {
  expect(calculate.add(-10, -10)).toBe(-20);
});

test('Test 5', () => {
  expect(
    () => {
      calculate.add('10', -10);
    },
  ).toThrow();
});

test('Test 6', () => {
  expect(
    () => {
      calculate.add(10, '10');
    },
  ).toThrow();
});

test('Test 7', () => {
  expect(
    () => {
      calculate.add(10);
    },
  ).toThrow();
});

// Subtract tests

// Multiply tests

// Divide tests
