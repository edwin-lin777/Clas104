'use client'

import { CHEAT_SHEET } from '@/lib/data2'

export default function CheatSheetSection() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
              Quick Reference
            </h1>
            <p style={{ marginTop: 6, color: 'var(--ink-faint)', fontSize: 14 }}>
              Everything on one page — print this before your exam.
            </p>
          </div>
          <button
            onClick={() => window.print()}
            style={{
              padding: '8px 18px',
              background: 'var(--ink)',
              color: 'var(--parchment)',
              border: 'none',
              borderRadius: 2,
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Print / Save PDF
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* Greek → Roman equivalents */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, gridColumn: '1 / -1' }}>
          <SectionHead>Greek → Roman Equivalents</SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4 }}>
            {CHEAT_SHEET.romans.map(r => (
              <div key={r.greek} style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '5px 8px', background: 'var(--parchment)', borderRadius: 2, border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', fontFamily: 'Cormorant Garamond, serif' }}>{r.greek}</span>
                <span style={{ color: 'var(--gold)', fontSize: 11 }}>→</span>
                <span style={{ fontSize: 11, color: 'var(--ink-muted)' }}>{r.roman}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Twelve Labors */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
          <SectionHead>The Twelve Labors of Heracles</SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {CHEAT_SHEET.labors.map((l, i) => (
              <div key={i} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', padding: '4px 0' }}>
                <span style={{ flexShrink: 0, width: 16, height: 16, borderRadius: '50%', background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 500, color: 'var(--gold)', marginTop: 2, fontFamily: 'DM Mono, monospace' }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.4 }}>{l.replace(/^\d+\. /, '')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Five Ages */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2 }}>
          <SectionHead>Five Ages of Humanity (Hesiod)</SectionHead>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {CHEAT_SHEET.fiveAges.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '7px 10px', background: 'var(--parchment)', borderRadius: 2, border: '1px solid var(--border)' }}>
                <span style={{ flexShrink: 0, width: 14, height: 14, borderRadius: '50%', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, color: 'white', fontWeight: 500, marginTop: 2 }}>
                  {i + 1}
                </span>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{a.age} Age</span>
                  <span style={{ fontSize: 11, color: 'var(--ink-faint)', marginLeft: 6 }}>({a.ruler})</span>
                  <div style={{ fontSize: 11, color: 'var(--ink-muted)', lineHeight: 1.4, marginTop: 1 }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 8, padding: '6px 10px', background: 'var(--gold-pale)', borderRadius: 2, fontSize: 11, color: '#7a5010' }}>
            Note: Ovid has only 4 ages — no Age of Heroes
          </div>
        </div>

        {/* Authors */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, gridColumn: '1 / -1' }}>
          <SectionHead>Key Authors & Works</SectionHead>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr>
                  {['Author', 'Date', 'Language', 'Key Works'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '6px 10px', fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-faint)', borderBottom: '1px solid var(--border-strong)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CHEAT_SHEET.authors.map((a, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '7px 10px', fontWeight: 500, color: 'var(--ink)', fontFamily: 'Cormorant Garamond, serif', fontSize: 14 }}>{a.name}</td>
                    <td style={{ padding: '7px 10px', color: 'var(--gold)', fontFamily: 'DM Mono, monospace', fontSize: 11 }}>{a.date}</td>
                    <td style={{ padding: '7px 10px', color: 'var(--ink-muted)' }}>{a.lang}</td>
                    <td style={{ padding: '7px 10px', color: 'var(--ink-muted)', lineHeight: 1.5 }}>{a.works}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Theories */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, gridColumn: '1 / -1' }}>
          <SectionHead>Myth Theories at a Glance</SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {CHEAT_SHEET.theories.map(t => (
              <div key={t.name} style={{ padding: '9px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)', marginBottom: 2 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: 'var(--gold)', marginBottom: 3, fontStyle: 'italic' }}>{t.thinker}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{t.claim}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key vocabulary */}
        <div style={{ padding: '16px 18px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, gridColumn: '1 / -1' }}>
          <SectionHead>Essential Greek Vocabulary</SectionHead>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {[
              { term: 'Kleos', def: 'Glory / imperishable fame' },
              { term: 'Nostos', def: 'Homecoming journey' },
              { term: 'Timê', def: 'Honor / social worth' },
              { term: 'Hubris', def: 'Arrogant overreach against gods' },
              { term: 'Nemesis', def: 'Divine retributive justice' },
              { term: 'Xenia', def: 'Guest-friendship obligation' },
              { term: 'Pietas', def: 'Roman: duty to gods/family/state' },
              { term: 'Menis', def: 'Divine/heroic wrath (first word of Iliad)' },
              { term: 'Aitia', def: 'Cause — root of "etiology"' },
              { term: 'Psychopompos', def: 'Guide of souls (= Hermes)' },
              { term: 'Dactylic hexameter', def: 'Meter of Greek/Latin epic (6 feet)' },
              { term: 'In medias res', def: 'Beginning in the middle' },
              { term: 'Catharsis', def: 'Aristotle: purging of pity and fear' },
              { term: 'Spartoi', def: 'Sown men — warriors from dragon\'s teeth' },
              { term: 'Epigoni', def: 'Sons of Seven Against Thebes' },
            ].map(v => (
              <div key={v.term} style={{ display: 'flex', gap: 8, padding: '5px 8px', background: 'var(--parchment)', borderRadius: 2, border: '1px solid var(--border)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 14, fontWeight: 500, color: 'var(--ink)', flexShrink: 0 }}>{v.term}</span>
                <span style={{ fontSize: 11, color: 'var(--ink-faint)', lineHeight: 1.4 }}>{v.def}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: 10,
      letterSpacing: '0.09em',
      textTransform: 'uppercase',
      color: 'var(--ink-faint)',
      fontWeight: 500,
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: '1px solid var(--border)',
    }}>
      {children}
    </div>
  )
}
