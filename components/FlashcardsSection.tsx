'use client'

import { useState, useCallback } from 'react'
import { DECKS, EXTRA_DECKS, PDF_DECKS, type Deck, type Flashcard } from '@/lib/data'

const ALL_DECKS = [...DECKS, ...EXTRA_DECKS, ...PDF_DECKS]

const COLOR_MAP = {
  gold: { bg: 'var(--gold-pale)', border: 'rgba(201,147,58,0.3)', text: '#7a5010', dot: 'var(--gold)' },
  terra: { bg: '#f5eae6', border: 'rgba(155,74,42,0.25)', text: 'var(--terracotta)', dot: 'var(--terracotta)' },
  olive: { bg: '#eef2e8', border: 'rgba(74,92,42,0.25)', text: 'var(--olive)', dot: 'var(--olive)' },
  slate: { bg: '#e8ecf0', border: 'rgba(42,53,69,0.25)', text: 'var(--slate)', dot: 'var(--slate)' },
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardsSection() {
  const [selectedDeck, setSelectedDeck] = useState<Deck | null>(null)
  const [cards, setCards] = useState<Flashcard[]>([])
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)

  const selectDeck = useCallback((deck: Deck) => {
    setSelectedDeck(deck)
    setCards([...deck.cards])
    setIndex(0)
    setFlipped(false)
    setCorrect(0)
    setWrong(0)
  }, [])

  const next = useCallback(() => {
    setIndex(i => (i + 1) % cards.length)
    setFlipped(false)
  }, [cards.length])

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + cards.length) % cards.length)
    setFlipped(false)
  }, [cards.length])

  const markCorrect = useCallback(() => { setCorrect(c => c + 1); next() }, [next])
  const markWrong = useCallback(() => { setWrong(w => w + 1); next() }, [next])
  const doShuffle = useCallback(() => { setCards(shuffle(cards)); setIndex(0); setFlipped(false) }, [cards])

  const card = cards[index]
  const pct = cards.length ? Math.round(((index + 1) / cards.length) * 100) : 0
  const total = correct + wrong

  return (
    <div>
      <PageHeader
        title="Flashcards"
        sub="Select a deck below. Click a card to flip it. Track your progress with Got it / Missed it."
      />

      {/* Deck grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 10, marginBottom: 32 }}>
        {ALL_DECKS.map(deck => {
          const c = COLOR_MAP[deck.color]
          const isSelected = selectedDeck?.name === deck.name
          return (
            <button
              key={deck.name}
              onClick={() => selectDeck(deck)}
              style={{
                padding: '12px 14px',
                textAlign: 'left',
                border: `1px solid ${isSelected ? c.border : 'var(--border-strong)'}`,
                borderRadius: 2,
                background: isSelected ? c.bg : 'white',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: isSelected ? c.dot : 'var(--ink-faint)', flexShrink: 0 }} />
                <span style={{
                  fontSize: 13,
                  fontWeight: isSelected ? 500 : 400,
                  color: isSelected ? c.text : 'var(--ink)',
                }}>
                  {deck.name}
                </span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-faint)', paddingLeft: 13 }}>
                {deck.cards.length} cards
              </div>
            </button>
          )
        })}
      </div>

      {!selectedDeck && (
        <div style={{ padding: '48px 0', textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>
          Choose a deck above to begin
        </div>
      )}

      {selectedDeck && card && (
        <>
          {/* Stats row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', minWidth: 80 }}>
              {index + 1} / {cards.length}
            </span>
            <div style={{ flex: 1, height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: 'var(--gold)', borderRadius: 2, transition: 'width 0.3s ease' }} />
            </div>
            {total > 0 && (
              <span style={{ fontSize: 12, color: 'var(--ink-faint)' }}>
                <span style={{ color: 'var(--olive)' }}>{correct} ✓</span>
                {' · '}
                <span style={{ color: 'var(--terracotta)' }}>{wrong} ✗</span>
                {' · '}
                {total > 0 ? Math.round((correct / total) * 100) : 0}%
              </span>
            )}
          </div>

          {/* Flip card */}
          <div
            className="perspective"
            style={{ height: 220, marginBottom: 20, cursor: 'pointer' }}
            onClick={() => setFlipped(f => !f)}
          >
            <div className={`flip-card${flipped ? ' flipped' : ''}`}>
              {/* Front */}
              <div className="flip-front" style={{
                background: 'white',
                border: '1px solid var(--border-strong)',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 16, fontWeight: 500 }}>
                  Question
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4, maxWidth: 540 }}>
                  {card.q}
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 20 }}>
                  click to flip
                </div>
              </div>

              {/* Back */}
              <div className="flip-back" style={{
                background: 'var(--parchment-dark)',
                border: '1px solid var(--border-strong)',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 32px',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16, fontWeight: 500 }}>
                  Answer
                </div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.4, maxWidth: 540 }}>
                  {card.a}
                </div>
                {card.sub && (
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)', marginTop: 12, lineHeight: 1.5, maxWidth: 500 }}>
                    {card.sub}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <Btn onClick={prev}>← Prev</Btn>
            <Btn onClick={() => setFlipped(f => !f)}>Flip</Btn>
            <Btn onClick={next}>Next →</Btn>
            <div style={{ width: 1, height: 24, background: 'var(--border-strong)', margin: '0 4px' }} />
            <Btn onClick={markCorrect} style={{ color: 'var(--olive)', borderColor: 'rgba(74,92,42,0.35)' }}>Got it ✓</Btn>
            <Btn onClick={markWrong} style={{ color: 'var(--terracotta)', borderColor: 'rgba(155,74,42,0.35)' }}>Missed it ✗</Btn>
            <div style={{ width: 1, height: 24, background: 'var(--border-strong)', margin: '0 4px' }} />
            <Btn onClick={doShuffle}>Shuffle</Btn>
          </div>
        </>
      )}
    </div>
  )
}

function Btn({ children, onClick, style }: { children: React.ReactNode; onClick: () => void; style?: React.CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '7px 16px',
        border: '1px solid var(--border-strong)',
        borderRadius: 2,
        background: 'white',
        cursor: 'pointer',
        fontSize: 13,
        color: 'var(--ink)',
        transition: 'all 0.15s',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        ...style,
      }}
    >
      {children}
    </button>
  )
}

function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
      <h1 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 32,
        fontWeight: 500,
        color: 'var(--ink)',
        margin: 0,
        lineHeight: 1.1,
      }}>
        {title}
      </h1>
      <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>{sub}</p>
    </div>
  )
}
