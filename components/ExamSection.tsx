'use client'

import { useState, useCallback, useEffect } from 'react'
import { QUIZ_QUESTIONS, EXTRA_QUIZ, QUIZ_BANK_2, type QuizQuestion } from '@/lib/data2'

const ALL_Q = [...QUIZ_QUESTIONS, ...EXTRA_QUIZ, ...QUIZ_BANK_2]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Mode = 'setup' | 'exam' | 'results'

function fmtTime(s: number) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function ExamSection() {
  const [mode, setMode] = useState<Mode>('setup')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [index, setIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [timerActive, setTimerActive] = useState(false)
  const [examCount, setExamCount] = useState(60)
  const [showReview, setShowReview] = useState(false)

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return
    const t = setInterval(() => setTimeLeft(s => {
      if (s <= 1) { setTimerActive(false); setMode('results'); return 0 }
      return s - 1
    }), 1000)
    return () => clearInterval(t)
  }, [timerActive, timeLeft])

  const startExam = useCallback((count: number, timed: boolean) => {
    const qs = shuffle(ALL_Q).slice(0, Math.min(count, ALL_Q.length))
    setQuestions(qs)
    setAnswers(new Array(qs.length).fill(null))
    setIndex(0)
    setExamCount(count)
    if (timed) {
      setTimeLeft(count * 90) // 90 seconds per question
      setTimerActive(true)
    }
    setMode('exam')
  }, [])

  const selectAnswer = useCallback((i: number) => {
    setAnswers(prev => {
      const next = [...prev]
      next[index] = i
      return next
    })
  }, [index])

  const submit = useCallback(() => {
    setTimerActive(false)
    setMode('results')
  }, [])

  if (mode === 'setup') return <ExamSetup onStart={startExam} total={ALL_Q.length} />

  if (mode === 'exam') {
    const q = questions[index]
    const pct = Math.round(((index + 1) / questions.length) * 100)
    const answered = answers.filter(a => a !== null).length
    const urgent = timeLeft > 0 && timeLeft < 120

    return (
      <div>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, padding: '10px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
          <span style={{ fontSize: 12, color: 'var(--ink-faint)', fontFamily: 'DM Mono, monospace', minWidth: 60 }}>
            {index + 1} / {questions.length}
          </span>
          <div style={{ flex: 1, height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--gold)', borderRadius: 2, transition: 'width 0.3s' }} />
          </div>
          {timeLeft > 0 && (
            <div style={{
              padding: '4px 10px',
              background: urgent ? '#f5eae6' : 'var(--parchment)',
              border: `1px solid ${urgent ? 'rgba(155,74,42,0.4)' : 'var(--border)'}`,
              borderRadius: 2,
              fontFamily: 'DM Mono, monospace',
              fontSize: 14,
              fontWeight: 500,
              color: urgent ? 'var(--terracotta)' : 'var(--ink)',
            }}>
              {fmtTime(timeLeft)}
            </div>
          )}
          <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
            {answered} answered
          </span>
          <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--gold-pale)', color: '#7a5010', borderRadius: 1, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {q.category}
          </span>
        </div>

        {/* Question */}
        <div style={{ padding: '24px 28px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 14 }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, margin: 0 }}>
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {q.options.map((opt, i) => {
            const isSelected = answers[index] === i
            return (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                style={{
                  textAlign: 'left',
                  padding: '12px 16px',
                  border: `1px solid ${isSelected ? 'rgba(201,147,58,0.5)' : 'var(--border-strong)'}`,
                  borderRadius: 2,
                  background: isSelected ? 'var(--gold-pale)' : 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  transition: 'all 0.12s',
                }}
              >
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%',
                  border: `1px solid ${isSelected ? 'rgba(201,147,58,0.6)' : 'var(--border-strong)'}`,
                  background: isSelected ? 'var(--gold)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 500,
                  color: isSelected ? 'white' : 'var(--ink-faint)', marginTop: 1,
                }}>
                  {String.fromCharCode(65 + i)}
                </span>
                <span style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5, flex: 1 }}>{opt}</span>
              </button>
            )
          })}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}
            style={{ padding: '8px 16px', border: '1px solid var(--border-strong)', borderRadius: 2, background: 'white', cursor: index === 0 ? 'not-allowed' : 'pointer', fontSize: 13, color: 'var(--ink)', opacity: index === 0 ? 0.4 : 1, fontFamily: 'DM Sans, sans-serif' }}>
            ← Prev
          </button>
          <button onClick={() => setIndex(Math.min(questions.length - 1, index + 1))} disabled={index === questions.length - 1}
            style={{ padding: '8px 16px', border: '1px solid var(--border-strong)', borderRadius: 2, background: 'white', cursor: index === questions.length - 1 ? 'not-allowed' : 'pointer', fontSize: 13, color: 'var(--ink)', opacity: index === questions.length - 1 ? 0.4 : 1, fontFamily: 'DM Sans, sans-serif' }}>
            Next →
          </button>

          {/* Question map */}
          <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', flex: 1 }}>
            {questions.map((_, qi) => (
              <button key={qi} onClick={() => setIndex(qi)} style={{
                width: 22, height: 22, borderRadius: 2,
                border: `1px solid ${qi === index ? 'var(--gold)' : answers[qi] !== null ? 'rgba(74,92,42,0.4)' : 'var(--border)'}`,
                background: qi === index ? 'var(--gold)' : answers[qi] !== null ? '#eef2e8' : 'white',
                cursor: 'pointer', fontSize: 9, fontWeight: 500,
                color: qi === index ? 'white' : answers[qi] !== null ? 'var(--olive)' : 'var(--ink-faint)',
                fontFamily: 'DM Mono, monospace',
              }}>
                {qi + 1}
              </button>
            ))}
          </div>

          <button onClick={submit} style={{ padding: '8px 20px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            Submit Exam
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
    const grade = pct >= 80 ? { label: 'A — Excellent', color: 'var(--olive)', bg: '#eef2e8' }
      : pct >= 70 ? { label: 'B — Good', color: '#3a6020', bg: '#eef2e8' }
      : pct >= 60 ? { label: 'C — Adequate', color: '#7a5010', bg: 'var(--gold-pale)' }
      : { label: 'D — Needs Work', color: 'var(--terracotta)', bg: '#f5eae6' }
    const wrong = questions.filter((q, i) => answers[i] !== q.correct)

    return (
      <div>
        <div style={{ marginBottom: 28 }}>
          <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>Exam Results</h1>
        </div>

        <div style={{ padding: '24px 28px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, marginBottom: 16 }}>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 72, fontWeight: 500, color: 'var(--ink)', lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 24, color: 'var(--ink-faint)', marginBottom: 8 }}>/ {questions.length}</div>
            <div style={{ marginBottom: 10, padding: '5px 14px', background: grade.bg, color: grade.color, borderRadius: 2, fontSize: 14, fontWeight: 500 }}>
              {pct}% — {grade.label}
            </div>
          </div>
          <div style={{ height: 8, background: 'var(--border)', borderRadius: 4, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ width: `${pct}%`, height: '100%', background: pct >= 70 ? 'var(--olive)' : pct >= 60 ? 'var(--gold)' : 'var(--terracotta)', borderRadius: 4, transition: 'width 1s ease' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 10 }}>
            {Object.entries(byCategory).map(([cat, data]) => {
              const cp = Math.round((data.correct / data.total) * 100)
              return (
                <div key={cat} style={{ padding: '10px 12px', background: 'var(--parchment)', borderRadius: 2, border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>{cat}</div>
                  <div style={{ height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden', marginBottom: 4 }}>
                    <div style={{ width: `${cp}%`, height: '100%', background: cp >= 70 ? 'var(--olive)' : cp >= 60 ? 'var(--gold)' : 'var(--terracotta)', borderRadius: 2 }} />
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-faint)', fontFamily: 'DM Mono, monospace' }}>{data.correct}/{data.total} ({cp}%)</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Wrong answers review */}
        {wrong.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <button onClick={() => setShowReview(r => !r)} style={{
              width: '100%', textAlign: 'left', padding: '12px 16px',
              background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2,
              cursor: 'pointer', fontSize: 14, fontWeight: 500, color: 'var(--ink)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontFamily: 'DM Sans, sans-serif',
            }}>
              <span>Review {wrong.length} missed question{wrong.length !== 1 ? 's' : ''}</span>
              <span style={{ color: 'var(--ink-faint)', transform: showReview ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▾</span>
            </button>
            {showReview && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                {questions.map((q, i) => {
                  if (answers[i] === q.correct) return null
                  return (
                    <div key={q.id} style={{ padding: '14px 16px', background: 'white', border: '1px solid rgba(155,74,42,0.2)', borderRadius: 2 }}>
                      <div style={{ fontSize: 12, color: 'var(--ink-faint)', marginBottom: 4, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{q.category}</div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.5 }}>{q.question}</div>
                      {answers[i] !== null && (
                        <div style={{ fontSize: 12, color: 'var(--terracotta)', marginBottom: 3 }}>
                          ✗ Your answer: {q.options[answers[i]!]}
                        </div>
                      )}
                      <div style={{ fontSize: 12, color: 'var(--olive)', marginBottom: 8 }}>
                        ✓ Correct: {q.options[q.correct]}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.7, borderTop: '1px solid var(--border)', paddingTop: 8 }}>{q.explanation}</div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        <button onClick={() => setMode('setup')} style={{ padding: '10px 24px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 2, fontSize: 14, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
          Take Another Exam →
        </button>
      </div>
    )
  }
  return null
}

function ExamSetup({ onStart, total }: { onStart: (n: number, timed: boolean) => void; total: number }) {
  const [count, setCount] = useState(60)
  const [timed, setTimed] = useState(false)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Exam Simulator
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6 }}>
          Full exam conditions — {total} questions available. Navigate freely, skip and return, review missed questions at the end.
        </p>
      </div>

      <div style={{ background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, padding: '28px 32px', maxWidth: 480 }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>
            Number of Questions
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[20, 40, 60, 80].map(n => (
              <button key={n} onClick={() => setCount(n)} style={{
                padding: '8px 20px', border: '1px solid var(--border-strong)', borderRadius: 2,
                background: count === n ? 'var(--ink)' : 'white',
                color: count === n ? 'var(--parchment)' : 'var(--ink)',
                fontSize: 14, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: count === n ? 500 : 400,
              }}>
                {n}{n === 60 ? ' ← exam' : ''}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>
            Timer
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[false, true].map(t => (
              <button key={String(t)} onClick={() => setTimed(t)} style={{
                padding: '8px 18px', border: '1px solid var(--border-strong)', borderRadius: 2,
                background: timed === t ? 'var(--ink)' : 'white',
                color: timed === t ? 'var(--parchment)' : 'var(--ink)',
                fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: timed === t ? 500 : 400,
              }}>
                {t ? `Timed (${Math.round(count * 1.5)} min)` : 'Untimed'}
              </button>
            ))}
          </div>
          {timed && (
            <div style={{ marginTop: 8, fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.5 }}>
              90 seconds per question · Auto-submits when time runs out
            </div>
          )}
        </div>

        <div style={{ padding: '12px 14px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2, marginBottom: 24, fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
          <strong style={{ fontWeight: 500, color: 'var(--ink)' }}>Exam format reminder:</strong> The actual CLAS 104 final has 60 MC questions. All questions are drawn randomly from the {total}-question bank, shuffled each time.
        </div>

        <button onClick={() => onStart(count, timed)} style={{
          width: '100%', padding: '13px', background: 'var(--gold)', color: 'white', border: 'none',
          borderRadius: 2, fontSize: 14, fontWeight: 500, cursor: 'pointer',
          fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.04em',
        }}>
          Begin Exam →
        </button>
      </div>
    </div>
  )
}
