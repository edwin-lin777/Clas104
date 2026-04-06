'use client'

import { TIMELINE } from '@/lib/data'

export default function TimelineSection() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          History Timeline
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          10 historical periods — from Neolithic Greece to the Roman Empire — with mythological significance.
        </p>
      </div>

      {/* Key authors callout */}
      <div style={{
        padding: '16px 20px',
        background: 'white',
        border: '1px solid var(--border-strong)',
        borderRadius: 2,
        marginBottom: 32,
      }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12, fontWeight: 500 }}>
          Key Authors to Know
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
          {[
            { name: 'Hesiod', dates: 'c. 700 BCE', works: 'Theogony, Works & Days' },
            { name: 'Homer', dates: 'c. 750–700 BCE', works: 'Iliad, Odyssey' },
            { name: 'Pindar', dates: '518–438 BCE', works: 'Olympian Odes' },
            { name: 'Aeschylus', dates: '525–456 BCE', works: 'Oresteia, Prometheus Bound' },
            { name: 'Sophocles', dates: '496–406 BCE', works: 'Oedipus Rex, Antigone' },
            { name: 'Euripides', dates: '480–406 BCE', works: 'Medea, Helen, Hippolytus, Bacchae' },
            { name: 'Vergil', dates: '70–19 BCE', works: 'Aeneid (Roman founding myth)' },
            { name: 'Ovid', dates: '43 BCE–17 CE', works: 'Metamorphoses, Fasti' },
            { name: 'Apuleius', dates: 'c. 124–180 CE', works: 'Metamorphoses (Golden Ass)' },
          ].map(a => (
            <div key={a.name} style={{ padding: '8px 10px', background: 'var(--parchment)', borderRadius: 2, border: '1px solid var(--border)' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink)' }}>{a.name}</div>
              <div style={{ fontSize: 11, color: 'var(--gold)', marginBottom: 2 }}>{a.dates}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-faint)', lineHeight: 1.4 }}>{a.works}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 28 }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: 7,
          top: 8,
          bottom: 8,
          width: 1,
          background: 'linear-gradient(to bottom, var(--gold), var(--border))',
        }} />

        {TIMELINE.map((item, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 28 }}>
            {/* Dot */}
            <div style={{
              position: 'absolute',
              left: -24,
              top: 6,
              width: item.importance === 'high' ? 10 : 7,
              height: item.importance === 'high' ? 10 : 7,
              borderRadius: '50%',
              background: item.importance === 'high' ? 'var(--gold)' : 'var(--parchment-dark)',
              border: `2px solid ${item.importance === 'high' ? 'var(--gold)' : 'var(--border-strong)'}`,
            }} />

            <div style={{
              padding: '14px 16px',
              background: 'white',
              border: `1px solid ${item.importance === 'high' ? 'var(--border-strong)' : 'var(--border)'}`,
              borderRadius: 2,
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: 11,
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}>
                  {item.date}
                </span>
                {item.importance === 'high' && (
                  <span style={{
                    fontSize: 9,
                    padding: '1px 6px',
                    background: 'var(--gold-pale)',
                    color: '#7a5010',
                    borderRadius: 1,
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    Key Period
                  </span>
                )}
              </div>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 17,
                fontWeight: 500,
                color: 'var(--ink)',
                marginBottom: 6,
                lineHeight: 1.3,
              }}>
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
