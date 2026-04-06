'use client'

import { useState } from 'react'
import { THREE_UNDERWORLDS } from '@/lib/data2'

const SOURCE_COLORS = [
  { bg: '#e8ecf0',       color: 'var(--slate)',       border: 'rgba(42,53,69,0.25)',    accent: 'var(--slate)'       },
  { bg: 'var(--gold-pale)', color: '#7a5010',          border: 'rgba(201,147,58,0.3)',   accent: 'var(--gold)'        },
  { bg: '#f0edf8',       color: '#534AB7',             border: 'rgba(83,74,183,0.25)',   accent: '#534AB7'            },
]

const ROWS: { key: keyof typeof THREE_UNDERWORLDS[0]; label: string }[] = [
  { key: 'moral',      label: 'Moral System'       },
  { key: 'geography',  label: 'Geography'           },
  { key: 'punishment', label: 'Punishment'          },
  { key: 'reward',     label: 'Reward'              },
  { key: 'political',  label: 'Political Purpose'   },
  { key: 'notable',    label: 'Notable Detail'      },
  { key: 'tone',       label: 'Overall Tone'        },
]

export default function UnderworldSection() {
  const [view, setView] = useState<'compare' | 'detail'>('compare')
  const [selected, setSelected] = useState(0)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Three Underworlds
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          Homer, Vergil, and Plato each describe the afterlife very differently. Comparing them is a prime long-answer question.
        </p>
      </div>

      {/* Exam tip */}
      <div style={{ padding: '12px 16px', background: 'var(--gold-pale)', border: '1px solid rgba(201,147,58,0.3)', borderRadius: 2, marginBottom: 24, fontSize: 13, color: '#6a4808', lineHeight: 1.65 }}>
        <strong style={{ fontWeight: 500 }}>Exam tip: </strong>
        Know the progression — Homer (amoral, bleak) → Vergil (moral + political) → Plato (rational, reincarnation). Each represents a different era and purpose. Use specific details: the golden bough, Achilles's speech, Er's vision, the parade of Romans.
      </div>

      {/* View toggle */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
        {(['compare', 'detail'] as const).map(v => (
          <button key={v} onClick={() => setView(v)} style={{
            padding: '6px 16px', border: '1px solid var(--border-strong)', borderRadius: 2,
            background: view === v ? 'var(--ink)' : 'white',
            color: view === v ? 'var(--parchment)' : 'var(--ink-muted)',
            fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            fontWeight: view === v ? 500 : 400, transition: 'all 0.15s',
          }}>
            {v === 'compare' ? 'Side-by-Side' : 'Deep Dive'}
          </button>
        ))}
      </div>

      {view === 'compare' && (
        <div>
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '140px repeat(3, 1fr)', gap: 8, marginBottom: 8 }}>
            <div />
            {THREE_UNDERWORLDS.map((u, i) => {
              const c = SOURCE_COLORS[i]
              return (
                <div key={u.source} style={{ padding: '14px 16px', background: c.bg, border: `1px solid ${c.border}`, borderRadius: 2 }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.2, marginBottom: 3 }}>
                    {u.source}
                  </div>
                  <div style={{ fontSize: 11, color: c.color, fontWeight: 500 }}>{u.author}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)', fontFamily: 'DM Mono, monospace', marginTop: 2 }}>{u.date}</div>
                </div>
              )
            })}
          </div>

          {/* Rows */}
          {ROWS.map((row, ri) => (
            <div key={row.key} style={{
              display: 'grid',
              gridTemplateColumns: '140px repeat(3, 1fr)',
              gap: 8,
              marginBottom: 8,
            }}>
              {/* Row label */}
              <div style={{
                padding: '12px 14px',
                background: ri % 2 === 0 ? 'white' : 'var(--parchment)',
                border: '1px solid var(--border)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink-muted)', letterSpacing: '0.04em' }}>
                  {row.label}
                </span>
              </div>

              {/* Three sources */}
              {THREE_UNDERWORLDS.map((u, i) => {
                const c = SOURCE_COLORS[i]
                return (
                  <div key={u.source} style={{
                    padding: '12px 14px',
                    background: ri % 2 === 0 ? 'white' : 'var(--parchment)',
                    border: '1px solid var(--border)',
                    borderRadius: 2,
                    fontSize: 12,
                    color: 'var(--ink-muted)',
                    lineHeight: 1.65,
                    borderLeft: `3px solid ${c.accent}`,
                  }}>
                    {u[row.key]}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      )}

      {view === 'detail' && (
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            {THREE_UNDERWORLDS.map((u, i) => {
              const c = SOURCE_COLORS[i]
              return (
                <button key={i} onClick={() => setSelected(i)} style={{
                  flex: 1, padding: '12px 16px', border: `1px solid ${selected === i ? c.border : 'var(--border)'}`,
                  borderRadius: 2, background: selected === i ? c.bg : 'white', cursor: 'pointer',
                  textAlign: 'left', transition: 'all 0.15s',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.2 }}>{u.source}</div>
                  <div style={{ fontSize: 11, color: c.color, marginTop: 2, fontWeight: 500 }}>{u.author} · {u.date}</div>
                </button>
              )
            })}
          </div>

          {(() => {
            const u = THREE_UNDERWORLDS[selected]
            const c = SOURCE_COLORS[selected]
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {ROWS.map(row => (
                  <div key={row.key} style={{ padding: '14px 18px', background: 'white', border: '1px solid var(--border)', borderRadius: 2, borderLeft: `3px solid ${c.accent}` }}>
                    <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: c.color, fontWeight: 500, marginBottom: 6 }}>
                      {row.label}
                    </div>
                    <div style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.75 }}>
                      {u[row.key]}
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}
