import { sum } from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

// Uji kasus 1: Memastikan bahwa sum(1, 2) menghasilkan 3
test('sum(1, 2) should return 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

// Uji kasus 2: Memastikan bahwa sum(-1, 1) menghasilkan 0
test('sum(-1, 1) should return 0', () => {
  assert.strictEqual(sum(-1, 1), 0);
});

// Uji kasus 3: Memastikan bahwa sum(0, 0) menghasilkan 0
test('sum(0, 0) should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});
