"use client";
import { useState } from "react";

type Section = "dashboard"|"stories"|"notes"|"flashcards"|"quiz"|"written"|"heroes"|"sources"|"equivalents"|"cheatsheet";

const GROUPS = [
  { label: "Study", items: [
    { id:"dashboard", label:"Overview" },
    { id:"stories",   label:"Stories & Myths" },
    { id:"notes",     label:"Module Notes" },
  ]},
  { label: "Practice", items: [
    { id:"flashcards", label:"Flashcards" },
    { id:"quiz",       label:"Multiple Choice" },
    { id:"written",    label:"Written Practice" },
  ]},
  { label: "Reference", items: [
    { id:"heroes",      label:"Hero Profiles" },
    { id:"sources",     label:"Ancient Sources" },
    { id:"equivalents", label:"Greek ↔ Roman" },
    { id:"cheatsheet",  label:"Cheat Sheet" },
  ]},
];

export default function Sidebar({ active, onSelect }: { active: Section; onSelect: (s: Section) => void }) {
  const [open, setOpen] = useState(false);

  function select(id: Section) {
    onSelect(id);
    setOpen(false);
  }

  return (
    <>
      {/* Mobile top bar — hidden on desktop via CSS */}
      <div className="mobile-topbar">
        <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
        <div style={{ fontFamily: "var(--serif2)", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>
          CLAS 104
        </div>
        <div style={{ width: 36 }} />
      </div>

      {/* Overlay behind the drawer on mobile */}
      <div className={`sidebar-overlay ${open ? "open" : ""}`} onClick={() => setOpen(false)} />

      <nav className={`sidebar-nav ${open ? "open" : ""}`}>
        {/* Header */}
        <div style={{ padding: "2rem 1.25rem 1.5rem", borderBottom: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm-mid)", marginBottom: 6 }}>
            University of Waterloo
          </div>
          <div style={{ fontFamily: "var(--serif2)", fontSize: 16, fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>
            CLAS 104
          </div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 13, fontStyle: "italic", color: "var(--warm-mid)", marginTop: 2 }}>
            Greco-Roman Mythology
          </div>
        </div>

        {/* Nav */}
        <div style={{ flex: 1, paddingTop: "0.75rem" }}>
          {GROUPS.map(g => (
            <div key={g.label} style={{ marginBottom: "0.25rem" }}>
              <div style={{ padding: "0.5rem 20px 0.25rem", fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--parchment3)" }}>
                {g.label}
              </div>
              {g.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => select(item.id as Section)}
                  className={`nav-item ${active === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ padding: "1rem 1.25rem", borderTop: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--parchment3)", letterSpacing: "0.14em", marginBottom: 6, textTransform: "uppercase" }}>
            Units 1–4 · Complete
          </div>
          <div style={{ height: 2, background: "var(--rule)", borderRadius: 1, overflow: "hidden" }}>
            <div style={{ height: "100%", width: "100%", background: "var(--accent)", borderRadius: 1 }} />
          </div>
        </div>
      </nav>
    </>
  );
}
