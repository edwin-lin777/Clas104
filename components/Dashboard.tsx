"use client";

export default function Dashboard() {
  const stats = [
    { n: "11", label: "Full Stories", sub: "With section quizzes" },
    { n: "20", label: "Modules", sub: "Units 1–4 complete" },
    { n: "52", label: "Flashcards", sub: "Double-sided" },
    { n: "120+", label: "Quiz Questions", sub: "MC + story quizzes" },
  ];

  const units = [
    { n:1, title:"Foundations", mods:"Modules 1a–1c", desc:"Myth theory, Greek religion, historical context", col:"#5a3e7a" },
    { n:2, title:"The Olympians", mods:"Modules 4a–6b", desc:"Creation, Prometheus, major gods, mystery cults", col:"#8b4a00" },
    { n:3, title:"Sagas & Afterlife", mods:"Modules 7a–9b", desc:"Underworld, Theban saga, Mycenae, Troy", col:"#8b1a1a" },
    { n:4, title:"Heroes", mods:"Modules 10a–12c", desc:"Odysseus, Perseus, Theseus, Heracles", col:"#2d5a3a" },
  ];

  const exam = [
    { label:"Format", value:"60 multiple choice + 4 of 15 paragraph questions" },
    { label:"Paragraphs", value:"Minimum 6–7 sentences each; choose 4 from 15" },
    { label:"Coverage", value:"All four units — use Module Notes for each" },
  ];

  const priorities = [
    "Homer vs. Plato vs. Virgil on the afterlife — comparison essay",
    "Oedipus: fate vs. free will, Oedipus Complex (Freud)",
    "Demeter/Persephone: aetiological myth + Eleusinian Mysteries",
    "Heracles' 12 Labours — all names, order, details",
    "Judgment of Paris → Trojan War causation chain",
    "House of Atreus — generational curse, Oresteia",
    "Oral poetry: dactylic hexameter, formulaic epithets",
    "Achilles: choice of glory, rage, Priam scene",
    "Hubris examples: Niobe, Arachne, Bellerophon, Pentheus",
    "Mythnapping — Oedipus at Colonus and Athens",
  ];

  return (
    <div style={{ padding: "3rem 3.5rem", maxWidth: 900 }} className="fade-up">
      {/* Header */}
      <div className="section-header">
        <div className="small-caps" style={{ marginBottom: "0.75rem" }}>Final Exam Preparation</div>
        <h1 className="display" style={{ fontSize: 36, color: "var(--ink)", marginBottom: "0.5rem" }}>
          Greco-Roman Mythology
        </h1>
        <p style={{ fontStyle: "italic", color: "var(--warm-mid)", fontSize: 18 }}>
          Complete course coverage — Units 1 through 4
        </p>
      </div>

      {/* Stats row */}
      <div className="grid-4" style={{ marginBottom: "2.5rem" }}>
        {stats.map((s, i) => (
          <div key={s.label} className="card" style={{ padding: "1.25rem", animationDelay: `${i*0.07}s` }}>
            <div className="display" style={{ fontSize: 32, color: "var(--accent)", marginBottom: 2 }}>{s.n}</div>
            <div style={{ fontFamily: "var(--serif2)", fontSize: 13, fontWeight: 700, color: "var(--ink)", marginBottom: 2 }}>{s.label}</div>
            <div className="small-caps" style={{ fontSize: 9 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Units */}
      <div style={{ marginBottom: "2.5rem" }}>
        <div className="small-caps" style={{ marginBottom: "1rem" }}>Course Units</div>
        <div className="grid-4">
          {units.map((u, i) => (
            <div key={u.n} className="card" style={{ padding: "1.25rem", borderLeft: `3px solid ${u.col}`, animationDelay: `${i*0.07+0.2}s` }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: u.col, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 6 }}>
                Unit {u.n}
              </div>
              <div className="display" style={{ fontSize: 15, color: "var(--ink)", marginBottom: 4 }}>{u.title}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--warm-mid)", marginBottom: 8, letterSpacing: "0.1em" }}>{u.mods}</div>
              <div style={{ fontSize: 13, color: "var(--ink3)", lineHeight: 1.6 }}>{u.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam info */}
      <div className="card" style={{ padding: "1.75rem 2rem", marginBottom: "2.5rem" }}>
        <div className="small-caps" style={{ marginBottom: "1rem" }}>Exam Format</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {exam.map(e => (
            <div key={e.label} style={{ display: "flex", gap: "1.5rem" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--warm-mid)", width: 90, flexShrink: 0, paddingTop: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}>{e.label}</div>
              <div style={{ fontSize: 15, color: "var(--ink3)" }}>{e.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Priority topics */}
      <div>
        <div className="small-caps" style={{ marginBottom: "1rem" }}>High-Priority Topics</div>
        <div className="grid-2" style={{ gap: "0 2rem" }}>
          {priorities.map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 12, padding: "0.6rem 0", borderBottom: "1px solid var(--rule2)", fontSize: 14, color: "var(--ink3)" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "var(--accent)", flexShrink: 0, paddingTop: 4, letterSpacing: "0.1em" }}>{String(i+1).padStart(2,"0")}</span>
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
