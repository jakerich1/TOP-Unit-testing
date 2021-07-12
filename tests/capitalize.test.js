/* eslint-disable no-undef */
import capitalize from '../code/capitalize';

test('Initial test', () => {
  expect(capitalize('test')).toBe('Test');
});

test('Test 1', () => {
  expect(capitalize('orange')).toBe('Orange');
});

test('Test 2', () => {
  expect(capitalize('12freedom')).toBe('12freedom');
});

test('Test 4', () => {
  expect(capitalize('HELP')).toBe('HELP');
});

test('Test 5', () => {
  expect(capitalize('fREEDOM123')).toBe('FREEDOM123');
});
