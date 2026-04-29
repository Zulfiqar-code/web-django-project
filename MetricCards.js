export default function MetricCards() {
  const metrics = [
    { label: 'Total Tests', value: '148', sub: 'All time runs', color: 'var(--blue)' },
    { label: 'Passed', value: '122', sub: 'Last run: 18', color: '#22c55e' },
    { label: 'Failed', value: '26', sub: 'Needs review', color: '#ef4444' },
    { label: 'Success Rate', value: '82.4%', sub: '+3.1% vs last', color: 'var(--blue)' },
    { label: 'Avg Execution', value: '4.2 min', sub: 'Per test run', color: 'var(--text)', size: 18 },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 20 }}>
      {metrics.map(m => (
        <div key={m.label} className="vf-card" style={{ borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 6 }}>
            {m.label}
          </div>
          <div className="mono" style={{ fontSize: m.size || 22, fontWeight: 600, color: m.color }}>
            {m.value}
          </div>
          <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>{m.sub}</div>
        </div>
      ))}
    </div>
  )
}
