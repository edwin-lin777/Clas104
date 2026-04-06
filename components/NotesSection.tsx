'use client'

import { useState } from 'react'
import { STUDY_NOTES, type StudyNote } from '@/lib/data2'

const COLOR_MAP = {
  gold:  { accent: 'var(--gold)',        badge: { bg: 'var(--gold-pale)', color: '#7a5010', border: 'rgba(201,147,58,0.3)' } },
  terra: { accent: 'var(--terracotta)',  badge: { bg: '#f5eae6', color: 'var(--terracotta)', border: 'rgba(155,74,42,0.2)' } },
  olive: { accent: 'var(--olive)',       badge: { bg: '#eef2e8', color: 'var(--olive)', border: 'rgba(74,92,42,0.2)' } },
  slate: { accent: 'var(--slate)',       badge: { bg: '#e8ecf0', color: 'var(--slate)', border: 'rgba(42,53,69,0.2)' } },
}

export default function NotesSection() {
  const [active, setActive] = useState<StudyNote>(STUDY_NOTES[0])

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Module Notes
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          Comprehensive study notes per module — overview, key points, exam focus, and connections to other parts of the course.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 16, alignItems: 'start' }}>
        {/* Module list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 24 }}>
          {STUDY_NOTES.map(note => {
            const cm = COLOR_MAP[note.color]
            const isActive = active.moduleCode === note.moduleCode
            return (
              <button
                key={note.moduleCode}
                onClick={() => setActive(note)}
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  border: `1px solid ${isActive ? 'var(--border-strong)' : 'var(--border)'}`,
                  borderRadius: 2,
                  background: isActive ? 'white' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  borderLeft: isActive ? `3px solid ${cm.accent}` : '1px solid var(--border)',
                  boxShadow: isActive ? '0 2px 8px rgba(26,21,16,0.06)' : 'none',
                }}
              >
                <div style={{ fontSize: 10, color: cm.accent, fontWeight: 500, letterSpacing: '0.06em', marginBottom: 2, fontFamily: 'DM Mono, monospace' }}>
                  {note.moduleCode}
                </div>
                <div style={{
                  fontSize: 12,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--ink)' : 'var(--ink-muted)',
                  lineHeight: 1.3,
                }}>
                  {note.module}
                </div>
              </button>
            )
          })}
        </div>

        {/* Note detail */}
        <NoteDetail note={active} />
      </div>
    </div>
  )
}

function NoteDetail({ note }: { note: StudyNote }) {
  const cm = COLOR_MAP[note.color]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, borderTop: `3px solid ${cm.accent}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span style={{
            padding: '2px 8px',
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.08em',
            background: cm.badge.bg,
            color: cm.badge.color,
            border: `1px solid ${cm.badge.border}`,
            borderRadius: 1,
            textTransform: 'uppercase',
            fontFamily: 'DM Mono, monospace',
          }}>
            Module {note.moduleCode}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500, color: 'var(--ink)', margin: '0 0 10px' }}>
          {note.module}
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.75, margin: 0 }}>
          {note.overview}
        </p>
      </div>

      {/* Key points */}
      <div style={{ padding: '18px 22px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 14 }}>
          Key Points
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {note.keyPoints.map((point, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{
                flexShrink: 0,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: cm.badge.bg,
                border: `1px solid ${cm.badge.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 500,
                color: cm.badge.color,
                fontFamily: 'DM Mono, monospace',
                marginTop: 2,
              }}>
                {i + 1}
              </div>
              <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0 }}>
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Exam focus */}
      <div style={{ padding: '18px 22px', background: 'var(--gold-pale)', border: '1px solid rgba(201,147,58,0.3)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7a5010', fontWeight: 500, marginBottom: 12 }}>
          Exam Focus
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {note.examFocus.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, color: 'var(--gold)', fontSize: 14, marginTop: 1 }}>→</span>
              <span style={{ fontSize: 13, color: '#6a4808', lineHeight: 1.65 }}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connections */}
      <div style={{ padding: '18px 22px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>
          Connections to Other Modules
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {note.connections.map((c, i) => (
            <div key={i} style={{
              padding: '8px 12px',
              background: 'var(--parchment)',
              border: '1px solid var(--border)',
              borderRadius: 2,
              borderLeft: `2px solid ${cm.accent}`,
              fontSize: 13,
              color: 'var(--ink-muted)',
              lineHeight: 1.55,
            }}>
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
