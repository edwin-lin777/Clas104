'use client'

import { useState, useMemo } from 'react'
import { GLOSSARY, type GlossaryTerm } from '@/lib/data2'

const CAT_CONFIG: Record<string, { label: string; bg: string; color: string; border: string }> = {
  concept:  { label: 'Concept',  bg: 'var(--gold-pale)',  color: '#7a5010',        border: 'rgba(201,147,58,0.3)' },
  place:    { label: 'Place',    bg: '#e8ecf0',           color: 'var(--slate)',   border: 'rgba(42,53,69,0.25)'  },
  creature: { label: 'Creature', bg: '#f5eae6',           color: 'var(--terracotta)', border: 'rgba(155,74,42,0.25)' },
  ritual:   { label: 'Ritual',   bg: '#eef2e8',           color: 'var(--olive)',   border: 'rgba(74,92,42,0.25)'  },
  literary: { label: 'Literary', bg: '#f0edf8',           color: '#534AB7',        border: 'rgba(83,74,183,0.25)' },
}

const CATS = ['all', 'concept', 'literary', 'place', 'creature', 'ritual']

export default function GlossarySection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return GLOSSARY
      .filter(g => cat === 'all' || g.category === cat)
      .filter(g => !search || g.term.toLowerCase().includes(search.toLowerCase()) || g.definition.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [cat, search])

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Glossary
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          26 key terms — Greek concepts, literary terms, places, creatures, and rituals. Each entry includes a definition and an exam-ready example.
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search terms…"
          style={{
            flex: 1,
            minWidth: 180,
            padding: '8px 12px',
            border: '1px solid var(--border-strong)',
            borderRadius: 2,
            background: 'white',
            fontSize: 13,
            color: 'var(--ink)',
            fontFamily: 'DM Sans, sans-serif',
            outline: 'none',
          }}
        />
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {CATS.map(c => {
            const cfg = c === 'all' ? null : CAT_CONFIG[c]
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '5px 11px',
                  border: `1px solid ${cat === c ? (cfg?.border ?? 'var(--border-strong)') : 'var(--border-strong)'}`,
                  borderRadius: 20,
                  background: cat === c ? (cfg?.bg ?? 'var(--ink)') : 'white',
                  color: cat === c ? (cfg?.color ?? 'var(--parchment)') : 'var(--ink-muted)',
                  fontSize: 11,
                  cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: cat === c ? 500 : 400,
                  transition: 'all 0.15s',
                  textTransform: 'capitalize',
                }}
              >
                {c === 'all' ? 'All Terms' : CAT_CONFIG[c].label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Count */}
      <div style={{ fontSize: 11, color: 'var(--ink-faint)', marginBottom: 16 }}>
        {filtered.length} term{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* Terms list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map(term => {
          const cfg = CAT_CONFIG[term.category]
          const isOpen = open === term.term
          return (
            <div
              key={term.term}
              style={{
                border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`,
                borderRadius: 2,
                background: 'white',
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : term.term)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                {/* Category badge */}
                <span style={{
                  flexShrink: 0,
                  padding: '2px 8px',
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: cfg.bg,
                  color: cfg.color,
                  border: `1px solid ${cfg.border}`,
                  borderRadius: 1,
                }}>
                  {cfg.label}
                </span>

                {/* Term + pronunciation */}
                <div style={{ flex: 1 }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 500, color: 'var(--ink)' }}>
                    {term.term}
                  </span>
                  {term.pronunciation && (
                    <span style={{ fontSize: 12, color: 'var(--ink-faint)', marginLeft: 8, fontStyle: 'italic', fontFamily: 'DM Sans, sans-serif' }}>
                      /{term.pronunciation}/
                    </span>
                  )}
                </div>

                {/* Preview of definition */}
                {!isOpen && (
                  <span style={{ fontSize: 12, color: 'var(--ink-faint)', maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {term.definition.slice(0, 60)}…
                  </span>
                )}

                <span style={{
                  flexShrink: 0,
                  fontSize: 14,
                  color: 'var(--ink-faint)',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s',
                }}>
                  +
                </span>
              </button>

              <div className={`accordion-body${isOpen ? ' open' : ''}`}>
                <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.75, marginTop: 14, marginBottom: 12 }}>
                    {term.definition}
                  </p>
                  <div style={{
                    padding: '10px 12px',
                    background: 'var(--parchment)',
                    border: '1px solid var(--border)',
                    borderRadius: 2,
                    borderLeft: `3px solid ${cfg.color}`,
                  }}>
                    <div style={{ fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: cfg.color, fontWeight: 500, marginBottom: 4 }}>
                      Exam example
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                      {term.example}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>
          No terms match "{search}"
        </div>
      )}
    </div>
  )
}
