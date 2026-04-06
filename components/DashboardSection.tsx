'use client'

import { DECKS, EXTRA_DECKS, PDF_DECKS } from '@/lib/data'
import { QUIZ_QUESTIONS, EXTRA_QUIZ, QUIZ_BANK_2, HEROES, EXTRA_HEROES, SOURCES, TROJAN_SAGA, THEBAN_SAGA, GLOSSARY } from '@/lib/data2'

const totalCards = [...DECKS, ...EXTRA_DECKS, ...PDF_DECKS].reduce((a, d) => a + d.cards.length, 0)
const totalQuiz  = QUIZ_QUESTIONS.length + EXTRA_QUIZ.length + QUIZ_BANK_2.length

const STATS = [
  { label: 'Flashcards',      value: totalCards,                                      sub: `${[...DECKS, ...EXTRA_DECKS, ...PDF_DECKS].length} decks`  },
  { label: 'Quiz Questions',  value: totalQuiz,                                       sub: '80+ MC · fully explained'                                   },
  { label: 'Hero Profiles',   value: HEROES.length + EXTRA_HEROES.length,            sub: 'Greek + Trojan + Roman'                                      },
  { label: 'Ancient Sources', value: SOURCES.length,                                  sub: 'Authors, works, exam content'                               },
  { label: 'Saga Events',     value: TROJAN_SAGA.length + THEBAN_SAGA.length,        sub: 'Trojan + Theban, sequenced'                                  },
  { label: 'Glossary Terms',  value: GLOSSARY.length,                                 sub: 'With pronunciation & examples'                              },
]

const EXAM_TIPS = [
  { heading: 'Breadth over depth', body: 'The MC has 60 questions spanning all 12 modules. Cover everything once rather than mastering a few topics.' },
  { heading: 'Name your sources', body: 'For paragraph questions, always cite the specific author and work. "In Ovid\'s Metamorphoses" beats "in a myth."' },
  { heading: 'Know the narrative', body: 'Several questions ask you to narrate a myth. Practice telling Oedipus, Orpheus, Cupid & Psyche, the Trojan War in your own words.' },
  { heading: 'Connect theories to myths', body: 'For theory questions, each approach needs one specific Greco-Roman example — e.g. Etiology → Homeric Hymn to Demeter → Eleusinian Mysteries.' },
]

const CHECKLIST = [
  {
    group: 'Gods & Goddesses', color: 'var(--gold)',
    items: [
      'All 12 Olympians + Roman equivalents',
      'Domains, symbols, and key myths for each',
      'Three virgin goddesses and why they matter (Aphrodite)',
      'Zeus: succession myth, Dodona, justice, affairs (Danae, Europa, Io)',
      'Apollo: Delphi, Delos, Pythia, key love myths (Daphne, Hyacinthus, Coronis)',
      'Artemis: virginity, Actaeon, Callisto, Orion, Brauron/Arkteia',
      'Aphrodite: Homeric Hymn, Anchises, Adonis, Pygmalion, Hippolytus',
      'Athena: birth, Arachne, Tiresias, Odysseus, Athens/Parthenon',
    ],
  },
  {
    group: 'Heroes', color: 'var(--terracotta)',
    items: [
      'Heracles: 12 Labors (list from memory), death, apotheosis',
      'Achilles: kleos, menis, choice, Patroclus, death at Troy',
      'Odysseus: nostos, cunning, Book 11 (Land of Dead), return',
      'Oedipus: prophecy, Sphinx, discovery, blinding, exile',
      'Aeneas: pietas, underworld, founding of Rome',
      'Perseus, Theseus, Jason — key deeds and significance',
    ],
  },
  {
    group: 'Major Myths', color: 'var(--olive)',
    items: [
      'First & Second Succession Myths (Hesiod, Theogony)',
      'Prometheus & Pandora — full narratives',
      'Five Ages of Humanity (Gold → Iron, Ovid\'s four)',
      'Cupid and Psyche — four tasks, resolution, significance',
      'Orpheus and Eurydice — descent, condition, failure, death',
      'Judgment of Paris — three goddesses, three bribes, consequences',
    ],
  },
  {
    group: 'Trojan War', color: 'var(--slate)',
    items: [
      'Root causes: Apple of Eris → Judgment → abduction of Helen',
      'God alignments: Greek supporters vs. Trojan supporters',
      'Iliad: in medias res, structure, Achilles\' arc, Hector\'s death',
      'Key events in order through to the Fall of Troy',
      'Consequences: Agamemnon\'s murder, Odyssey, Aeneid',
      'Euripides\' Helen — the revisionist tradition',
    ],
  },
  {
    group: 'Theban Saga', color: 'var(--gold)',
    items: [
      'Cadmus: founding of Thebes, dragon\'s teeth, Spartoi',
      'Semele and the birth of Dionysus (twice-born)',
      'Pentheus and the Bacchae (Euripides)',
      'Oedipus: full myth — prophecy → crossroads → Sphinx → discovery → exile',
      'Antigone: divine vs. human law (Sophocles)',
      'Seven Against Thebes, Epigoni, Amphiaraus swallowed by earth',
      'Tantalus, Pelops, the curse on the House of Atreus',
    ],
  },
  {
    group: 'Underworld & Afterlife', color: 'var(--terracotta)',
    items: [
      'Homer Odyssey 11: neutral, no moral judgment',
      'Vergil Aeneid 6: Tartarus / Elysium / Lethe — golden bough',
      'Plato Myth of Er: reincarnation, 10× punishment/reward',
      'Key figures: Charon, Cerberus, Tantalus, Sisyphus, Tityos',
      'Compare Homer vs. Vergil vs. Plato on justice after death',
    ],
  },
  {
    group: 'Authors & Sources', color: 'var(--olive)',
    items: [
      'Hesiod: Theogony + Works and Days — know both',
      'Homer: Iliad + Odyssey — dactylic hexameter',
      'Homeric Hymns: Apollo, Aphrodite, Demeter, Hermes',
      'Three tragedians: Aeschylus, Sophocles, Euripides + key plays',
      'Vergil: Aeneid; Ovid: Metamorphoses; Apuleius: Cupid & Psyche + Isis',
      'Pindar: Olympian Odes — Tantalus alternative punishment',
    ],
  },
  {
    group: 'Myth Theories', color: 'var(--slate)',
    items: [
      'Etiology: aitia = cause; with example (Demeter hymn → Eleusis)',
      'Freud: Oedipus complex, myth as waking dream',
      'Jung: collective unconscious, archetypes',
      'Frazer: myth + ritual inseparable; Malinowski: cultural particularity',
      'Lévi-Strauss: binary opposites (raw/cooked, mortal/immortal)',
      'Burkert: synthesis; Feminist approaches — Pandora, Actaeon',
    ],
  },
]

