'use client'

import { useState } from 'react'
import { TROJAN_SAGA } from '@/lib/data2'
import ThebanSagaSection from './ThebanSagaSection'

export default function SagasSection() {
  const [saga, setSaga] = useState<'trojan' | 'theban'>('trojan')

  return (
    <div>
      {/* Saga switcher */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
        {(['trojan', 'theban'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSaga(s)}
            style={{
              padding: '8px 20px',
              border: '1px solid var(--border-strong)',
              borderRadius: 2,
              background: saga === s ? 'var(--ink)' : 'white',
              color: saga === s ? 'var(--parchment)' : 'var(--ink-muted)',
              fontSize: 14,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: saga === s ? 500 : 400,
              transition: 'all 0.15s',
            }}
          >
            {s === 'trojan' ? 'Trojan Saga' : 'Theban Saga'}
          </button>
        ))}
      </div>

      {saga === 'trojan' && <TrojanSaga />}
      {saga === 'theban' && <ThebanSagaSection />}
    </div>
  )
}

function TrojanSaga() {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          The Trojan Saga
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          15 sequential events from the apple of Eris to Odysseus's homecoming. Know the order, characters, and significance of each.
        </p>
      </div>

      {/* Context box */}
      <div style={{ padding: '16px 20px', background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, marginBottom: 28 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 12 }}>
          Key Sources for the Trojan Saga
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 8 }}>
          {[
            { work: 'Homer, Iliad', coverage: "Years 9–10; Achilles' wrath; Hector's death" },
            { work: 'Homer, Odyssey', coverage: "Odysseus's 10-year return; the nostoi" },
            { work: 'Aeschylus, Oresteia', coverage: "Agamemnon's murder; Orestes' revenge" },
            { work: 'Vergil, Aeneid', coverage: "Aeneas's escape; Fall of Troy; Rome founded" },
            { work: 'Euripides, Helen', coverage: 'Alternative: phantom Helen in Troy; real Helen in Egypt' },
            { work: 'Post-Homeric tradition', coverage: 'Judgment of Paris; Trojan Horse; death of Achilles' },
          ].map(s => (
            <div key={s.work} style={{ padding: '8px 10px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--ink)', fontFamily: 'Cormorant Garamond, serif' }}>{s.work}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 2, lineHeight: 1.4 }}>{s.coverage}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div style={{ position: 'relative', paddingLeft: 36 }}>
        <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 1, background: 'linear-gradient(to bottom, var(--gold), var(--border))' }} />

        {TROJAN_SAGA.map((event, i) => (
          <div key={i} style={{ position: 'relative', marginBottom: 14 }}>
            <div style={{
              position: 'absolute', left: -26, top: 14,
              width: 18, height: 18, borderRadius: '50%',
              background: 'var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 500, color: 'white',
              fontFamily: 'DM Mono, monospace',
            }}>
              {event.order}
            </div>

            <div style={{ padding: '14px 16px', background: 'white', border: '1px solid var(--border)', borderRadius: 2 }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontWeight: 500, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.3 }}>
                {event.event}
              </div>
              <div style={{ display: 'flex', gap: 20, marginBottom: 8, flexWrap: 'wrap' }}>
                <div style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                  <span style={{ color: 'var(--ink-muted)', fontWeight: 500 }}>Characters: </span>
                  {event.characters}
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
                  <span style={{ color: 'var(--ink-muted)', fontWeight: 500 }}>Source: </span>
                  <span style={{ fontStyle: 'italic' }}>{event.source}</span>
                </div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                {event.significance}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
