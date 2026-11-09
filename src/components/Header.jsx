import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">
          <span className="brand-icon" aria-hidden="true">🌀</span>
          <span>
            <strong>Bình Định Storm Tracker</strong>
            <small>Theo dõi bão &amp; trú ẩn · 2026</small>
          </span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Trang chủ</NavLink>
          <NavLink to="/tracker">Theo dõi bão</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
          <a className="btn-contact" href="tel:0396241674">📞 Liên hệ HTK</a>
        </nav>
      </div>
    </header>
  )
}