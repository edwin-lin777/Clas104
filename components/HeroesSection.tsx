'use client'

import { useState } from 'react'
import { HEROES, EXTRA_HEROES, type Hero } from '@/lib/data2'

const ALL_HEROES = [...HEROES, ...EXTRA_HEROES]

const TYPE_LABELS: Record<string, { label: string; bg: string; color: string }> = {
  greek: { label: 'Greek Hero', bg: '#eef2e8', color: 'var(--olive)' },
  roman: { label: 'Roman Hero', bg: '#e8ecf0', color: 'var(--slate)' },
  trojan: { label: 'Trojan Hero', bg: '#f5eae6', color: 'var(--terracotta)' },
}

export default function HeroesSection() {
  const [selected, setSelected] = useState<Hero>(ALL_HEROES[0])
  const [filter, setFilter] = useState<'all' | 'greek' | 'roman' | 'trojan'>('all')

  const filtered = filter === 'all' ? ALL_HEROES : ALL_HEROES.filter(h => h.type === filter)

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          Heroes & Figures
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          10 major heroes with full profiles — parentage, deeds, significance, and death.
        </p>
      </div>

      {/* Filter */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
        {(['all', 'greek', 'trojan'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '5px 14px',
              border: '1px solid var(--border-strong)',
              borderRadius: 20,
              background: filter === f ? 'var(--ink)' : 'white',
              color: filter === f ? 'var(--parchment)' : 'var(--ink-muted)',
              fontSize: 12,
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              textTransform: 'capitalize',
              fontWeight: filter === f ? 500 : 400,
              transition: 'all 0.15s',
            }}
          >
            {f === 'all' ? 'All' : f === 'greek' ? 'Greek Heroes' : 'Trojan Heroes'}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 16, alignItems: 'start' }}>
        {/* Hero list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'sticky', top: 24 }}>
          {filtered.map(hero => {
            const t = TYPE_LABELS[hero.type]
            const isSelected = selected.name === hero.name
            return (
              <button
                key={hero.name}
                onClick={() => setSelected(hero)}
                style={{
                  textAlign: 'left',
                  padding: '10px 12px',
                  border: `1px solid ${isSelected ? 'var(--border-strong)' : 'var(--border)'}`,
                  borderRadius: 2,
                  background: isSelected ? 'white' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: isSelected ? '0 2px 8px rgba(26,21,16,0.07)' : 'none',
                }}
              >
                <div style={{ fontSize: 14, fontWeight: isSelected ? 500 : 400, color: 'var(--ink)', fontFamily: isSelected ? 'Cormorant Garamond, serif' : undefined }}>
                  {hero.name.split(' / ')[0]}
                </div>
                <div style={{ display: 'inline-block', marginTop: 3, padding: '1px 6px', fontSize: 9, fontWeight: 500, borderRadius: 1, background: t.bg, color: t.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {t.label}
                </div>
              </button>
            )
          })}
        </div>

        {/* Hero detail */}
        <div>
          <HeroDetail hero={selected} />
        </div>
      </div>
    </div>
  )
}

function HeroDetail({ hero }: { hero: Hero }) {
  const t = TYPE_LABELS[hero.type]

  return (
    <div style={{ background: 'white', border: '1px solid var(--border-strong)', borderRadius: 2, padding: '24px 28px' }}>
      {/* Header */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
          <span style={{ padding: '2px 8px', fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: 1, background: t.bg, color: t.color }}>
            {t.label}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 500, color: 'var(--ink)', margin: 0, lineHeight: 1.2 }}>
          {hero.name}
        </h2>
        <div style={{ fontSize: 14, color: 'var(--gold)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', marginTop: 4 }}>
          {hero.epithet}
        </div>
      </div>

      <div style={{ width: 28, height: 1, background: 'var(--border-strong)', marginBottom: 20 }} />

      {/* Quick facts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
        <InfoBox label="Parentage" value={hero.parentage} />
        <InfoBox label="Domain" value={hero.domain} />
      </div>

      {/* Key deeds */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 10 }}>
          Key Deeds
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {hero.keyDeeds.map((deed, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>
              <span style={{ flexShrink: 0, width: 16, height: 16, borderRadius: '50%', background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: 'var(--gold)', fontWeight: 500, marginTop: 3 }}>
                {i + 1}
              </span>
              {deed}
            </li>
          ))}
        </ul>
      </div>

      {/* Key myths */}
      <div style={{ marginBottom: 20, padding: '12px 14px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 6 }}>
          Key Texts & Myths
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.7 }}>{hero.keyMyths}</div>
      </div>

      {/* Significance */}
      <div style={{ marginBottom: hero.death ? 20 : 0 }}>
        <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 8 }}>
          Mythological Significance
        </div>
        <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.8, margin: 0 }}>{hero.significance}</p>
      </div>

      {/* Death */}
      {hero.death && (
        <div style={{ marginTop: 16, padding: '12px 14px', background: '#f5eae6', border: '1px solid rgba(155,74,42,0.2)', borderRadius: 2 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--terracotta)', fontWeight: 500, marginBottom: 6 }}>
            Death
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.7 }}>{hero.death}</div>
        </div>
      )}
    </div>
  )
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ padding: '10px 12px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 2 }}>
      <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', fontWeight: 500, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5 }}>{value}</div>
    </div>
  )
}
