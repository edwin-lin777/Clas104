'use client'

import { useState } from 'react'
import { SOURCES } from '@/lib/data2'

const IMP: Record<string, { label: string; bg: string; color: string }> = {
  essential:      { label: 'Essential',      bg: '#f5eae6', color: 'var(--terracotta)' },
  important:      { label: 'Important',      bg: 'var(--gold-pale)', color: '#7a5010' },
  supplementary:  { label: 'Supplementary',  bg: '#e8ecf0', color: 'var(--slate)' },
}

export default function SourcesSection() {
  const [open, setOpen] = useState<number | null>(null)
  const [filter, setFilter] = useState<'all' | 'essential' | 'important'>('all')

  const filtered = filter === 'all' ? SOURCES : SOURCES.filter(s => s.examImportance === filter)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Sources & Authors
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          14 key ancient sources — author, date, language, genre, and exam-relevant content. Know the essentials cold.
        </p>
      </div>

      {/* Study tip */}
      <div style={{ padding: '12px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 20, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
        <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>Exam tip:</strong> The study guide asks: "What are our main sources? What did each contribute? What style did they write in?" For each source, be able to say: author → work → date → genre → what mythology it covers → why it matters.
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {[
          { id: 'all', label: 'All Sources' },
          { id: 'essential', label: 'Essential only' },
          { id: 'important', label: 'Important' },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as any)}
            style={{
              padding: '5px 12px',
              border: '1px solid var(--border-strong)',
              borderRadius: 20,
              background: filter === f.id ? 'var(--ink)' : 'white',
              color: filter === f.id ? 'var(--parchment)' : 'var(--ink-muted)',
              fontSize: 12,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: filter === f.id ? 500 : 400,
              transition: 'all 0.15s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {filtered.map((src, i) => {
          const imp = IMP[src.examImportance]
          const isOpen = open === i
          return (
            <div
              key={i}
              style={{ border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 2, background: 'white', overflow: 'hidden' }}
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
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: 'var(--ink)' }}>
                      {src.author}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--ink-faint)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
                      {src.work}
                    </span>
                    <span style={{ padding: '1px 7px', fontSize: 9, fontWeight: 500, borderRadius: 1, background: imp.bg, color: imp.color, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                      {imp.label}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 11, color: 'var(--gold)', fontFamily: 'DM Mono, monospace' }}>{src.date}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{src.language}</span>
                    <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{src.genre}</span>
                  </div>
                </div>
                <div style={{ flexShrink: 0, width: 20, height: 20, border: '1px solid var(--border-strong)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--ink-faint)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', marginTop: 2 }}>
                  +
                </div>
              </button>

              <div className={`accordion-body${isOpen ? ' open' : ''}`}>
                <div style={{ padding: '0 18px 18px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ paddingTop: 14, fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 8 }}>
                    Exam-Relevant Content
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.8, margin: 0 }}>{src.keyContent}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
