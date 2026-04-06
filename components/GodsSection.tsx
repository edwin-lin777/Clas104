'use client'

import { useState } from 'react'
import { GODS_TABLE } from '@/lib/data'

const COLOR_BADGE: Record<string, { bg: string; color: string }> = {
  gold: { bg: 'var(--gold-pale)', color: '#7a5010' },
  terra: { bg: '#f5eae6', color: 'var(--terracotta)' },
  olive: { bg: '#eef2e8', color: 'var(--olive)' },
  slate: { bg: '#e8ecf0', color: 'var(--slate)' },
}

export default function GodsSection() {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = GODS_TABLE.filter(g =>
    !search || [g.greek, g.roman, g.domain, g.symbols, g.myths]
      .join(' ').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div style={{ width: 28, height: 1, background: 'var(--gold)', marginBottom: 12 }} />
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
          God Reference
        </h1>
        <p style={{ marginTop: 8, color: 'var(--ink-faint)', fontSize: 14 }}>
          17 major deities — Greek names, Roman equivalents, domains, symbols, and key myths.
        </p>
      </div>

      {/* Search */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search gods, domains, or myths…"
        style={{
          width: '100%',
          padding: '10px 14px',
          border: '1px solid var(--border-strong)',
          borderRadius: 2,
          background: 'white',
          fontSize: 14,
          color: 'var(--ink)',
          marginBottom: 20,
          fontFamily: 'DM Sans, sans-serif',
          outline: 'none',
        }}
      />

      {/* Cards grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '110px 110px 1fr',
          gap: 0,
          padding: '8px 16px',
          background: 'var(--parchment-dark)',
          border: '1px solid var(--border-strong)',
          borderRadius: '2px 2px 0 0',
        }}>
          {['Greek / Roman', 'Domain', 'Symbols & Key Myths'].map(h => (
            <div key={h} style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>
              {h}
            </div>
          ))}
        </div>

        {filtered.map((god, i) => {
          const badge = COLOR_BADGE[god.color]
          const isExp = expanded === god.greek
          return (
            <div
              key={god.greek}
              style={{
                border: '1px solid var(--border)',
                borderTop: 'none',
                background: isExp ? 'var(--parchment)' : 'white',
                transition: 'background 0.15s',
                borderRadius: i === filtered.length - 1 ? '0 0 2px 2px' : 0,
              }}
            >
              <button
                onClick={() => setExpanded(isExp ? null : god.greek)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  display: 'grid',
                  gridTemplateColumns: '110px 110px 1fr',
                  gap: 0,
                  alignItems: 'start',
                }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{god.greek}</div>
                  <div style={{
                    display: 'inline-block',
                    marginTop: 3,
                    padding: '1px 7px',
                    fontSize: 10,
                    fontWeight: 500,
                    borderRadius: 1,
                    background: badge.bg,
                    color: badge.color,
                    border: `1px solid ${badge.bg}`,
                  }}>
                    {god.roman}
                  </div>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.5, paddingRight: 12 }}>
                  {god.domain}
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-faint)', lineHeight: 1.5 }}>
                  {isExp ? god.myths : god.symbols}
                </div>
              </button>

              {/* Expanded detail */}
              <div className={`accordion-body${isExp ? ' open' : ''}`}>
                <div style={{ padding: '0 16px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 6, fontWeight: 500 }}>Symbols</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{god.symbols}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--ink-faint)', marginBottom: 6, fontWeight: 500 }}>Key Myths & Connections</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)', lineHeight: 1.6 }}>{god.myths}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--ink-faint)', fontFamily: 'Cormorant Garamond, serif', fontSize: 18 }}>
          No gods match "{search}"
        </div>
      )}
    </div>
  )
}
