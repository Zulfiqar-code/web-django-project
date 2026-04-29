'use client'
import { useAuth } from '@/lib/AuthContext'

const icons = [
  { icon: '⊞', label: 'Dashboard', active: true },
  { icon: '▤', label: 'Test Cases' },
  { icon: '◎', label: 'Reports' },
  { icon: '⟳', label: 'History' },
]

export default function Sidebar({ onSettings }) {
  const { user, logout } = useAuth()
  const initial = user?.name?.charAt(0).toUpperCase() || '?'

  return (
    <div style={{
      width: 56, background: 'var(--sidebar)', display: 'flex', flexDirection: 'column',
      alignItems: 'center', padding: '16px 0', gap: 8, flexShrink: 0, minHeight: '100vh'
    }}>
      <div className="mono" style={{
        fontSize: 11, color: '#fff', fontWeight: 700, letterSpacing: 2,
        writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginBottom: 16, padding: '8px 0'
      }}>VF</div>

      {icons.map((item) => (
        <div key={item.label} className={`sb-icon ${item.active ? 'active' : ''}`} title={item.label}>
          {item.icon}
        </div>
      ))}

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
        <div className="sb-icon" title="Settings" onClick={onSettings}>⚙</div>
        <div
          title={user?.name || 'Profile'}
          onClick={logout}
          style={{
            width: 32, height: 32, borderRadius: '50%', background: 'var(--blue)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 600, cursor: 'pointer'
          }}
        >{initial}</div>
      </div>
    </div>
  )
}
