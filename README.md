# 🌡️ ESP32 IoT Dashboard

Dashboard hiện đại cho ESP32 với khả năng giám sát cảm biến theo thời gian thực, lưu trữ dữ liệu và cấu hình thiết bị.

![Dashboard](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Tính năng

### 📊 Dashboard Thời gian thực
- **Giám sát 4 cảm biến**: Nhiệt độ, Độ ẩm, Khí Gas (MQ2), Ánh sáng
- **Circular Gauge**: Hiển thị trực quan với màu sắc theo loại cảm biến
- **Sparkline Charts**: Biểu đồ xu hướng 15 điểm dữ liệu gần nhất
- **Trend Indicators**: Mũi tên chỉ hướng biến động (▲ tăng, ▼ giảm, — ổn định)
- **Click-to-expand**: Xem biểu đồ chi tiết cho từng cảm biến

### ⚠️ Hệ thống Cảnh báo
- **Toast Notifications**: Thông báo popup góc màn hình với màu sắc phân biệt mức độ
  - 🔴 **Đỏ**: Nhiệt độ > 45°C hoặc Gas > 150 PPM
  - 🟡 **Vàng**: Nhiệt độ > 35°C
- **Chống spam**: Không hiển thị trùng lặp cùng loại cảnh báo
- **Auto-dismiss**: Tự động tắt sau 5 giây, có thể đóng thủ công
- **Smart triggering**: Chỉ cảnh báo khi giá trị tăng và vượt ngưỡng

### 📁 Quản lý Dữ liệu
- **Local Storage**: Lưu trữ tối đa 1000 bản ghi gần nhất
- **DateTime Filtering**: Lọc theo ngày giờ chính xác (không chỉ ngày)
- **Pagination**: Phân trang 20 dòng/trang
- **Visual Warnings**: Highlight đỏ cho giá trị vượt ngưỡng
- **Export CSV**: Xuất dữ liệu ra file Excel
- **Clear Data**: Xóa toàn bộ lịch sử với xác nhận

### 📝 Nhật ký Hệ thống
- Ghi lại tất cả sự kiện: khởi động, mất kết nối, cảnh báo, chuyển chế độ
- Lưu trữ 100 event gần nhất
- Phân loại theo mức độ: error, warning, info, success
- Timestamp chi tiết

### ⚙️ Cấu hình Thiết bị
- **WiFi**:
  - Quét mạng WiFi khả dụng
  - Chọn SSID và nhập mật khẩu
- **Core IoT (MQTT)**:
  - Cấu hình Server, Port, Token
  - Chu kỳ gửi dữ liệu (giây)
- **Device ID**: Nhận diện thiết bị
- Lưu/Tải cấu hình từ ESP32

### 🎨 Giao diện
- **Dark/Light Mode**: Chuyển đổi giao diện sáng/tối
- **Đa ngôn ngữ**: Tiếng Việt & English
- **Responsive**: Tương thích mobile, tablet, desktop
- **Modern UI**: Glassmorphism, smooth animations, gradient colors

### 🔄 Chế độ hoạt động
- **Demo Mode**: Mô phỏng dữ liệu ngẫu nhiên (để test)
  - Giá trị dao động tự nhiên quanh mức hiện tại
  - Giới hạn trong phạm vi hợp lệ (Temp 0-100, Gas 0-500, Light 0-1000)
  - Nhiệt độ khởi tạo 30°C
- **Real Mode**: Kết nối thực tế với ESP32 qua API
  - Auto-revert về Demo nếu mất kết nối > 3s

## 🛠️ Tech Stack

### Frontend
- **React 18.2**: UI library
- **Vite 4.4**: Build tool & dev server
- **TailwindCSS 3.3**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Recharts 2.7**: Charting library

### Styling
- Custom animations với Tailwind
- Gradient colors cho mỗi cảm biến
- Responsive breakpoints (mobile-first)

### State Management
- React Hooks (useState, useEffect)
- LocalStorage cho persistence

## 📦 Cài đặt

### Yêu cầu
- Node.js >= 16.x
- npm hoặc yarn

### Các bước

1. **Clone repository**
```bash
git clone <repository-url>
cd esp32-dashboard
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

4. **Build production**
```bash
npm run build
```

Thư mục `dist/` chứa file build sẵn sàng deploy.

5. **Preview production build**
```bash
npm run preview
```

## 🚀 Sử dụng

### Kết nối với ESP32

1. **Upload firmware** lên ESP32 (xem thư mục firmware)
2. **Access Point Mode**: Nếu ESP32 chưa có WiFi:
   - SSID: `ESP32_Config`
   - Password: `configesp32`
   - Truy cập: `http://192.168.4.1`
3. **Cấu hình**:
   - Vào tab "Cấu hình thiết bị"
   - Quét và chọn WiFi
   - Nhập mật khẩu và thông tin Core IoT
   - Lưu lên thiết bị
4. **ESP32 khởi động lại** và kết nối WiFi
5. **Chuyển sang Real Mode** để nhận dữ liệu thực

### Demo Mode (không cần ESP32)

1. Mở dashboard
2. Để ở chế độ "CHẾ ĐỘ DEMO" (mặc định)
3. Xem dữ liệu mô phỏng tự động cập nhật

## 📂 Cấu trúc Project

```
esp32-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ChartView.jsx   # Full-screen chart detail
│   │   ├── CircularGauge.jsx  # Circular progress gauge
│   │   ├── SidebarItem.jsx    # Sidebar menu item
│   │   ├── Sparkline.jsx      # Mini trend chart
│   │   ├── StatCard.jsx       # Sensor card widget
│   │   ├── SystemLog.jsx      # Event log table
│   │   └── Toast.jsx          # Notification toast
│   ├── constants/
│   │   └── translations.js # i18n strings (vi/en)
│   ├── App.jsx            # Main application
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 API Endpoints (cho ESP32)

Dashboard mong đợi ESP32 cung cấp các endpoint sau:

### `GET /api/data`
Trả về dữ liệu cảm biến hiện tại:
```json
{
  "sensors": {
    "temp": 28.5,
    "hum": 65,
    "gas": 120,
    "light": 450
  }
}
```

## ⚙️ Cấu hình

### Ngưỡng cảnh báo
Trong `App.jsx`, bạn có thể điều chỉnh:
```javascript
// Nhiệt độ
if (newData.temp > 45) { /* Nguy hiểm */ }
else if (newData.temp > 35) { /* Cảnh báo */ }

// Gas
if (newData.gas > 150) { /* Cảnh báo */ }
```

### Giới hạn lưu trữ
```javascript
const MAX_HISTORY_LENGTH = 1000; // Số bản ghi tối đa
const itemsPerPage = 20;         // Dòng mỗi trang
```

### Chu kỳ polling
```javascript
const pollInterval = Math.max(1000, (configForm.sendInterval || 2) * 1000);
```

## 🎨 Tùy chỉnh Theme

Colors của từng cảm biến (trong `App.jsx`):
```javascript
<StatCard color="#ef4444" ... /> // Nhiệt độ - Đỏ
<StatCard color="#3b82f6" ... /> // Độ ẩm - Xanh dương
<StatCard color="#a855f7" ... /> // Gas - Tím
<StatCard color="#eab308" ... /> // Ánh sáng - Vàng
```

## 🔧 Troubleshooting

### Dashboard không nhận dữ liệu
- Kiểm tra ESP32 đã kết nối WiFi chưa
- Xác nhận IP và endpoint đúng
- Mở DevTools > Console để xem lỗi CORS/network
- Thử chuyển sang Demo Mode để test UI

### Toasts không tắt được
- Đã fix: Chống spam - không thêm toast trùng lặp
- Mỗi toast tự tắt sau 5s
- Có thể đóng thủ công bằng nút X

### Filter không hoạt động
- Đã fix: Sử dụng timestamp thay vì string parsing
- Xóa Local Storage nếu dữ liệu cũ bị lỗi

## 📝 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 🤝 Contributing

Mọi đóng góp đều được chào đón! 

1. Fork repo
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📧 Contact

Nếu có vấn đề hoặc câu hỏi, vui lòng:
- Tạo issue trên GitHub
- Email: [quangminh1245@gmail.com]

---

**Developed with ❤️ for ESP32 enthusiasts**
