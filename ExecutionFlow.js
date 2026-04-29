'use client'

const STEPS = [
  { label: 'APK\nProcessing' },
  { label: 'UI\nCapture' },
  { label: 'Vector-\nization' },
  { label: 'Test\nGen' },
  { label: 'Exec-\nution' },
]

export function ExecutionFlow({ activeStep }) {
  return (
    <div className="vf-card">
      <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--muted)', marginBottom: 14 }}>
        Execution Flow
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {STEPS.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div className={`step-circle ${i < activeStep ? 'step-done' : i === activeStep ? 'step-active' : 'step-pending'}`}>
                {i < activeStep ? '✓' : i + 1}
              </div>
              <div className={`step-label ${i === activeStep ? 'step-active' : ''}`} style={{ whiteSpace: 'pre-line' }}>
                {step.label}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div style={{ height: 1.5, flex: 1, background: i < activeStep ? '#22c55e' : 'var(--border)', marginTop: 13 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function LiveLog({ logs }) {
  return (
    <div className="vf-card" style={{ flex: 1 }}>
      <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--muted)', marginBottom: 14 }}>
        Live Activity Stream
      </div>
      <div className="log-scroll">
        {logs.map((log, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, padding: '4px 0', borderBottom: '0.5px solid var(--border)', fontSize: 11 }}>
            <span style={{ color: 'var(--muted)', fontFamily: 'Space Mono, monospace', flexShrink: 0, fontSize: 10, paddingTop: 1 }}>
              {log.time}
            </span>
            <span style={{
              fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 3, flexShrink: 0, height: 'fit-content', marginTop: 1,
              background: log.level === 'INFO' || log.level === 'RAG' ? 'var(--blue-light)' : log.level === 'WARN' ? 'var(--amber-light)' : 'var(--green-light)',
              color: log.level === 'INFO' || log.level === 'RAG' ? 'var(--blue)' : log.level === 'WARN' ? 'var(--amber)' : 'var(--green)',
            }}>
              {log.level}
            </span>
            <span style={{ color: 'var(--text)', lineHeight: 1.4 }}>{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
