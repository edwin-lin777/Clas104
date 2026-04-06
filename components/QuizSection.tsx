'use client'

import { useState, useCallback } from 'react'
import { QUIZ_QUESTIONS, EXTRA_QUIZ, QUIZ_BANK_2, type QuizQuestion } from '@/lib/data2'

const ALL_QUESTIONS = [...QUIZ_QUESTIONS, ...EXTRA_QUIZ, ...QUIZ_BANK_2]
type Mode = 'setup' | 'quiz' | 'results'
const CATS = ['All', 'Gods', 'Myths', 'Underworld', 'Theory', 'Authors', 'Thebes']

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuizSection() {
  const [mode, setMode] = useState<Mode>('setup')
  const [cat, setCat] = useState('All')
  const [count, setCount] = useState(15)
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const startQuiz = useCallback(() => {
    const pool = cat === 'All' ? ALL_QUESTIONS : ALL_QUESTIONS.filter(q => q.category === cat)
    const qs = shuffle(pool).slice(0, Math.min(count, pool.length))
    setQuestions(qs)
    setAnswers(new Array(qs.length).fill(null))
    setIndex(0)
    setSelected(null)
    setConfirmed(false)
    setMode('quiz')
  }, [cat, count])

  const confirm = useCallback(() => {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[index] = selected
    setAnswers(newAnswers)
    setConfirmed(true)
  }, [selected, answers, index])

  const next = useCallback(() => {
    if (index < questions.length - 1) {
      setIndex(i => i + 1)
      setSelected(null)
      setConfirmed(false)
    } else {
      setMode('results')
    }
  }, [index, questions.length])

  if (mode === 'setup') {
    return (
      <div>
        <div style={{ marginBottom: 32 }}>
          <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
            Practice Quiz
          </h1>
          <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
            {ALL_QUESTIONS.length} multiple-choice questions modelled on the actual exam format. Each question includes a full explanation.
          </p>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, padding: '28px 32px', maxWidth: 500 }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 10 }}>
              Category
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)} style={{
                  padding: '5px 12px',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 20,
                  background: cat === c ? 'var(--ink)' : 'white',
                  color: cat === c ? 'var(--parchment)' : 'var(--ink-muted)',
                  fontSize: 12, cursor: 'pointer',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: cat === c ? 500 : 400,
                  transition: 'all 0.15s',
                }}>{c}</button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 10 }}>
              Number of Questions
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[10, 15, 20, 30, 50].map(n => {
                const pool = cat === 'All' ? ALL_QUESTIONS : ALL_QUESTIONS.filter(q => q.category === cat)
                const disabled = n > pool.length
                return (
                  <button key={n} onClick={() => !disabled && setCount(n)} disabled={disabled} style={{
                    padding: '6px 16px',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 2,
                    background: count === n ? 'var(--ink)' : disabled ? 'var(--parchment)' : 'white',
                    color: count === n ? 'var(--parchment)' : disabled ? 'var(--ink-faint)' : 'var(--ink)',
                    fontSize: 14, cursor: disabled ? 'not-allowed' : 'pointer',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: count === n ? 500 : 400,
                    opacity: disabled ? 0.5 : 1, transition: 'all 0.15s',
                  }}>{n}</button>
                )
              })}
            </div>
          </div>

          <button onClick={startQuiz} style={{
            width: '100%', padding: '12px',
            background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 2,
            fontSize: 14, fontWeight: 500, cursor: 'pointer',
            fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em',
          }}>
            Begin Quiz →
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'quiz' && questions.length > 0) {
    const q = questions[index]
    const isCorrect = confirmed && selected === q.correct
    const pct = Math.round(((index + 1) / questions.length) * 100)

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <span style={{ fontSize: 12, color: 'var(--ink-faint)', fontFamily: 'DM Mono, monospace', minWidth: 50 }}>
            {index + 1} / {questions.length}
          </span>
          <div style={{ flex: 1, height: 3, background: 'var(--border)', borderRadius: 2 }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--gold)', borderRadius: 2, transition: 'width 0.3s' }} />
          </div>
          <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--gold-pale)', color: '#7a5010', borderRadius: 1, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {q.category}
          </span>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, padding: '24px 28px', marginBottom: 16 }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, margin: 0 }}>
            {q.question}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {q.options.map((opt, i) => {
            let bg = 'white', border = 'var(--border-strong)', color = 'var(--ink)'
            if (confirmed) {
              if (i === q.correct) { bg = '#eef2e8'; border = 'rgba(74,92,42,0.4)'; color = 'var(--olive)' }
              else if (i === selected && i !== q.correct) { bg = '#f5eae6'; border = 'rgba(155,74,42,0.4)'; color = 'var(--terracotta)' }
            } else if (selected === i) { bg = 'var(--gold-pale)'; border = 'rgba(201,147,58,0.5)' }

            return (
              <button key={i} onClick={() => !confirmed && setSelected(i)} style={{
                textAlign: 'left', padding: '12px 16px',
                border: `1px solid ${border}`, borderRadius: 2, background: bg,
                cursor: confirmed ? 'default' : 'pointer', transition: 'all 0.15s',
                display: 'flex', alignItems: 'flex-start', gap: 12,
              }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 500, color, marginTop: 1 }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span style={{ fontSize: 14, color, lineHeight: 1.5, flex: 1 }}>{opt}</span>
                {confirmed && i === q.correct && <span style={{ color: 'var(--olive)', fontSize: 14 }}>✓</span>}
                {confirmed && i === selected && i !== q.correct && <span style={{ color: 'var(--terracotta)', fontSize: 14 }}>✗</span>}
              </button>
            )
          })}
        </div>

        {confirmed && (
          <div style={{ padding: '14px 16px', background: isCorrect ? '#eef2e8' : '#f5eae6', border: `1px solid ${isCorrect ? 'rgba(74,92,42,0.25)' : 'rgba(155,74,42,0.25)'}`, borderRadius: 2, marginBottom: 16 }}>
            <div style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: isCorrect ? 'var(--olive)' : 'var(--terracotta)', fontWeight: 500, marginBottom: 5 }}>
              {isCorrect ? '✓ Correct' : '✗ Incorrect'} — Explanation
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.75 }}>{q.explanation}</div>
          </div>
        )}

        <div style={{ display: 'flex', gap: 8 }}>
          {!confirmed ? (
            <button onClick={confirm} disabled={selected === null} style={{
              padding: '10px 24px',
              background: selected !== null ? 'var(--gold)' : 'var(--parchment-dark)',
              color: selected !== null ? 'white' : 'var(--ink-faint)',
              border: 'none', borderRadius: 2, fontSize: 14, fontWeight: 500,
              cursor: selected !== null ? 'pointer' : 'not-allowed',
              fontFamily: 'DM Sans, sans-serif', transition: 'all 0.15s',
            }}>
              Confirm Answer
            </button>
          ) : (
            <button onClick={next} style={{
              padding: '10px 24px', background: 'var(--ink)', color: 'var(--parchment)',
              border: 'none', borderRadius: 2, fontSize: 14, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'DM Sans, sans-serif',
            }}>
              {index < questions.length - 1 ? 'Next Question →' : 'See Results →'}
            </button>
          )}
          <button onClick={() => setMode('setup')} style={{ padding: '10px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 13, cursor: 'pointer', color: 'var(--ink-muted)', fontFamily: 'DM Sans, sans-serif' }}>
            Quit
          </button>
        </div>
      </div>
    )
  }

  if (mode === 'results') {
    const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0)
    const pct = Math.round((score / questions.length) * 100)
    const byCategory: Record<string, { correct: number; total: number }> = {}
    questions.forEach((q, i) => {
      if (!byCategory[q.category]) byCategory[q.category] = { correct: 0, total: 0 }
      byCategory[q.category].total++
      if (answers[i] === q.correct) byCategory[q.category].correct++
    })
    const grade = pct >= 80 ? { label: 'Excellent', color: 'var(--olive)', bg: '#eef2e8' }
      : pct >= 60 ? { label: 'Good', color: '#7a5010', bg: 'var(--gold-pale)' }
      : { label: 'Keep Reviewing', color: 'var(--terracotta)', bg: '#f5eae6' }

    return (
      <div>
        <div style={{ marginBottom: 32 }}>
          <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>Quiz Results</h1>
        </div>

        <div style={{ background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, padding: '28px 32px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 16 }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 64, fontWeight: 500, color: 'var(--ink)', lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 20, color: 'var(--ink-faint)', marginBottom: 8 }}>/ {questions.length}</div>
            <div style={{ marginBottom: 8, padding: '4px 12px', background: grade.bg, color: grade.color, borderRadius: 2, fontSize: 13, fontWeight: 500 }}>
              {pct}% — {grade.label}
            </div>
          </div>
          <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, marginBottom: 20, overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: pct >= 80 ? 'var(--olive)' : pct >= 60 ? 'var(--gold)' : 'var(--terracotta)', borderRadius: 3 }} />
          </div>
          {Object.keys(byCategory).length > 1 && (
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 10 }}>By Category</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {Object.entries(byCategory).map(([c, data]) => {
                  const cp = Math.round((data.correct / data.total) * 100)
                  return (
                    <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 80, fontSize: 12, color: 'var(--ink-muted)' }}>{c}</div>
                      <div style={{ flex: 1, height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
                        <div style={{ width: `${cp}%`, height: '100%', background: cp >= 80 ? 'var(--olive)' : cp >= 60 ? 'var(--gold)' : 'var(--terracotta)', borderRadius: 2 }} />
                      </div>
                      <div style={{ width: 50, fontSize: 12, color: 'var(--ink-faint)', textAlign: 'right', fontFamily: 'DM Mono, monospace' }}>{data.correct}/{data.total}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 12 }}>Review Missed Questions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {questions.map((q, i) => {
              if (answers[i] === q.correct) return null
              return (
                <div key={q.id} style={{ padding: '14px 16px', background: 'white', border: '1px solid rgba(155,74,42,0.2)', borderRadius: 2 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>{q.question}</div>
                  <div style={{ fontSize: 12, color: 'var(--terracotta)', marginBottom: 4 }}>Your answer: {answers[i] !== null ? q.options[answers[i]!] : 'Not answered'}</div>
                  <div style={{ fontSize: 12, color: 'var(--olive)', marginBottom: 6 }}>Correct: {q.options[q.correct]}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.65 }}>{q.explanation}</div>
                </div>
              )
            })}
          </div>
        </div>

        <button onClick={() => setMode('setup')} style={{ padding: '10px 24px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 2, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
          Take Another Quiz →
        </button>
      </div>
    )
  }

  return null
}
