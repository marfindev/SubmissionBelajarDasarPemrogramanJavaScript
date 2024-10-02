// Fungsi untuk menghasilkan deret Fibonacci hingga elemen ke-n secara rekursif
function fibonacci(n) {
  if (n === 0) {
    return 0; // Basis kasus, Fibonacci ke-0 adalah 0
  }
  if (n === 1) {
    return 1; // Basis kasus, Fibonacci ke-1 adalah 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi: jumlah dua elemen sebelumnya
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
