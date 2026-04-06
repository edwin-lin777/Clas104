'use client'

import { useState, useCallback } from 'react'
import { MODULE_DEEP_DIVES, MODULE_QUIZ, UNITS, type ModuleDeepDive, type UnitInfo } from '@/lib/data3'
import type { QuizQuestion } from '@/lib/data2'

const COLOR = {
  gold:  { accent: 'var(--gold)',        badge: { bg: 'var(--gold-pale)',  color: '#7a5010',        border: 'rgba(201,147,58,0.3)'  } },
  terra: { accent: 'var(--terracotta)',  badge: { bg: '#f5eae6',           color: 'var(--terracotta)', border: 'rgba(155,74,42,0.2)' } },
  olive: { accent: 'var(--olive)',       badge: { bg: '#eef2e8',           color: 'var(--olive)',   border: 'rgba(74,92,42,0.2)'    } },
  slate: { accent: 'var(--slate)',       badge: { bg: '#e8ecf0',           color: 'var(--slate)',   border: 'rgba(42,53,69,0.2)'    } },
}

type View = { type: 'unit'; unit: number } | { type: 'module'; code: string }
type QuizState = 'idle' | 'active' | 'done'

export default function DeepDiveSection() {
  const [view, setView] = useState<View>({ type: 'unit', unit: 1 })
  const [openSection, setOpenSection] = useState<number | null>(0)
  const [quizState, setQuizState] = useState<QuizState>('idle')
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const activeModule = view.type === 'module'
    ? MODULE_DEEP_DIVES.find(m => m.code === view.code) ?? null
    : null
  const activeUnit = UNITS.find(u => u.unit === (view.type === 'unit' ? view.unit : parseInt(view.code[0])))
  const moduleQs = activeModule ? MODULE_QUIZ.filter(q => q.category === activeModule.code) : []
  const cm = activeModule ? COLOR[activeModule.color] : COLOR.gold

  const startQuiz = useCallback(() => {
    setQuizState('active')
    setQuizIndex(0)
    setSelected(null)
    setConfirmed(false)
    setAnswers(new Array(moduleQs.length).fill(null))
  }, [moduleQs.length])

  const confirmAnswer = useCallback(() => {
    if (selected === null) return
    const next = [...answers]; next[quizIndex] = selected
    setAnswers(next); setConfirmed(true)
  }, [selected, answers, quizIndex])

  const nextQuestion = useCallback(() => {
    if (quizIndex < moduleQs.length - 1) {
      setQuizIndex(i => i + 1); setSelected(null); setConfirmed(false)
    } else { setQuizState('done') }
  }, [quizIndex, moduleQs.length])

  const exitQuiz = useCallback(() => {
    setQuizState('idle'); setSelected(null); setConfirmed(false)
  }, [])

  const openModule = (code: string) => {
    setView({ type: 'module', code })
    setOpenSection(0)
    setQuizState('idle')
  }

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Module Deep Dives
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14, lineHeight: 1.6, maxWidth: 600 }}>
          Detailed notes extracted from your course PDFs, organised by unit. Upload new PDFs to unlock Units 2–4.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '196px 1fr', gap: 16, alignItems: 'start' }}>

        {/* ── Sidebar ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 20 }}>
          {UNITS.map(unit => {
            const unitModules = MODULE_DEEP_DIVES.filter(m => m.code.startsWith(String(unit.unit)))
            const isActiveUnit = view.type === 'unit' && view.unit === unit.unit
            const currentModCode = view.type === 'module' ? view.code : null
            const isExpanded = currentModCode?.startsWith(String(unit.unit)) || isActiveUnit

            return (
              <div key={unit.unit}>
                {/* Unit header button */}
                <button
                  onClick={() => setView({ type: 'unit', unit: unit.unit })}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '8px 10px', marginBottom: 2, borderRadius: 2,
                    border: isActiveUnit ? '1px solid var(--border-strong)' : '1px solid var(--border)',
                    background: isActiveUnit ? 'white' : unit.uploaded ? 'var(--parchment)' : 'var(--parchment-dark)',
                    cursor: 'pointer', transition: 'all 0.15s',
                    boxShadow: isActiveUnit ? '0 1px 4px rgba(26,21,16,0.06)' : 'none',
                    opacity: unit.uploaded ? 1 : 0.7,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 9, fontWeight: 700,
                      background: unit.uploaded ? 'var(--gold)' : 'var(--border-strong)',
                      color: unit.uploaded ? 'white' : 'var(--ink-faint)',
                    }}>
                      {unit.unit}
                    </span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: unit.uploaded ? 'var(--ink)' : 'var(--ink-faint)', letterSpacing: '0.03em' }}>
                      {unit.title}
                    </span>
                    {!unit.uploaded && (
                      <span style={{ marginLeft: 'auto', fontSize: 9, color: 'var(--ink-faint)', fontStyle: 'italic' }}>soon</span>
                    )}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)', paddingLeft: 24 }}>
                    {unit.modules.length} modules
                    {unit.uploaded ? '' : ' · not yet uploaded'}
                  </div>
                </button>

                {/* Module list under this unit (only if expanded) */}
                {(isExpanded || isActiveUnit) && unit.uploaded && unitModules.map(mod => {
                  const isActiveMod = view.type === 'module' && view.code === mod.code
                  const mc = COLOR[mod.color]
                  const qCount = MODULE_QUIZ.filter(q => q.category === mod.code).length
                  return (
                    <button
                      key={mod.code}
                      onClick={() => openModule(mod.code)}
                      style={{
                        width: '100%', textAlign: 'left',
                        padding: '6px 10px 6px 24px', marginBottom: 1, borderRadius: 2,
                        border: isActiveMod ? '1px solid var(--border-strong)' : '1px solid transparent',
                        background: isActiveMod ? 'white' : 'transparent',
                        cursor: 'pointer', transition: 'all 0.15s',
                        borderLeft: isActiveMod ? `3px solid ${mc.accent}` : '1px solid transparent',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: isActiveMod ? mc.badge.color : 'var(--ink-faint)', fontWeight: 500 }}>
                          {mod.code}
                        </span>
                        {mod.examWeight === 'high' && (
                          <span style={{ fontSize: 9, background: '#f5eae6', color: 'var(--terracotta)', padding: '0 3px', borderRadius: 1, fontWeight: 500 }}>★</span>
                        )}
                        {qCount > 0 && (
                          <span style={{ fontSize: 9, background: '#e8ecf0', color: 'var(--slate)', padding: '0 3px', borderRadius: 1 }}>{qCount}Q</span>
                        )}
                      </div>
                      <div style={{ fontSize: 10, fontWeight: isActiveMod ? 500 : 400, color: isActiveMod ? 'var(--ink)' : 'var(--ink-muted)', lineHeight: 1.3 }}>
                        {mod.title.length > 26 ? mod.title.slice(0, 26) + '…' : mod.title}
                      </div>
                    </button>
                  )
                })}

                {/* Locked module placeholders */}
                {!unit.uploaded && unit.modules.map(m => (
                  <div key={m.code} style={{ padding: '5px 10px 5px 24px', marginBottom: 1, opacity: 0.45 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 1 }}>
                      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'var(--ink-faint)' }}>{m.code}</span>
                      <span style={{ fontSize: 9, color: 'var(--ink-faint)' }}>🔒</span>
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--ink-faint)', lineHeight: 1.3 }}>
                      {m.title.length > 26 ? m.title.slice(0, 26) + '…' : m.title}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}

          <div style={{ marginTop: 6, padding: '6px 8px', fontSize: 10, color: 'var(--ink-faint)', lineHeight: 1.6, borderTop: '1px solid var(--border)' }}>
            ★ High exam weight<br />
            #Q = quiz questions
          </div>
        </div>

        {/* ── Main content ── */}
        <div>

          {/* Unit overview view */}
          {view.type === 'unit' && activeUnit && (
            <UnitOverview
              unit={activeUnit}
              modules={MODULE_DEEP_DIVES.filter(m => m.code.startsWith(String(activeUnit.unit)))}
              onOpenModule={openModule}
            />
          )}

          {/* Module detail view */}
          {view.type === 'module' && activeModule && quizState === 'idle' && (
            <ModuleDetail
              module={activeModule}
              cm={cm}
              moduleQs={moduleQs}
              openSection={openSection}
              setOpenSection={setOpenSection}
              onStartQuiz={startQuiz}
            />
          )}

          {/* Quiz active */}
          {view.type === 'module' && activeModule && quizState === 'active' && moduleQs.length > 0 && (
            <ModuleQuiz
              module={activeModule}
              cm={cm}
              questions={moduleQs}
              index={quizIndex}
              selected={selected}
              confirmed={confirmed}
              onSelect={setSelected}
              onConfirm={confirmAnswer}
              onNext={nextQuestion}
              onExit={exitQuiz}
            />
          )}

          {/* Quiz results */}
          {view.type === 'module' && activeModule && quizState === 'done' && (
            <QuizResults
              module={activeModule}
              cm={cm}
              questions={moduleQs}
              answers={answers}
              onRetry={startQuiz}
              onExit={exitQuiz}
            />
          )}

        </div>
      </div>
    </div>
  )
}

