'use client'

import { useState } from 'react'
import { MYTH_CONNECTIONS, type MythConnection } from '@/lib/data2'

const CAT_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Troy:       { bg: '#f5eae6',       color: 'var(--terracotta)', border: 'rgba(155,74,42,0.25)' },
  Thebes:     { bg: 'var(--gold-pale)', color: '#7a5010',        border: 'rgba(201,147,58,0.3)'  },
  Gods:       { bg: '#eef2e8',       color: 'var(--olive)',      border: 'rgba(74,92,42,0.25)'   },
  Heroes:     { bg: '#e8ecf0',       color: 'var(--slate)',      border: 'rgba(42,53,69,0.25)'   },
  Underworld: { bg: '#f0edf8',       color: '#534AB7',           border: 'rgba(83,74,183,0.2)'   },
}

export default function ConnectionsSection() {
  const [selected, setSelected] = useState<MythConnection>(MYTH_CONNECTIONS[0])

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Myth Connections
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          How myths, gods, heroes, and theories link to each other across the course. Essential for long-answer questions.
        </p>
      </div>

      {/* Context tip */}
      <div style={{ padding: '12px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 24, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.65 }}>
        <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>Why this matters: </strong>
        The paragraph questions reward answers that connect myths to theories, authors, and other myths. These maps show you the cross-references that make a strong answer.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, alignItems: 'start' }}>
        {/* Myth list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 24 }}>
          {MYTH_CONNECTIONS.map(m => {
            const cat = CAT_COLORS[m.category] ?? CAT_COLORS.Gods
            const isActive = selected.myth === m.myth
            return (
              <button
                key={m.myth}
                onClick={() => setSelected(m)}
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  border: `1px solid ${isActive ? 'var(--border-strong)' : 'var(--border)'}`,
                  borderRadius: 2,
                  background: isActive ? 'white' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: isActive ? '0 2px 8px rgba(26,21,16,0.06)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 3 }}>
                  <span style={{
                    padding: '1px 6px',
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    background: cat.bg,
                    color: cat.color,
                    borderRadius: 1,
                    flexShrink: 0,
                  }}>
                    {m.category}
                  </span>
                </div>
                <div style={{
                  fontSize: 12,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? 'var(--ink)' : 'var(--ink-muted)',
                  lineHeight: 1.3,
                }}>
                  {m.myth}
                </div>
              </button>
            )
          })}
        </div>

        {/* Connection detail */}
        <div>
          <div style={{ padding: '20px 24px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{
                padding: '2px 10px',
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: (CAT_COLORS[selected.category] ?? CAT_COLORS.Gods).bg,
                color: (CAT_COLORS[selected.category] ?? CAT_COLORS.Gods).color,
                borderRadius: 1,
              }}>
                {selected.category}
              </span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: 'var(--ink)', margin: '0 0 6px' }}>
              {selected.myth}
            </h2>
            <p style={{ fontSize: 13, color: 'var(--ink-faint)', margin: 0 }}>
              {selected.connects.length} connections to other parts of the course
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {selected.connects.map((conn, i) => (
              <div
                key={i}
                style={{
                  padding: '16px 18px',
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 2,
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                {/* Arrow */}
                <div style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'var(--parchment-dark)',
                  border: '1px solid var(--border-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: 'var(--gold)',
                  marginTop: 2,
                }}>
                  →
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 17,
                    fontWeight: 500,
                    color: 'var(--ink)',
                    marginBottom: 5,
                  }}>
                    {conn.to}
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.65 }}>
                    {conn.reason}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exam tip for this myth */}
          <div style={{ marginTop: 14, padding: '14px 18px', background: 'var(--gold-pale)', border: '1px solid rgba(201,147,58,0.3)', borderRadius: 2 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7a5010', fontWeight: 500, marginBottom: 6 }}>
              Use in a paragraph answer
            </div>
            <div style={{ fontSize: 13, color: '#6a4808', lineHeight: 1.65 }}>
              When writing about <em>{selected.myth}</em>, you can deepen your answer by connecting it to {selected.connects.slice(0, 2).map(c => c.to).join(' and ')} — showing that you understand how this myth functions within the broader context of the course.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
