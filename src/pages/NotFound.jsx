import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container narrow center">
      <h1 className="big-404">404</h1>
      <h2>Không tìm thấy trang</h2>
      <p>Trang bạn tìm không tồn tại hoặc đã bị di dời do bão 🌀. Hãy quay về trang chủ hoặc trang theo dõi bão.</p>
      <div className="hero-actions center-actions">
        <Link className="btn btn-primary" to="/">Về trang chủ</Link>
        <Link className="btn btn-outline" to="/tracker">Theo dõi bão</Link>
      </div>
      <p className="contact-404">
        Cần hỗ trợ khẩn cấp? Hotline HTK: <a href="tel:0396241674">0396241674</a> ·
        Zalo: <a href="https://zalo.me/0396241674" target="_blank" rel="noreferrer">zalo.me/0396241674</a> ·
        Email: <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a>
      </p>
    </div>
  )
}