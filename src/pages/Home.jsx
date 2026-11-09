import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <p className="badge-alert">⚠ Cảnh báo: Bão số 9 &amp; 10/2026 đang hoạt động trên Biển Đông</p>
        <h1>Theo dõi bão &amp; điểm trú ẩn Bình Định</h1>
        <p className="updated">Cập nhật: 09/11/2026</p>
        <p className="lead">
          Tháng 11/2026, Bình Định liên tiếp chịu bão số 9 và bão số 10 đổ bộ vào dải bờ biển
          Quy Nhơn – Phù Cát – Hoài Nhơn, gây gió giật cấp 12–13, sóng cao 5–7m và mất điện
          diện rộng 3–7 ngày. Lũ sông Kôn dâng cao đe dọa Tuy Phước, An Nhơn; sạt lở xuất hiện
          tại An Lão, Vĩnh Thạnh, Tây Sơn; đô thị Quy Nhơn ngập úng nặng. Bà con vùng ven biển
          Nhơn Lý, Cát Tiến, Mỹ Thành còn đối mặt xói lở bờ biển và tàu cá gặp nạn khi biển động
          cấp 7–8. Ứng dụng này giúp người dân theo dõi đường đi bão, lịch trình 72 giờ,
          tra cứu 20 điểm trú ẩn kiên cố và chuẩn bị phòng bão đúng cách.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/tracker">🌀 Xem đường đi bão ngay</Link>
          <a className="btn btn-outline" href="tel:0396241674">📞 Hotline HTK 0396241674</a>
        </div>
      </section>

      <section className="grid-4 stats">
        <div className="card stat"><b>2</b><span>Cơn bão đang theo dõi (số 9, 10)</span></div>
        <div className="card stat"><b>20</b><span>Điểm trú ẩn kiên cố toàn tỉnh</span></div>
        <div className="card stat"><b>72h</b><span>Timeline dự báo chi tiết</span></div>
        <div className="card stat"><b>Cấp 13</b><span>Gió giật mạnh nhất dự báo</span></div>
      </section>

      <section>
        <h2>Tính năng chính</h2>
        <div className="grid-3">
          <div className="card">
            <h3>🗺 Bản đồ đường đi bão (SVG)</h3>
            <p>Đường đi bão số 9 hướng Quy Nhơn và bão số 10 hướng Phù Cát – Hoài Nhơn, phân biệt vị trí quá khứ, hiện tại và dự báo.</p>
          </div>
          <div className="card">
            <h3>⏱ Timeline 72 giờ</h3>
            <p>Diễn biến từng 6 giờ: đổ bộ, gió giật, ngập úng Quy Nhơn, lũ sông Kôn, mất điện và sạt lở vùng núi.</p>
          </div>
          <div className="card">
            <h3>🏫 20 điểm trú ẩn + checklist</h3>
            <p>Tra cứu điểm trú ẩn theo huyện, sức chứa, trạng thái mở cửa; checklist chuẩn bị bão lưu ngay trên máy bạn.</p>
          </div>
        </div>
      </section>

      <p className="mock-note">Dữ liệu mô phỏng – cập nhật 09/11/2026</p>
    </div>
  )
}