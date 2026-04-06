'use client'

import { useState } from 'react'
import { THEBAN_SAGA, THEBAN_GENERATIONS } from '@/lib/data2'

const THEME_COLORS: Record<string, { bg: string; color: string }> = {
  'Hubris against a god':             { bg: '#f5eae6', color: 'var(--terracotta)' },
  'Fate vs. free will':               { bg: 'var(--gold-pale)', color: '#7a5010' },
  'Divine vengeance':                 { bg: '#f5eae6', color: 'var(--terracotta)' },
  'Etiological foundation myth':      { bg: '#eef2e8', color: 'var(--olive)' },
  'Knowledge as catastrophe':         { bg: '#e8ecf0', color: 'var(--slate)' },
  default:                            { bg: 'var(--parchment-dark)', color: 'var(--ink-faint)' },
}

function getThemeStyle(theme: string) {
  for (const key of Object.keys(THEME_COLORS)) {
    if (key !== 'default' && theme.toLowerCase().includes(key.toLowerCase().split(' ')[0])) {
      return THEME_COLORS[key]
    }
  }
  return THEME_COLORS.default
}

export default function ThebanSagaSection() {
  const [view, setView] = useState<'events' | 'tree'>('events')
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          The Theban Saga
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6, maxWidth: 600 }}>
          From Cadmus's founding of Thebes to the Epigoni — six generations of inherited guilt, divine punishment, and inescapable prophecy. The Theban saga is the other great mythological cycle alongside the Trojan War.
        </p>
      </div>

      {/* Key themes callout */}
      <div style={{ padding: '14px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 24 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 10 }}>
          Recurring Themes Across the Saga
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            'Inherited guilt across generations',
            'Divine prophecy always fulfilled',
            'Hubris against the gods',
            'Fate vs. free will',
            'Knowledge as catastrophe',
            'Divine law vs. human law',
            'The futility of escaping destiny',
          ].map(t => (
            <span key={t} style={{
              padding: '3px 10px',
              fontSize: 11,
              background: 'var(--parchment)',
              border: '1px solid var(--border-strong)',
              borderRadius: 1,
              color: 'var(--ink-muted)',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* View toggle */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 24 }}>
        {(['events', 'tree'] as const).map(v => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              padding: '6px 16px',
              border: '1px solid var(--border-strong)',
              borderRadius: 2,
              background: view === v ? 'var(--ink)' : 'white',
              color: view === v ? 'var(--parchment)' : 'var(--ink-muted)',
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: view === v ? 500 : 400,
              transition: 'all 0.15s',
            }}
          >
            {v === 'events' ? 'Narrative Events' : 'Family Generations'}
          </button>
        ))}
      </div>

      {view === 'events' && (
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: 12, top: 8, bottom: 8, width: 1, background: 'linear-gradient(to bottom, var(--gold), var(--border))' }} />

          {THEBAN_SAGA.map((event, i) => {
            const isOpen = open === i
            return (
              <div key={i} style={{ position: 'relative', marginBottom: 12 }}>
                {/* Number badge */}
                <div style={{
                  position: 'absolute',
                  left: -31,
                  top: 16,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 9,
                  fontWeight: 500,
                  color: 'white',
                  fontFamily: 'DM Mono, monospace',
                  flexShrink: 0,
                }}>
                  {event.order}
                </div>

                <div style={{
                  border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`,
                  borderRadius: 2,
                  background: 'white',
                  overflow: 'hidden',
                  transition: 'border-color 0.15s',
                }}>
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
                      gap: 12,
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 4 }}>
                        {event.generation}
                      </div>
                      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>
                        {event.title}
                      </div>
                      {!isOpen && (
                        <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginTop: 4, lineHeight: 1.5 }}>
                          {event.summary.slice(0, 100)}…
                        </div>
                      )}
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
                        {event.summary}
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
                        <div style={{ padding: '9px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
                          <div style={{ fontSize: 9, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 4 }}>Characters</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{event.characters}</div>
                        </div>
                        <div style={{ padding: '9px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
                          <div style={{ fontSize: 9, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 4 }}>Source</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.5, fontStyle: 'italic' }}>{event.source}</div>
                        </div>
                      </div>

                      <div>
                        <div style={{ fontSize: 9, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 8 }}>
                          Themes
                        </div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          {event.themes.map(t => {
                            const style = getThemeStyle(t)
                            return (
                              <span key={t} style={{
                                padding: '3px 9px',
                                fontSize: 11,
                                background: style.bg,
                                color: style.color,
                                borderRadius: 1,
                                border: '1px solid transparent',
                              }}>
                                {t}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {view === 'tree' && (
        <div>
          <div style={{ padding: '14px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 20, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
            The Theban saga spans six generations. The curse of Cadmus — rooted in killing Ares' dragon — seems to propagate forward through divine punishment and inherited guilt, touching each generation with catastrophe.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {THEBAN_GENERATIONS.map((gen, i) => (
              <div key={i} style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
                {/* Generation number */}
                <div style={{
                  width: 80,
                  flexShrink: 0,
                  padding: '14px 12px',
                  background: 'var(--gold-pale)',
                  border: '1px solid rgba(201,147,58,0.3)',
                  borderRadius: '2px 0 0 2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: 'var(--gold)', lineHeight: 1 }}>
                    {gen.gen}
                  </div>
                  <div style={{ fontSize: 9, color: '#7a5010', marginTop: 2, lineHeight: 1.3 }}>Gen.</div>
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  padding: '14px 18px',
                  background: 'white',
                  border: '1px solid var(--border-strong)',
                  borderLeft: 'none',
                  borderRadius: '0 2px 2px 0',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink)', marginBottom: 8 }}>
                    {gen.label}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {gen.members.map((m, mi) => (
                      <div key={mi} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--gold)', fontSize: 12, marginTop: 1, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key exam connections */}
          <div style={{ marginTop: 20, padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 12 }}>
              Exam Connection Points
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { point: 'Tantalus → Pelops → Atreus / Thyestes → Agamemnon / Aegisthus', note: 'The House of Atreus (Trojan War consequences) connects to the Theban tradition through Pelops' },
                { point: 'Oedipus myth = key source for Freud\'s Oedipus complex', note: 'Freud drew directly on Sophocles\' Oedipus Rex for his psychoanalytic theory' },
                { point: 'Antigone = divine law (bury Polynices) vs. human law (Creon\'s decree)', note: 'Classic exam question: explore the conflict between these two legal frameworks' },
                { point: 'Dionysus and Pentheus = danger of repressing divine force', note: 'Euripides\' Bacchae — the god who is denied recognition destroys those who deny him' },
                { point: 'Sphinx\'s riddle = intelligence as heroic power (contrast to Heracles\' strength)', note: 'Oedipus uses mind, not muscle — but intelligence still leads him to catastrophe' },
              ].map((c, i) => (
                <div key={i} style={{ padding: '10px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 3 }}>{c.point}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.5 }}>{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
