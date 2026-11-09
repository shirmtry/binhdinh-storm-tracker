import { useMemo, useState } from 'react'
import data from '../data/mock.json'

const CITIES = [
  { name: 'Hoài Nhơn', x: 315, y: 155 },
  { name: 'Phù Cát', x: 300, y: 250 },
  { name: 'Quy Nhơn', x: 325, y: 405 },
  { name: 'Tuy Phước', x: 250, y: 420 },
  { name: 'An Nhơn', x: 200, y: 385 },
  { name: 'An Lão', x: 210, y: 100 },
  { name: 'Vĩnh Thạnh', x: 110, y: 160 },
  { name: 'Tây Sơn', x: 140, y: 300 },
]

function StormMap({ storms, activeStorm }) {
  const [selected, setSelected] = useState(null)
  const shown = activeStorm === 'all' ? storms : storms.filter((s) => s.id === activeStorm)

  return (
    <div className="map-wrap">
      <svg viewBox="0 0 800 520" role="img" aria-label="Bản đồ đường đi bão số 9 và 10 năm 2026 vào Bình Định">
        {/* Sea */}
        <rect x="0" y="0" width="800" height="520" fill="#0c2437" />
        {/* Land: Bình Định */}
        <path
          d="M0,0 L360,0 L345,60 L350,120 L330,160 L345,210 L330,260 L355,320 L340,360 L350,420 L320,470 L330,520 L0,520 Z"
          fill="#16324a"
          stroke="#2c5a7c"
          strokeWidth="2"
        />
        <text x="60" y="40" fill="#7fb3d5" fontSize="15" fontWeight="700">TỈNH BÌNH ĐỊNH</text>
        <text x="600" y="40" fill="#5d89a8" fontSize="15" fontStyle="italic">BIỂN ĐÔNG</text>

        {/* Sông Kôn */}
        <path d="M60,330 Q160,360 210,390 T340,430" fill="none" stroke="#3d7ea6" strokeWidth="3" opacity="0.7" />
        <text x="90" y="352" fill="#5d99c2" fontSize="11">Sông Kôn</text>

        {CITIES.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="4" fill="#9fc9e8" />
            <text x={c.x - 8} y={c.y - 9} fill="#c9e3f5" fontSize="12" textAnchor="end">{c.name}</text>
          </g>
        ))}

        {shown.map((storm) => {
          const pastPts = storm.track.filter((p) => p.status !== 'forecast')
          const fcPts = storm.track.filter((p) => p.status !== 'past')
          const toStr = (pts) => pts.map((p) => `${p.x},${p.y}`).join(' ')
          return (
            <g key={storm.id}>
              <polyline points={toStr(pastPts)} fill="none" stroke={storm.color} strokeWidth="3" />
              <polyline points={toStr(fcPts)} fill="none" stroke={storm.color} strokeWidth="3" strokeDasharray="8 6" opacity="0.85" />
              {storm.track.map((p, i) => (
                <g key={i} onClick={() => setSelected({ storm, p })} style={{ cursor: 'pointer' }}>
                  <circle cx={p.x} cy={p.y} r={p.status === 'current' ? 11 : 6}
                    fill={p.status === 'forecast' ? 'transparent' : storm.color}
                    stroke={storm.color} strokeWidth="2" />
                  {p.status === 'current' && (
                    <circle cx={p.x} cy={p.y} r="18" fill="none" stroke={storm.color} strokeWidth="1.5" opacity="0.6">
                      <animate attributeName="r" values="14;24;14" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <title>{`${storm.name} · ${p.t} · gió ${p.wind} km/h`}</title>
                </g>
              ))}
            </g>
          )
        })}

        {/* Legend */}
        <g fontSize="12" fill="#c9e3f5">
          <rect x="590" y="440" width="200" height="70" rx="8" fill="#0a1c2b" stroke="#2c5a7c" />
          {storms.map((s, i) => (
            <g key={s.id}>
              <line x1="602" y1={460 + i * 22} x2="632" y2={460 + i * 22} stroke={s.color} strokeWidth="3" />
              <text x="640" y={464 + i * 22}>{s.name.split(' (')[0]}</text>
            </g>
          ))}
        </g>
      </svg>
      {selected && (
        <div className="map-info">
          <b style={{ color: selected.storm.color }}>{selected.storm.name}</b> — {selected.p.t}
          {' · '}Gió {selected.p.wind} km/h
          {' · '}{selected.p.status === 'past' ? 'Vị trí đã qua' : selected.p.status === 'current' ? 'Vị trí hiện tại' : 'Dự báo'}
          <button onClick={() => setSelected(null)} aria-label="Đóng">✕</button>
        </div>
      )}
      <p className="hint">Đường liền: vị trí đã qua · Đường đứt nét: dự báo · Nhấn vào điểm bão để xem chi tiết.</p>
    </div>
  )
}