// ─── Unit overview ─────────────────────────────────────────────────────────────

function UnitOverview({ unit, modules, onOpenModule }: {
  unit: UnitInfo
  modules: ModuleDeepDive[]
  onOpenModule: (code: string) => void
}) {
  const totalQ = modules.reduce((a, m) => a + MODULE_QUIZ.filter(q => q.category === m.code).length, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Header */}
      <div style={{
        padding: '22px 26px',
        background: 'white',
        border: '1px solid var(--border-strong)',
        borderRadius: 2,
        borderTop: unit.uploaded ? '3px solid var(--gold)' : '3px solid var(--border-strong)',
      }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 10, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: unit.uploaded ? 'var(--gold)' : 'var(--border-strong)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 700,
            color: unit.uploaded ? 'white' : 'var(--ink-faint)',
            flexShrink: 0,
          }}>
            {unit.unit}
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
            Unit {unit.unit} — {unit.title}
          </h2>
          {unit.uploaded ? (
            <span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 500, background: '#eef2e8', color: 'var(--olive)', borderRadius: 1, border: '1px solid rgba(74,92,42,0.2)' }}>
              ✓ Uploaded
            </span>
          ) : (
            <span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 500, background: 'var(--parchment)', color: 'var(--ink-faint)', borderRadius: 1, border: '1px solid var(--border)' }}>
              Not yet uploaded
            </span>
          )}
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.7, margin: 0 }}>
          {unit.description}
        </p>
        {unit.uploaded && (
          <div style={{ display: 'flex', gap: 16, marginTop: 14 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>
              <strong style={{ color: 'var(--ink)' }}>{unit.modules.length}</strong> modules
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>
              <strong style={{ color: 'var(--ink)' }}>{totalQ}</strong> quiz questions
            </div>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>
              <strong style={{ color: 'var(--ink)' }}>{modules.reduce((a, m) => a + m.sections.length, 0)}</strong> sections
            </div>
          </div>
        )}
      </div>

      {/* Module cards */}
      {unit.uploaded ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {modules.map(mod => {
            const mc = COLOR[mod.color]
            const qCount = MODULE_QUIZ.filter(q => q.category === mod.code).length
            return (
              <button
                key={mod.code}
                onClick={() => onOpenModule(mod.code)}
                style={{
                  textAlign: 'left', padding: '16px 20px',
                  background: 'white', border: '1px solid var(--border)',
                  borderRadius: 2, cursor: 'pointer',
                  borderLeft: `3px solid ${mc.accent}`,
                  transition: 'all 0.15s',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: mc.badge.color, fontWeight: 500 }}>
                      {mod.code}
                    </span>
                    <span style={{ padding: '1px 6px', fontSize: 9, background: mc.badge.bg, color: mc.badge.color, border: `1px solid ${mc.badge.border}`, borderRadius: 1, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {mod.examWeight === 'high' ? '★ High weight' : 'Medium weight'}
                    </span>
                    {qCount > 0 && (
                      <span style={{ padding: '1px 6px', fontSize: 9, background: '#e8ecf0', color: 'var(--slate)', borderRadius: 1 }}>
                        {qCount} quiz questions
                      </span>
                    )}
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.2 }}>
                    {mod.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.6 }}>
                    {mod.coreArgument.slice(0, 130)}…
                  </div>
                </div>
                <div style={{ color: 'var(--gold)', fontSize: 18, marginTop: 2, flexShrink: 0 }}>→</div>
              </button>
            )
          })}
        </div>
      ) : (
        <div style={{ padding: '28px 24px', background: 'white', border: '1px solid var(--border)', borderRadius: 2, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'var(--ink-faint)', marginBottom: 12 }}>
            Unit {unit.unit} not yet uploaded
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-faint)', lineHeight: 1.7, marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
            Upload your Unit {unit.unit} PDFs and the deep dives, per-module quizzes, and exam tips will be added automatically.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 340, margin: '0 auto' }}>
            {unit.modules.map(m => (
              <div key={m.code} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2, opacity: 0.65 }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 10, color: 'var(--ink-faint)', width: 24, flexShrink: 0 }}>{m.code}</span>
                <span style={{ fontSize: 12, color: 'var(--ink-faint)' }}>🔒 {m.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Module detail ─────────────────────────────────────────────────────────────

function ModuleDetail({ module: mod, cm, moduleQs, openSection, setOpenSection, onStartQuiz }: {
  module: ModuleDeepDive
  cm: typeof COLOR['gold']
  moduleQs: QuizQuestion[]
  openSection: number | null
  setOpenSection: (i: number | null) => void
  onStartQuiz: () => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, borderTop: `3px solid ${cm.accent}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 11, color: cm.badge.color, fontWeight: 500 }}>Module {mod.code}</span>
          <span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 500, letterSpacing: '0.07em', textTransform: 'uppercase', background: cm.badge.bg, color: cm.badge.color, border: `1px solid ${cm.badge.border}`, borderRadius: 1 }}>
            {mod.examWeight === 'high' ? 'High Exam Weight' : 'Medium Exam Weight'}
          </span>
          {moduleQs.length > 0 && (
            <button onClick={onStartQuiz} style={{ marginLeft: 'auto', padding: '5px 14px', background: cm.badge.bg, color: cm.badge.color, border: `1px solid ${cm.badge.border}`, borderRadius: 2, fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
              Quiz this module ({moduleQs.length}Q) →
            </button>
          )}
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500, color: 'var(--ink)', margin: '0 0 10px', lineHeight: 1.2 }}>
          {mod.title}
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ink-muted)', lineHeight: 1.75, margin: 0, fontStyle: 'italic', borderLeft: `3px solid ${cm.accent}`, paddingLeft: 14 }}>
          {mod.coreArgument}
        </p>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {mod.sections.map((sec, i) => {
          const isOpen = openSection === i
          return (
            <div key={i} style={{ border: `1px solid ${isOpen ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 2, background: 'white', overflow: 'hidden' }}>
              <button onClick={() => setOpenSection(isOpen ? null : i)} style={{ width: '100%', textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer', padding: '13px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.3 }}>{sec.heading}</span>
                <span style={{ flexShrink: 0, fontSize: 14, color: 'var(--ink-faint)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', marginTop: 2 }}>+</span>
              </button>
              <div className={`accordion-body${isOpen ? ' open' : ''}`}>
                <div style={{ padding: '0 18px 18px', borderTop: '1px solid var(--border)' }}>
                  <p style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.85, marginTop: 14, marginBottom: sec.examTip ? 14 : 0 }}>{sec.content}</p>
                  {sec.examTip && (
                    <div style={{ padding: '10px 14px', background: 'var(--gold-pale)', border: '1px solid rgba(201,147,58,0.3)', borderRadius: 2, borderLeft: '3px solid var(--gold)' }}>
                      <div style={{ fontSize: 9, letterSpacing: '0.09em', textTransform: 'uppercase', color: '#7a5010', fontWeight: 500, marginBottom: 4 }}>Exam Tip</div>
                      <div style={{ fontSize: 12, color: '#6a4808', lineHeight: 1.7 }}>{sec.examTip}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Key Terms */}
      <div style={{ padding: '16px 20px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>Key Terms</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {mod.keyTerms.map(kt => (
            <div key={kt.term} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, fontWeight: 500, color: cm.badge.color, flexShrink: 0, minWidth: 130 }}>{kt.term}</span>
              <span style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{kt.definition}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Must Know */}
      <div style={{ padding: '16px 20px', background: 'var(--parchment)', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>Must Know for Exam</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {mod.mustKnow.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, color: cm.accent, fontSize: 13, marginTop: 1 }}>✓</span>
              <span style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Likely Questions */}
      <div style={{ padding: '16px 20px', background: 'white', border: `1px solid ${cm.badge.border}`, borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: cm.badge.color, fontWeight: 500, marginBottom: 12 }}>Likely Exam Questions</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {mod.likelyQuestions.map((q, i) => (
            <div key={i} style={{ padding: '10px 14px', background: cm.badge.bg, border: `1px solid ${cm.badge.border}`, borderRadius: 2 }}>
              <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.6 }}>
                <span style={{ fontWeight: 500, color: cm.badge.color, marginRight: 6 }}>Q{i + 1}.</span>{q}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz CTA */}
      {moduleQs.length > 0 && (
        <div style={{ padding: '16px 20px', background: cm.badge.bg, border: `1px solid ${cm.badge.border}`, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 3 }}>Test yourself on Module {mod.code}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-faint)' }}>{moduleQs.length} questions from your course PDF</div>
          </div>
          <button onClick={onStartQuiz} style={{ flexShrink: 0, padding: '8px 20px', background: cm.accent, color: 'white', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            Start Quiz →
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Module Quiz ───────────────────────────────────────────────────────────────

function ModuleQuiz({ module: mod, cm, questions, index, selected, confirmed, onSelect, onConfirm, onNext, onExit }: {
  module: ModuleDeepDive; cm: typeof COLOR['gold']
  questions: QuizQuestion[]
  index: number; selected: number | null; confirmed: boolean
  onSelect: (i: number) => void; onConfirm: () => void; onNext: () => void; onExit: () => void
}) {
  const q = questions[index]
  const isCorrect = confirmed && selected === q.correct
  const pct = Math.round(((index + 1) / questions.length) * 100)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
        <span style={{ fontSize: 11, color: 'var(--ink-faint)', fontFamily: 'DM Mono, monospace' }}>Module {mod.code} · {index + 1}/{questions.length}</span>
        <div style={{ flex: 1, height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: cm.accent, borderRadius: 2, transition: 'width 0.3s' }} />
        </div>
        <button onClick={onExit} style={{ fontSize: 11, color: 'var(--ink-faint)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>✕ Exit</button>
      </div>

      <div style={{ padding: '20px 24px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 19, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.55, margin: 0 }}>{q.question}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {q.options.map((opt, i) => {
          let bg = 'white', border = 'var(--border-strong)', color = 'var(--ink)'
          if (confirmed) {
            if (i === q.correct) { bg = '#eef2e8'; border = 'rgba(74,92,42,0.4)'; color = 'var(--olive)' }
            else if (i === selected && i !== q.correct) { bg = '#f5eae6'; border = 'rgba(155,74,42,0.4)'; color = 'var(--terracotta)' }
          } else if (selected === i) { bg = cm.badge.bg; border = cm.badge.border }
          return (
            <button key={i} onClick={() => !confirmed && onSelect(i)} style={{ textAlign: 'left', padding: '11px 16px', border: `1px solid ${border}`, borderRadius: 2, background: bg, cursor: confirmed ? 'default' : 'pointer', display: 'flex', alignItems: 'flex-start', gap: 10, transition: 'all 0.12s' }}>
              <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: '50%', border: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 500, color, marginTop: 1 }}>{String.fromCharCode(65 + i)}</span>
              <span style={{ fontSize: 13, color, lineHeight: 1.5, flex: 1 }}>{opt}</span>
              {confirmed && i === q.correct && <span style={{ color: 'var(--olive)' }}>✓</span>}
              {confirmed && i === selected && i !== q.correct && <span style={{ color: 'var(--terracotta)' }}>✗</span>}
            </button>
          )
        })}
      </div>

      {confirmed && (
        <div style={{ padding: '12px 16px', background: isCorrect ? '#eef2e8' : '#f5eae6', border: `1px solid ${isCorrect ? 'rgba(74,92,42,0.25)' : 'rgba(155,74,42,0.25)'}`, borderRadius: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: isCorrect ? 'var(--olive)' : 'var(--terracotta)', fontWeight: 500, marginBottom: 5 }}>
            {isCorrect ? '✓ Correct' : '✗ Incorrect'} — Explanation
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.75 }}>{q.explanation}</div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        {!confirmed ? (
          <button onClick={onConfirm} disabled={selected === null} style={{ padding: '9px 22px', background: selected !== null ? cm.accent : 'var(--parchment-dark)', color: selected !== null ? 'white' : 'var(--ink-faint)', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: selected !== null ? 'pointer' : 'not-allowed', fontFamily: 'DM Sans, sans-serif' }}>
            Confirm Answer
          </button>
        ) : (
          <button onClick={onNext} style={{ padding: '9px 22px', background: 'var(--ink)', color: 'var(--parchment)', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {index < questions.length - 1 ? 'Next Question →' : 'See Results →'}
          </button>
        )}
        <button onClick={onExit} style={{ padding: '9px 14px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 12, cursor: 'pointer', color: 'var(--ink-muted)', fontFamily: 'DM Sans, sans-serif' }}>Exit</button>
      </div>
    </div>
  )
}

// ─── Quiz Results ──────────────────────────────────────────────────────────────

function QuizResults({ module: mod, cm, questions, answers, onRetry, onExit }: {
  module: ModuleDeepDive; cm: typeof COLOR['gold']
  questions: QuizQuestion[]
  answers: (number | null)[]
  onRetry: () => void; onExit: () => void
}) {
  const score = answers.filter((a, i) => a === questions[i]?.correct).length
  const pct = Math.round((score / questions.length) * 100)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ padding: '24px 28px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, color: 'var(--ink-faint)', marginBottom: 8 }}>Module {mod.code} Quiz — Complete</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 56, fontWeight: 500, color: 'var(--ink)', lineHeight: 1 }}>{score}</span>
          <span style={{ fontSize: 20, color: 'var(--ink-faint)' }}>/ {questions.length}</span>
          <span style={{ padding: '4px 12px', background: cm.badge.bg, color: cm.badge.color, borderRadius: 2, fontSize: 13, fontWeight: 500 }}>{pct}%</span>
        </div>
        <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ width: `${pct}%`, height: '100%', background: cm.accent, borderRadius: 3, transition: 'width 1s ease' }} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={onRetry} style={{ padding: '8px 18px', background: cm.accent, color: 'white', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Retry →</button>
          <button onClick={onExit} style={{ padding: '8px 14px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 12, cursor: 'pointer', color: 'var(--ink-muted)', fontFamily: 'DM Sans, sans-serif' }}>Back to notes</button>
        </div>
      </div>

      {questions.some((q, i) => answers[i] !== q.correct) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink)' }}>Missed Questions</div>
          {questions.map((q, i) => {
            if (answers[i] === q.correct) return null
            return (
              <div key={q.id} style={{ padding: '12px 16px', background: 'white', border: '1px solid rgba(155,74,42,0.2)', borderRadius: 2 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 6, lineHeight: 1.5 }}>{q.question}</div>
                {answers[i] !== null && <div style={{ fontSize: 12, color: 'var(--terracotta)', marginBottom: 3 }}>✗ {q.options[answers[i]!]}</div>}
                <div style={{ fontSize: 12, color: 'var(--olive)', marginBottom: 8 }}>✓ {q.options[q.correct]}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-faint)', lineHeight: 1.7 }}>{q.explanation}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
