'use client'

import { useState } from 'react'
import { THEORIES } from '@/lib/data'

export default function TheoriesSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Myth Theories
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          8 interpretive frameworks. For the exam: know each thinker's name, core claim, a Greco-Roman example, and one strength/weakness.
        </p>
      </div>

      {/* Quick-reference grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: 8,
        marginBottom: 28,
        padding: '16px',
        background: 'white',
        border: '1px solid var(--border-strong)',
        borderRadius: 2,
      }}>
        <div style={{ gridColumn: '1 / -1', fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 6 }}>
          Quick Reference — Thinker → Approach
        </div>
        {THEORIES.map(t => (
          <div key={t.name} style={{ fontSize: 12 }}>
            <span style={{ color: 'var(--ink-faint)' }}>{t.thinker}</span>
            <div style={{ color: 'var(--ink)', fontWeight: 500 }}>{t.name}</div>
          </div>
        ))}
      </div>

      {/* Detailed accordions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {THEORIES.map((theory, i) => {
          const isOpen = open === i
          return (
            <div
              key={theory.name}
              style={{
                border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`,
                borderRadius: 2,
                background: 'white',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '14px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: 'var(--ink)' }}>
                      {theory.name}
                    </span>
                    <span style={{ fontSize: 12, color: 'var(--ink-faint)' }}>
                      {theory.thinker}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 4, lineHeight: 1.5 }}>
                    {theory.summary}
                  </div>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: 20,
                  height: 20,
                  border: '1px solid var(--border-strong)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  color: 'var(--ink-faint)',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s',
                  marginTop: 2,
                }}>
                  +
                </div>
              </button>

              <div className={`accordion-body${isOpen ? ' open' : ''}`}>
                <div style={{ padding: '0 18px 18px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.8, marginTop: 14, marginBottom: 16 }}>
                    {theory.detail}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div style={{ padding: '10px 12px', background: '#eef2e8', borderRadius: 2, border: '1px solid rgba(74,92,42,0.2)' }}>
                      <div style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--olive)', fontWeight: 500, marginBottom: 5 }}>
                        Strength
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                        {theory.strength}
                      </div>
                    </div>
                    <div style={{ padding: '10px 12px', background: '#f5eae6', borderRadius: 2, border: '1px solid rgba(155,74,42,0.2)' }}>
                      <div style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 500, marginBottom: 5 }}>
                        Weakness
                      </div>
                      <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                        {theory.weakness}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
