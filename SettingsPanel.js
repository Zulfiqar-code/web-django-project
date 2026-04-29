'use client'
import { useState } from 'react'
import { useTheme } from '@/lib/ThemeContext'
import { useAuth } from '@/lib/AuthContext'

function Toggle({ on, onToggle }) {
  return <div className={`toggle-track ${on ? 'on' : ''}`} onClick={onToggle} />
}

export default function SettingsPanel({ open, onClose }) {
  const { dark, toggleDark } = useTheme()
  const { logout } = useAuth()
  const [autoRegen, setAutoRegen] = useState(true)
  const [liveLog, setLiveLog] = useState(true)
  const [ragCache, setRagCache] = useState(true)
  const [emailNotif, setEmailNotif] = useState(false)

  if (!open) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 49 }} />
      <div style={{
        position: 'fixed', right: 0, top: 0, bottom: 0, width: 300,
        background: 'var(--card)', borderLeft: '0.5px solid var(--border)',
        zIndex: 50, padding: 24, overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Settings</span>
          <span onClick={onClose} style={{ cursor: 'pointer', color: 'var(--muted)', fontSize: 16 }}>✕</span>
        </div>

        {[
          { label: 'Dark Mode', desc: 'Switch to dark theme', val: dark, toggle: toggleDark },
          { label: 'Auto-Regenerate', desc: 'On new APK detection', val: autoRegen, toggle: () => setAutoRegen(p => !p) },
          { label: 'Live Activity Log', desc: 'Show real-time stream', val: liveLog, toggle: () => setLiveLog(p => !p) },
          { label: 'RAG Cache', desc: 'Reuse similar screens', val: ragCache, toggle: () => setRagCache(p => !p) },
          { label: 'Email Notifications', desc: 'On test completion', val: emailNotif, toggle: () => setEmailNotif(p => !p) },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '0.5px solid var(--border)' }}>
            <div>
              <div style={{ fontSize: 13 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{item.desc}</div>
            </div>
            <Toggle on={item.val} onToggle={item.toggle} />
          </div>
        ))}

        <button onClick={logout} className="btn-outline" style={{ width: '100%', marginTop: 24, color: 'var(--red)', borderColor: 'var(--red)' }}>
          Sign out
        </button>
      </div>
    </>
  )
}
