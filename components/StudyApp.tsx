'use client'

import { useState } from 'react'
import DashboardSection from './DashboardSection'
import FlashcardsSection from './FlashcardsSection'
import LongAnswerSection from './LongAnswerSection'
import HeroesSection from './HeroesSection'
import GodsSection from './GodsSection'
import SagasSection from './SagasSection'
import SourcesSection from './SourcesSection'
import TimelineSection from './TimelineSection'
import TheoriesSection from './TheoriesSection'
import QuizSection from './QuizSection'
import GlossarySection from './GlossarySection'
import NotesSection from './NotesSection'
import ConnectionsSection from './ConnectionsSection'
import ExamSection from './ExamSection'
import UnderworldSection from './UnderworldSection'
import CheatSheetSection from './CheatSheetSection'
import DeepDiveSection from './DeepDiveSection'

type Tab =
  | 'dashboard' | 'exam' | 'quiz' | 'flashcards' | 'longanswer'
  | 'deepdive' | 'notes' | 'connections'
  | 'gods' | 'heroes' | 'sagas' | 'underworld' | 'sources'
  | 'timeline' | 'theories' | 'glossary' | 'cheatsheet'

const NAV: { id: Tab; label: string; sub: string; group: string }[] = [
  { id: 'dashboard',   label: 'Dashboard',          sub: 'Overview & checklist',    group: 'Start Here' },
  { id: 'exam',        label: 'Exam Simulator',      sub: '80Q · timed option',      group: 'Practice'   },
  { id: 'quiz',        label: 'Practice Quiz',       sub: '80+ questions',           group: 'Practice'   },
  { id: 'flashcards',  label: 'Flashcards',           sub: '160+ cards · 11 decks',   group: 'Practice'   },
  { id: 'longanswer',  label: 'Long Answer',          sub: '16 model responses',      group: 'Practice'   },
  { id: 'deepdive',    label: 'Module Deep Dives',    sub: '13 modules from PDFs',    group: 'Practice'   },
  { id: 'notes',       label: 'Module Notes',         sub: '8 summaries',             group: 'Practice'   },
  { id: 'connections', label: 'Myth Connections',     sub: 'Cross-course links',      group: 'Practice'   },
  { id: 'gods',        label: 'Gods Reference',       sub: '17 deities + symbols',    group: 'Reference'  },
  { id: 'heroes',      label: 'Heroes',               sub: '14 full profiles',        group: 'Reference'  },
  { id: 'sagas',       label: 'Sagas',                sub: 'Trojan + Theban',         group: 'Reference'  },
  { id: 'underworld',  label: 'Three Underworlds',    sub: 'Homer · Vergil · Plato',  group: 'Reference'  },
  { id: 'sources',     label: 'Sources',              sub: '14 ancient authors',      group: 'Reference'  },
  { id: 'timeline',    label: 'History Timeline',     sub: '10 periods',              group: 'Reference'  },
  { id: 'theories',    label: 'Myth Theories',        sub: '8 frameworks',            group: 'Reference'  },
  { id: 'glossary',    label: 'Glossary',             sub: '26 key terms',            group: 'Reference'  },
  { id: 'cheatsheet',  label: 'Quick Reference',      sub: 'Print-ready summary',     group: 'Reference'  },
]

const GROUPS = ['Start Here', 'Practice', 'Reference']

export default function StudyApp() {
  const [active, setActive] = useState<Tab>('dashboard')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--parchment)' }}>

      {/* ── Sidebar ─────────────────────────────────── */}
      <aside style={{
        width: 220,
        flexShrink: 0,
        borderRight: '1px solid var(--border-strong)',
        background: 'var(--parchment-dark)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.15, marginBottom: 2 }}>
            CLAS 104
          </div>
          <div style={{ fontSize: 10, color: 'var(--ink-faint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Greco-Roman Mythology
          </div>
          <div style={{ width: 22, height: 1, background: 'var(--gold)', marginTop: 10 }} />
        </div>

        {/* Exam pill */}
        <div style={{ margin: '10px 10px 2px', padding: '7px 10px', background: 'var(--gold-pale)', border: '1px solid rgba(201,147,58,0.3)', borderRadius: 2, fontSize: 10, color: '#7a5010', lineHeight: 1.5 }}>
          <span style={{ fontWeight: 500 }}>Final: </span>60 MC + 4 of 15 paragraphs (6–7 sentences min)
        </div>

        {/* Nav */}
        <nav style={{ padding: '4px 8px 14px', flex: 1 }}>
          {GROUPS.map(group => (
            <div key={group}>
              <div style={{ fontSize: 9, color: 'var(--ink-faint)', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '11px 8px 4px', fontWeight: 500 }}>
                {group}
              </div>
              {NAV.filter(n => n.group === group).map(item => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '6px 9px', marginBottom: 1, borderRadius: 2,
                    border: active === item.id ? '1px solid var(--border-strong)' : '1px solid transparent',
                    background: active === item.id ? 'white' : 'transparent',
                    cursor: 'pointer', transition: 'all 0.15s',
                    boxShadow: active === item.id ? '0 1px 4px rgba(26,21,16,0.06)' : 'none',
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: active === item.id ? 500 : 400, color: active === item.id ? 'var(--ink)' : 'var(--ink-muted)', lineHeight: 1.2 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)', marginTop: 1 }}>{item.sub}</div>
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '10px 14px', borderTop: '1px solid var(--border)', fontSize: 10, color: 'var(--ink-faint)', lineHeight: 1.7 }}>
          University of Waterloo<br />
          Final Exam Study Guide
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────── */}
      <main style={{ flex: 1, minWidth: 0, padding: '36px 44px', maxWidth: 980 }}>
        {active === 'dashboard'   && <DashboardSection onNavigate={t => setActive(t as Tab)} />}
        {active === 'exam'        && <ExamSection />}
        {active === 'quiz'        && <QuizSection />}
        {active === 'flashcards'  && <FlashcardsSection />}
        {active === 'longanswer'  && <LongAnswerSection />}
        {active === 'deepdive'    && <DeepDiveSection />}
        {active === 'notes'       && <NotesSection />}
        {active === 'connections' && <ConnectionsSection />}
        {active === 'gods'        && <GodsSection />}
        {active === 'heroes'      && <HeroesSection />}
        {active === 'sagas'       && <SagasSection />}
        {active === 'underworld'  && <UnderworldSection />}
        {active === 'sources'     && <SourcesSection />}
        {active === 'timeline'    && <TimelineSection />}
        {active === 'theories'    && <TheoriesSection />}
        {active === 'glossary'    && <GlossarySection />}
        {active === 'cheatsheet'  && <CheatSheetSection />}
      </main>
    </div>
  )
}
