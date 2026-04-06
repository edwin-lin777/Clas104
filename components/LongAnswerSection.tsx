'use client'

import { useState } from 'react'
import { LONG_ANSWERS } from '@/lib/data'
import { EXTRA_LONG_ANSWERS, PDF_LONG_ANSWERS } from '@/lib/data2'

const ALL_ANSWERS = [...LONG_ANSWERS, ...EXTRA_LONG_ANSWERS, ...PDF_LONG_ANSWERS]

const CATS = [
  { id: 'all', label: 'All Questions' },
  { id: 'gods', label: 'Gods' },
  { id: 'heroes', label: 'Heroes' },
  { id: 'troy', label: 'Trojan War' },
  { id: 'thebes', label: 'Theban Saga' },
  { id: 'underworld', label: 'Underworld' },
  { id: 'theory', label: 'Theory' },
]

export default function LongAnswerSection() {
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState<number | null>(null)

  const filtered = cat === 'all' ? ALL_ANSWERS : ALL_ANSWERS.filter(q => q.category === cat)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Long Answer Practice
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          20 model answers at exam level (6–7 sentences minimum). Try writing your own answer first, then click to compare.
        </p>
      </div>

      {/* Tip box */}
      <div style={{
        padding: '12px 16px',
        background: 'var(--gold-pale)',
        border: '1px solid rgba(201,147,58,0.3)',
        borderRadius: 2,
        fontSize: 13,
        color: '#7a5010',
        marginBottom: 24,
        lineHeight: 1.6,
      }}>
        <strong style={{ fontWeight: 500 }}>Strategy:</strong> You will choose 4 from 15 questions. Pick topics where you can demonstrate breadth — name specific texts, authors, gods, and narrative details. Aim for at least one example per sentence.
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
        {CATS.map(c => (
          <button
            key={c.id}
            onClick={() => { setCat(c.id); setOpen(null) }}
            style={{
              padding: '5px 12px',
              border: '1px solid var(--border-strong)',
              borderRadius: 20,
              background: cat === c.id ? 'var(--ink)' : 'white',
              color: cat === c.id ? 'var(--parchment)' : 'var(--ink-muted)',
              fontSize: 12,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              transition: 'all 0.15s',
              fontWeight: cat === c.id ? 500 : 400,
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((item, i) => {
          const globalIndex = ALL_ANSWERS.indexOf(item)
          const isOpen = open === globalIndex
          return (
            <div
              key={globalIndex}
              style={{
                border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`,
                borderRadius: 2,
                background: 'white',
                overflow: 'hidden',
                transition: 'border-color 0.15s',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : globalIndex)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px 20px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-faint)',
                      fontWeight: 500,
                    }}>
                      {item.categoryLabel}
                    </span>
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5 }}>
                    {item.question}
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
                  transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  marginTop: 2,
                }}>
                  +
                </div>
              </button>

              {/* Answer */}
              <div className={`accordion-body${isOpen ? ' open' : ''}`}>
                <div style={{
                  padding: '0 20px 20px',
                  borderTop: '1px solid var(--border)',
                }}>
                  <div style={{ paddingTop: 16, marginBottom: 10, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
                    Model Answer
                  </div>
                  {item.answer.split('\n\n').map((para, pi) => (
                    <p key={pi} style={{
                      fontSize: 14,
                      color: 'var(--ink-muted)',
                      lineHeight: 1.8,
                      marginBottom: 12,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
