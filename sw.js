// Đặt tên phiên bản bộ nhớ đệm
const CACHE_NAME = 'pickleball-tct70-v1';

// Danh sách các file cần lưu tạm để tải nhanh
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Cài đặt Service Worker và lưu tài nguyên
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Xử lý khi ứng dụng gửi yêu cầu lấy dữ liệu
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});