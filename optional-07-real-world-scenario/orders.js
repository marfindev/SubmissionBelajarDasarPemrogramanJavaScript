// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Menampung daftar pesanan
let orders = [];

/**
 * Fungsi untuk menambahkan pesanan ke dalam array orders
 * @param {string} customerName - Nama pelanggan
 * @param {Array} items - Daftar item yang dipesan (Array of objects dengan nama dan harga)
 */
function addOrder(customerName, items) {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const order = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu', // Status default saat pesanan baru dibuat
  };
  orders.push(order);
}

/**
 * Fungsi untuk memperbarui status pesanan berdasarkan id
 * @param {string} orderId - ID dari pesanan
 * @param {string} status - Status baru dari pesanan
 */
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

/**
 * Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus "Selesai"
 * @returns {number} - Total pendapatan dari pesanan yang selesai
 */
function calculateTotalRevenue() {
  return orders
    .filter((order) => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

/**
 * Fungsi untuk menghapus pesanan berdasarkan id
 * @param {string} id - ID dari pesanan yang ingin dihapus
 */
function deleteOrder(id) {
  orders = orders.filter((order) => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
