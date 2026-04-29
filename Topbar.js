'use client'
import { useAuth } from '@/lib/AuthContext'
import { useTheme } from '@/lib/ThemeContext'

export default function Topbar({ onSettings }) {
  const { user } = useAuth()
  const { dark, toggleDark } = useTheme()
  const initial = user?.name?.charAt(0).toUpperCase() || '?'

  return (
    <div style={{
      background: 'var(--card)', borderBottom: '0.5px solid var(--border)',
      padding: '0 24px', height: 52, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="mono" style={{ fontSize: 15, fontWeight: 700, color: 'var(--blue)', letterSpacing: 1 }}>
          VeroFlow
        </span>
        <span className="pulse" style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span style={{ fontSize: 12, color: 'var(--muted)' }}>System active</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button onClick={toggleDark} style={{
          width: 32, height: 32, borderRadius: 8, border: '0.5px solid var(--border)',
          background: 'var(--card)', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 14
        }}>{dark ? '☀️' : '🌙'}</button>
        <button onClick={onSettings} style={{
          width: 32, height: 32, borderRadius: 8, border: '0.5px solid var(--border)',
          background: 'var(--card)', cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'var(--muted)'
        }}>⚙</button>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: 'var(--blue)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 600, cursor: 'pointer'
        }}>{initial}</div>
      </div>
    </div>
  )
}
