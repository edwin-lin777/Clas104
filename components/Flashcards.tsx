"use client";
import { useState } from "react";
import { flashcards } from "@/lib/data";

const unitCols: Record<number, string> = {
  1: "#5a3e7a",
  2: "#8b4a00",
  3: "#8b1a1a",
  4: "#2d5a3a",
};
const deckCol = "#1a4a6b";
const mcCol = "#4a3a1a";

type Filter = number | "all" | "names" | "mc";

const NAMES_IDS = [95, 96, 97, 98, 99, 124];
const MC_IDS = [
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
  115, 116, 117, 118, 119, 120, 121, 122, 123, 125,
];

export default function Flashcards() {
  const [filter, setFilter] = useState<Filter>("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState<{ [k: number]: boolean }>({});
  const [mode, setMode] = useState<"single" | "grid">("single");

  const filtered =
    filter === "all"
      ? flashcards
      : filter === "names"
        ? flashcards.filter((f) => NAMES_IDS.includes(f.id))
        : filter === "mc"
          ? flashcards.filter((f) => MC_IDS.includes(f.id))
          : flashcards.filter((f) => f.unit === filter);

  const card = filtered[Math.min(idx, filtered.length - 1)];

  const activeCol =
    filter === "names"
      ? deckCol
      : filter === "mc"
        ? mcCol
        : typeof filter === "number"
          ? unitCols[filter]
          : "#555";

  function go(n: Filter) {
    setFilter(n);
    setIdx(0);
    setFlipped({});
  }

  const decks: { label: string; key: Filter; col: string }[] = [
    { label: `All (${flashcards.length})`, key: "all", col: "#555" },
    {
      label: `Unit 1 (${flashcards.filter((f) => f.unit === 1).length})`,
      key: 1,
      col: unitCols[1],
    },
    {
      label: `Unit 2 (${flashcards.filter((f) => f.unit === 2).length})`,
      key: 2,
      col: unitCols[2],
    },
    {
      label: `Unit 3 (${flashcards.filter((f) => f.unit === 3).length})`,
      key: 3,
      col: unitCols[3],
    },
    {
      label: `Unit 4 (${flashcards.filter((f) => f.unit === 4).length})`,
      key: 4,
      col: unitCols[4],
    },
    {
      label: `Greek vs Roman Names (${NAMES_IDS.length})`,
      key: "names",
      col: deckCol,
    },
    {
      label: `MC Prep — Symbols, Parents, Monsters (${MC_IDS.length})`,
      key: "mc",
      col: mcCol,
    },
  ];

  return (
    <div style={{ padding: "3rem 3.5rem", maxWidth: 820 }} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{ marginBottom: 6 }}>
          Active Recall
        </div>
        <h2
          className="display"
          style={{ fontSize: 32, marginBottom: "0.5rem" }}
        >
          Flashcards
        </h2>
        <p
          style={{
            fontStyle: "italic",
            color: "var(--warm-mid)",
            fontSize: 16,
          }}
        >
          Click any card to reveal the answer.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: "2rem",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {decks.map((d) => (
          <button
            key={String(d.key)}
            onClick={() => go(d.key)}
            className="btn"
            style={{
              padding: "6px 12px",
              background: filter === d.key ? d.col : "transparent",
              color: filter === d.key ? "white" : d.col,
              border: `1px solid ${d.col}`,
              borderRadius: 2,
              fontWeight: filter === d.key ? 700 : 400,
              fontSize: 13,
            }}
          >
            {d.label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
          {(["single", "grid"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`btn ${mode === m ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "5px 12px" }}
            >
              {m === "single" ? "Card view" : "Grid view"}
            </button>
          ))}
        </div>
      </div>

      {filter === "names" && (
        <div
          style={{
            background: "#e8f0f7",
            border: `1px solid ${deckCol}`,
            borderRadius: 2,
            padding: "0.75rem 1rem",
            marginBottom: "1.5rem",
            fontSize: 14,
            color: deckCol,
          }}
        >
          <strong>Greek vs Roman Names</strong> — All major deity and hero
          equivalents. Essential for multiple choice.
        </div>
      )}
      {filter === "mc" && (
        <div
          style={{
            background: "#f7f2e8",
            border: `1px solid ${mcCol}`,
            borderRadius: 2,
            padding: "0.75rem 1rem",
            marginBottom: "1.5rem",
            fontSize: 14,
            color: mcCol,
          }}
        >
          <strong>MC Prep</strong> — Symbols, sacred animals, divine parents,
          monsters, epithets, Trojan War figures, underworld geography, hubris,
          metamorphoses, and more.
        </div>
      )}

      {mode === "single" && card && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="progress-bar" style={{ flex: 1 }}>
              <div
                className="progress-fill"
                style={{ width: `${((idx + 1) / filtered.length) * 100}%` }}
              />
            </div>
            <span className="small-caps">
              {idx + 1} / {filtered.length}
            </span>
          </div>
          <div
            onClick={() =>
              setFlipped((p) => ({ ...p, [card.id]: !p[card.id] }))
            }
            style={{
              cursor: "pointer",
              minHeight: 220,
              background: flipped[card.id] ? "var(--parchment2)" : "white",
              border: `1px solid ${flipped[card.id] ? activeCol : "var(--rule)"}`,
              borderRadius: 2,
              padding: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              transition: "all 0.2s",
              borderLeft: `3px solid ${activeCol}`,
            }}
          >
            <div>
              <div
                className="small-caps"
                style={{ color: activeCol, marginBottom: "1.25rem" }}
              >
                {flipped[card.id] ? "Answer" : "Question"} ·{" "}
                {filter === "names"
                  ? "Greek vs Roman"
                  : filter === "mc"
                    ? "MC Prep"
                    : `Unit ${card.unit}`}
              </div>
              <div
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: flipped[card.id] ? 17 : 20,
                  color: "var(--ink)",
                  lineHeight: 1.65,
                  fontWeight: flipped[card.id] ? 400 : 700,
                }}
              >
                {flipped[card.id] ? card.back : card.front}
              </div>
              <div
                className="small-caps"
                style={{ marginTop: "1.5rem", fontSize: 9 }}
              >
                {flipped[card.id]
                  ? "Click to see question"
                  : "Click to reveal answer"}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: "1.5rem",
            }}
          >
            <button
              className="btn btn-outline"
              onClick={() => {
                setIdx(Math.max(0, idx - 1));
                setFlipped({});
              }}
              style={{ padding: "7px 18px" }}
            >
              ← Prev
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                setIdx(Math.floor(Math.random() * filtered.length));
                setFlipped({});
              }}
              style={{ padding: "7px 18px" }}
            >
              Shuffle
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                setIdx(Math.min(filtered.length - 1, idx + 1));
                setFlipped({});
              }}
              style={{ padding: "7px 18px" }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {mode === "grid" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "0.6rem",
          }}
        >
          {filtered.map((c) => {
            const col =
              filter === "names"
                ? deckCol
                : filter === "mc"
                  ? mcCol
                  : unitCols[c.unit];
            return (
              <div
                key={c.id}
                onClick={() => setFlipped((p) => ({ ...p, [c.id]: !p[c.id] }))}
                style={{
                  cursor: "pointer",
                  background: flipped[c.id] ? "var(--parchment2)" : "white",
                  border: `1px solid ${flipped[c.id] ? col : "var(--rule)"}`,
                  borderLeft: `2px solid ${col}`,
                  borderRadius: 2,
                  padding: "1rem",
                  minHeight: 100,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.15s",
                }}
              >
                <div
                  className="small-caps"
                  style={{ fontSize: 8, color: col, marginBottom: 6 }}
                >
                  U{c.unit} {flipped[c.id] ? "ANS" : "Q"}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--ink3)",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {flipped[c.id] ? c.back : c.front}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
