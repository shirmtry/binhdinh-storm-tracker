# 🌀 Bình Định Storm Tracker — Theo dõi bão & trú ẩn

> Ứng dụng ReactJS (Vite) theo dõi bão số 9 & số 10/2026 và điểm trú ẩn tại Bình Định.
> **Cập nhật 09/11/2026** — cao điểm mùa mưa lũ 2026 miền Trung (tháng 10–12/2026).
> Tác giả: **HTK – 0396241674**.

## ⚠ Vấn đề (bối cảnh Bình Định, mùa mưa lũ 2026)

Tháng 11/2026, bão số 9 và bão số 10 liên tiếp đổ bộ dải bờ biển **Quy Nhơn – Phù Cát – Hoài Nhơn**,
gây gió giật cấp 12–13, sóng 5–7m, mất điện diện rộng 3–7 ngày. Lũ sông Kôn dâng cao đe dọa
Tuy Phước, An Nhơn; sạt lở tại An Lão, Vĩnh Thạnh, Tây Sơn; ngập úng đô thị Quy Nhơn;
xói lở bờ biển Nhơn Lý, Cát Tiến, Mỹ Thành; tàu cá gặp nạn khi biển động cấp 7–8.
Người dân cần một kênh tra cứu nhanh: đường đi bão, timeline 72h, điểm trú ẩn, checklist phòng bão.

## ✨ Tính năng

- **React SPA** với `react-router-dom`: Trang chủ, Theo dõi bão, Giới thiệu, 404.
- **Bản đồ SVG đường đi bão**: bão số 9 (→ Quy Nhơn) và bão số 10 (→ Phù Cát – Hoài Nhơn), phân biệt vị trí quá khứ / hiện tại (pulse) / dự báo, click xem chi tiết từng điểm.
- **Timeline 72 giờ** (09/11 – 12/11/2026), 13 mốc mỗi 6 giờ, màu theo mức cảnh báo đỏ/cam/vàng/xanh.
- **20 điểm trú ẩn** kiên cố, lọc theo huyện (Quy Nhơn, Phù Cát, Hoài Nhơn, Tuy Phước, An Nhơn, An Lão, Vĩnh Thạnh), sức chứa + trạng thái + điện thoại.
- **Checklist chuẩn bị bão** 3 giai đoạn, tiến độ lưu `localStorage`.
- Responsive 375px – 1440px, UI tiếng Việt.
- Toàn bộ mock data gắn nhãn **"Dữ liệu mô phỏng – cập nhật 09/11/2026"**.

## 🛠 Công nghệ

- ReactJS 18 + Vite 5
- react-router-dom 6 (SPA routing)
- SVG thuần (không thư viện bản đồ), JSON mock data
- Deploy: Vercel (static, rewrite SPA)

## 🚀 Cách chạy

```bash
npm install
npm run dev      # phát triển: http://localhost:5173
npm run build    # build production -> dist/
npm run preview  # xem thử bản build
```

## 🌐 Deploy

- Vercel production: **https://binhdinh-storm-tracker.vercel.app** (deploy ngày 09/11/2026, xem `deploy_url.txt`).
- Cấu hình `vercel.json`: build `npm run build`, output `dist`, rewrite mọi route → `/index.html`.

## 📞 Liên hệ HTK – 0396241674 – 09/11/2026

- 👤 Tác giả: **HTK**
- 📞 Hotline/Zalo: **0396241674** — [https://zalo.me/0396241674](https://zalo.me/0396241674)
- ✉ Email: **htk.contact@gmail.com**
- 🗓 Cập nhật: **09/11/2026**

---

© 2026 HTK · Hotline/Zalo: 0396241674 · Email: htk.contact@gmail.com

*Lưu ý: dữ liệu trong ứng dụng là mô phỏng phục vụ cộng đồng, không thay thế bản tin chính thức của Đài KTTV.*