function Timeline() {
  return (
    <ol className="timeline">
      {data.timeline.map((t, i) => (
        <li key={i} className={`tl-item tl-${t.level}`}>
          <div className="tl-head">
            <span className="tl-time">{t.time} · +{t.hour}h</span>
            <span className={`chip chip-${t.level}`}>Gió {t.wind} km/h</span>
          </div>
          <p>{t.event}</p>
        </li>
      ))}
    </ol>
  )
}

function Shelters() {
  const districts = useMemo(() => ['Tất cả', ...new Set(data.shelters.map((s) => s.district))], [])
  const [district, setDistrict] = useState('Tất cả')
  const list = district === 'Tất cả' ? data.shelters : data.shelters.filter((s) => s.district === district)
  return (
    <div>
      <div className="filter-bar">
        {districts.map((d) => (
          <button key={d} className={`filter-btn ${district === d ? 'active' : ''}`} onClick={() => setDistrict(d)}>
            {d}
          </button>
        ))}
      </div>
      <p className="hint">{list.length} điểm trú ẩn · Tổng sức chứa {list.reduce((a, s) => a + s.capacity, 0).toLocaleString('vi-VN')} người</p>
      <div className="shelter-grid">
        {list.map((s) => (
          <div key={s.id} className="card shelter">
            <div className="shelter-top">
              <h4>{s.name}</h4>
              <span className={`chip ${s.status === 'Đang mở' ? 'chip-green' : 'chip-yellow'}`}>{s.status}</span>
            </div>
            <p className="muted">{s.address}</p>
            <p>👥 Sức chứa: <b>{s.capacity}</b> người · 📞 {s.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Checklist() {
  const allItems = data.checklist.flatMap((g) => g.items.map((it) => `${g.group}::${it}`))
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('htk-storm-checklist-2026') || '{}')
    } catch {
      return {}
    }
  })
  const toggle = (key) => {
    const next = { ...checked, [key]: !checked[key] }
    setChecked(next)
    try {
      localStorage.setItem('htk-storm-checklist-2026', JSON.stringify(next))
    } catch { /* bỏ qua nếu storage bị chặn */ }
  }
  const done = allItems.filter((k) => checked[k]).length
  return (
    <div>
      <div className="progress-wrap">
        <div className="progress-bar"><div className="progress-fill" style={{ width: `${(done / allItems.length) * 100}%` }} /></div>
        <span>{done}/{allItems.length} hoàn thành</span>
      </div>
      <div className="grid-3">
        {data.checklist.map((g) => (
          <div key={g.group} className="card">
            <h3>{g.group}</h3>
            <ul className="check-list">
              {g.items.map((it) => {
                const key = `${g.group}::${it}`
                return (
                  <li key={it}>
                    <label className={checked[key] ? 'done' : ''}>
                      <input type="checkbox" checked={!!checked[key]} onChange={() => toggle(key)} />
                      <span>{it}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      <p className="hint">Tiến độ được lưu trên trình duyệt của bạn (localStorage). Hotline hỗ trợ: <a href="tel:0396241674">HTK 0396241674</a>.</p>
    </div>
  )
}

export default function Tracker() {
  const [activeStorm, setActiveStorm] = useState('all')
  return (
    <div className="container">
      <h1>Trung tâm theo dõi bão Bình Định</h1>
      <p className="updated">Cập nhật: 09/11/2026 · <span className="badge-alert-inline">⚠ Gió giật cấp 13 — cảnh báo cấp độ rủi ro thiên tai cấp 3</span></p>
      <p className="mock-note">Dữ liệu mô phỏng – cập nhật 09/11/2026</p>

      <section>
        <h2>🗺 Đường đi bão số 9 &amp; số 10/2026</h2>
        <div className="filter-bar">
          <button className={`filter-btn ${activeStorm === 'all' ? 'active' : ''}`} onClick={() => setActiveStorm('all')}>Cả hai bão</button>
          {data.storms.map((s) => (
            <button key={s.id} className={`filter-btn ${activeStorm === s.id ? 'active' : ''}`} onClick={() => setActiveStorm(s.id)}>
              {s.name.split(' (')[0]} → {s.landfall}
            </button>
          ))}
        </div>
        <StormMap storms={data.storms} activeStorm={activeStorm} />
      </section>

      <section>
        <h2>⏱ Timeline 72 giờ tới (09/11 – 12/11/2026)</h2>
        <Timeline />
      </section>

      <section>
        <h2>🏫 20 điểm trú ẩn kiên cố</h2>
        <Shelters />
      </section>

      <section>
        <h2>✅ Checklist chuẩn bị bão</h2>
        <Checklist />
      </section>
    </div>
  )
}