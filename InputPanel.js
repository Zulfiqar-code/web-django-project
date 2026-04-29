'use client'
import { useState, useRef } from 'react'

export default function InputPanel({ onLog, onStepAdvance }) {
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef()

  const handleFile = (f) => {
    if (f && f.name.endsWith('.apk')) {
      setFile(f)
      onLog('INFO', `APK uploaded — ${f.name}`)
    } else {
      alert('Please upload a valid .apk file')
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  const handleGenerate = () => {
    if (!file) { alert('Please upload an APK file first.'); return }
    if (!desc.trim()) { alert('Please add an app description.'); return }
    onLog('AI', 'Analyzing description with LLM...')
    onLog('AI', 'Vectorizing screenshots with CLIP...')
    onLog('LLM', 'Generating Appium test cases...')
    onStepAdvance()
    setTimeout(() => {
      onLog('INFO', 'Test cases generated successfully')
      onStepAdvance()
    }, 1800)
  }

  const handleRegen = () => {
    if (!file) { alert('Upload an APK first.'); return }
    onLog('LLM', 'Regenerating test cases from updated APK...')
  }

  const handleView = () => {
    onLog('INFO', 'Loading stored test cases from ChromaDB...')
  }

  return (
    <div className="vf-card">
      <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.7px', color: 'var(--muted)', marginBottom: 14 }}>
        Input &amp; Project Setup
      </div>

      {/* Upload zone */}
      <div
        className={`upload-zone ${dragging ? 'dragging' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <div style={{ fontSize: 24, marginBottom: 8 }}>📦</div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>Upload APK File</div>
        <div style={{ fontSize: 11, color: 'var(--muted)' }}>Drag &amp; drop your .apk file here</div>
        <button className="btn-primary" style={{ marginTop: 10, fontSize: 12 }} onClick={(e) => { e.stopPropagation(); inputRef.current.click() }}>
          Browse Files
        </button>
        <input ref={inputRef} type="file" accept=".apk" style={{ display: 'none' }} onChange={e => handleFile(e.target.files[0])} />
      </div>

      {file && (
        <div style={{ marginTop: 8, padding: '8px 12px', background: 'var(--green-light)', borderRadius: 7, fontSize: 12, color: 'var(--green)' }}>
          ✓ {file.name} ({Math.round(file.size / 1024)} KB) ready to process
        </div>
      )}

      {/* Description */}
      <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 14, marginBottom: 5 }}>
        App Description (AI Context)
      </div>
      <textarea
        className="vf-input"
        rows={3}
        placeholder="e.g. This app has a login screen. User enters email and password, taps Submit, and reaches Dashboard..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
        style={{ resize: 'none' }}
      />

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
        <button className="btn-primary" onClick={handleGenerate}>Generate Test Cases</button>
        <button className="btn-blue-outline" onClick={handleRegen}>Regenerate</button>
        <button className="btn-outline" onClick={handleView}>View Test Cases</button>
      </div>

      {/* Progress bars */}
      <div style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
          <span>LLM Tests used</span><span>70%</span>
        </div>
        <div style={{ height: 6, background: 'var(--bg)', borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
          <div style={{ width: '70%', height: '100%', background: 'var(--blue)', borderRadius: 3 }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
          <span>RAG hit reuse</span>
          <span>LLM <b style={{ color: 'var(--blue)' }}>60%</b> / Reused <b style={{ color: '#22c55e' }}>40%</b></span>
        </div>
        <div style={{ display: 'flex', height: 6, borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: '60%', background: 'var(--blue)' }} />
          <div style={{ width: '40%', background: '#22c55e' }} />
        </div>
      </div>
    </div>
  )
}
