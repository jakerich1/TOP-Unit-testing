/* eslint-disable no-undef */
import reverseString from '../code/reverseString';

test('Initial test', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Test 1', () => {
  expect(reverseString('because')).toBe('esuaceb');
});

test('Test 2', () => {
  expect(reverseString('123amazing')).toBe('gnizama321');
});

test('Test 3', () => {
  expect(reverseString('anna')).toBe('anna');
});

test('Test 4', () => {
  expect(reverseString('jacob')).toBe('bocaj');
});
