const errors = [
  { code: 'E001', screen: 'Login Screen', type: 'Login Timeout', desc: 'Session expired before element interaction' },
  { code: 'E012', screen: 'Checkout Flow', type: 'Not Interactable', desc: 'Button overlapped by modal layer' },
  { code: 'E018', screen: 'Profile Page', type: 'Screen Freeze', desc: 'App unresponsive after image upload' },
]

export default function ErrorPanel() {
  return (
    <div className="vf-card">
      <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--muted)', marginBottom: 14 }}>
        Failure Analysis &amp; Errors
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: 'var(--muted)', paddingBottom: 6, borderBottom: '0.5px solid var(--border)' }}>
        <div style={{ width: 8 }} />
        <div style={{ width: 60 }}>Code</div>
        <div style={{ flex: 1.2 }}>Screen / Test</div>
        <div style={{ flex: 1 }}>Error Type</div>
        <div style={{ flex: 2 }}>Explanation</div>
      </div>

      {errors.map(err => (
        <div key={err.code} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '0.5px solid var(--border)', fontSize: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
          <span style={{ padding: '2px 7px', borderRadius: 4, fontSize: 10, fontWeight: 700, fontFamily: 'Space Mono, monospace', background: 'var(--red-light)', color: 'var(--red)', width: 60 }}>
            {err.code}
          </span>
          <span style={{ flex: 1.2, fontWeight: 500 }}>{err.screen}</span>
          <span style={{ flex: 1, color: 'var(--muted)' }}>{err.type}</span>
          <span style={{ flex: 2, color: 'var(--muted)', fontSize: 11 }}>{err.desc}</span>
        </div>
      ))}
    </div>
  )
}
