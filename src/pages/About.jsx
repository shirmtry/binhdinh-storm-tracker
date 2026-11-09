export default function About() {
  return (
    <div className="container narrow">
      <h1>Giới thiệu</h1>
      <p className="updated">Cập nhật: 09/11/2026</p>

      <h2>Bối cảnh mùa mưa lũ 2026 tại Bình Định</h2>
      <p>
        Cao điểm mùa mưa lũ tháng 10–12/2026, Bình Định hứng chịu bão số 9 và bão số 10
        đổ bộ Quy Nhơn – Phù Cát – Hoài Nhơn. Lũ sông Kôn dâng cao uy hiếp Tuy Phước, An Nhơn;
        sạt lở xảy ra tại An Lão, Vĩnh Thạnh, Tây Sơn; đô thị Quy Nhơn ngập úng; bờ biển
        Nhơn Lý, Cát Tiến, Mỹ Thành xói lở; mất điện diện rộng 3–7 ngày và tàu cá gặp nạn
        khi biển động cấp 7–8.
      </p>
      <p>
        Bình Định Storm Tracker được xây dựng nhằm giúp bà con nắm nhanh đường đi bão,
        timeline 72 giờ, danh sách 20 điểm trú ẩn kiên cố và checklist chuẩn bị phòng bão.
        Toàn bộ dữ liệu trong ứng dụng là <strong>dữ liệu mô phỏng</strong>, phục vụ minh họa
        và giáo dục cộng đồng, không thay thế bản tin chính thức của Đài KTTV khu vực Nam Trung Bộ.
      </p>

      <div className="card contact-block">
        <h2>Liên hệ HTK – 0396241674</h2>
        <ul>
          <li>📞 Hotline: <a href="tel:0396241674">0396241674</a></li>
          <li>💬 Zalo: <a href="https://zalo.me/0396241674" target="_blank" rel="noreferrer">https://zalo.me/0396241674</a></li>
          <li>✉ Email: <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a></li>
          <li>🗓 Cập nhật: 09/11/2026</li>
        </ul>
      </div>

      <h2>Công nghệ</h2>
      <p>ReactJS 18 + Vite + React Router (SPA), bản đồ SVG thuần, dữ liệu JSON mô phỏng, triển khai trên Vercel. © 2026 HTK · 0396241674.</p>
    </div>
  )
}