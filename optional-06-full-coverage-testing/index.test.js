// Mengimpor modul yang diperlukan dari node:test dan node:assert
import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Mengimpor fungsi sum dari berkas index.js

// Test case 1: Menguji skenario normal di mana kedua nilai adalah bilangan positif
test('Menjumlahkan dua bilangan positif', () => {
  assert.strictEqual(sum(3, 5), 8);
});

// Test case 2: Menguji skenario di mana salah satu nilai adalah negatif
test('Mengembalikan 0 jika salah satu angka negatif', () => {
  assert.strictEqual(sum(-3, 5), 0);
  assert.strictEqual(sum(3, -5), 0);
});

// Test case 3: Menguji skenario di mana kedua nilai adalah negatif
test('Mengembalikan 0 jika kedua angka negatif', () => {
  assert.strictEqual(sum(-3, -5), 0);
});

// Test case 4: Menguji skenario di mana salah satu nilai bukan angka
test('Mengembalikan 0 jika salah satu nilai bukan angka', () => {
  assert.strictEqual(sum('3', 5), 0);
  assert.strictEqual(sum(3, '5'), 0);
  assert.strictEqual(sum('3', '5'), 0);
});

// Test case 5: Menguji skenario di mana salah satu nilai adalah `null` atau `undefined`
test('Mengembalikan 0 jika salah satu nilai adalah null atau undefined', () => {
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(3, undefined), 0);
  assert.strictEqual(sum(null, undefined), 0);
});

// Test case 6: Menguji skenario dengan bilangan desimal
test('Menjumlahkan dua bilangan desimal', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});

// Test case 7: Menguji skenario dengan bilangan nol
test('Menjumlahkan dengan bilangan nol', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(3, 0), 3);
  assert.strictEqual(sum(0, 0), 0);
});