interface DashboardProps {
  onNavigate: (tab: string) => void
}

export default function DashboardSection({ onNavigate }: DashboardProps) {
  return (
    <div>
      {/* ── Hero header ─────────────────────────── */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 12 }}>
          University of Waterloo · CLAS 104
        </div>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 44,
          fontWeight: 500,
          color: 'var(--ink)',
          margin: '0 0 10px',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>
          Greco-Roman<br />Mythology
        </h1>
        <p style={{ color: 'var(--ink-faint)', fontSize: 15, margin: 0, lineHeight: 1.65, maxWidth: 520 }}>
          Complete final exam study guide. Every section of the course, every major myth, every key author — organized for efficient review.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 13, color: 'var(--ink-muted)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>60</strong> multiple choice questions
          </div>
          <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 13, color: 'var(--ink-muted)' }}>
            <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>4 of 15</strong> paragraph questions
          </div>
          <div style={{ padding: '8px 16px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 13, color: 'var(--ink-muted)' }}>
            Min <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>6–7</strong> sentences each
          </div>
        </div>
      </div>

      {/* ── Stat grid ─────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 32 }}>
        {STATS.map(s => (
          <div key={s.label} style={{
            padding: '16px 18px',
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 2,
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 34,
              fontWeight: 500,
              color: 'var(--ink)',
              lineHeight: 1,
              marginBottom: 6,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Quick-start buttons ─────────────────── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>
          Start Studying
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate('exam')}
            style={{ padding: '10px 20px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: 2, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
          >
            Exam Simulator →
          </button>
          {[
            { tab: 'quiz',        label: 'Practice Quiz'     },
            { tab: 'flashcards',  label: 'Flashcards'        },
            { tab: 'longanswer',  label: 'Long Answer'       },
            { tab: 'gods',        label: 'God Reference'     },
            { tab: 'sagas',       label: 'The Sagas'         },
            { tab: 'underworld',  label: 'Three Underworlds' },
            { tab: 'cheatsheet',  label: 'Quick Reference'   },
          ].map(l => (
            <button
              key={l.tab}
              onClick={() => onNavigate(l.tab)}
              style={{ padding: '10px 14px', background: 'white', color: 'var(--ink)', border: '1px solid var(--border-strong)', borderRadius: 2, fontSize: 13, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontWeight: 400 }}
            >
              {l.label} →
            </button>
          ))}
        </div>
      </div>

      {/* ── Exam tips ──────────────────────────────── */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 12 }}>
          Exam Strategy
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {EXAM_TIPS.map(t => (
            <div key={t.heading} style={{ padding: '14px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 500, color: 'var(--ink)', marginBottom: 6 }}>
                {t.heading}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.65 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Master checklist ───────────────────────── */}
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 16 }}>
          Complete Exam Checklist — Work Through Before the Exam
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {CHECKLIST.map(group => (
            <div key={group.group} style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 12,
                paddingBottom: 10,
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ width: 3, height: 16, background: group.color, borderRadius: 2, flexShrink: 0 }} />
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>
                  {group.group}
                </div>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {group.items.map(item => (
                  <li key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{
                      flexShrink: 0,
                      width: 14,
                      height: 14,
                      border: '1px solid var(--border-strong)',
                      borderRadius: 2,
                      marginTop: 3,
                      display: 'block',
                      cursor: 'pointer',
                    }} />
                    <span style={{ fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
