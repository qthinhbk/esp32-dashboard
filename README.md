# ESP32 Dashboard

Dashboard IoT hiện đại để giám sát và quản lý dữ liệu cảm biến ESP32 theo thời gian thực.

## 🚀 Chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Mở trình duyệt tại: `http://localhost:5173`

### 3. Build production

```bash
npm run build
```

## ✨ Tính năng chính

- 📊 **Giám sát real-time**: Nhiệt độ, độ ẩm, khí gas (MQ2), ánh sáng
- 📈 **Biểu đồ trực quan**: Sparkline charts và circular gauges
- 🔔 **Cảnh báo thông minh**: Toast notifications khi vượt ngưỡng
- 💾 **Lưu trữ dữ liệu**: LocalStorage (tối đa 100 bản ghi)
- 📁 **Xuất CSV**: Export dữ liệu sang Excel
- 🌓 **Dark/Light mode**: Giao diện tối & sáng
- 🌍 **Đa ngôn ngữ**: Tiếng Việt & English
- 📱 **Responsive**: Tối ưu cho mobile & desktop

## 🧪 Chế độ Demo

Dashboard tự động chạy ở **chế độ Demo** với dữ liệu mô phỏng nếu không kết nối được ESP32.

Để kết nối ESP32 thật:
1. Upload firmware ESP32 với API endpoint `/api/data`
2. Chuyển sang **CHẾ ĐỘ THỰC** trong dashboard

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Storage**: LocalStorage API

## 📂 Cấu trúc dự án

```
src/
├── components/        # React components
│   ├── StatCard.jsx   # Card hiển thị cảm biến
│   ├── Toast.jsx      # Thông báo
│   ├── Sparkline.jsx  # Biểu đồ mini
│   └── ...
├── constants/         # Translations, configs
└── App.jsx           # Main application
```

## 📝 License

MIT License
