"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import Stories from "@/components/Stories";
import ModuleNotes from "@/components/ModuleNotes";
import Flashcards from "@/components/Flashcards";
import Quiz from "@/components/Quiz";
import WrittenPractice from "@/components/WrittenPractice";
import Heroes from "@/components/Heroes";
import Sources from "@/components/Sources";
import Equivalents from "@/components/Equivalents";
import CheatSheet from "@/components/CheatSheet";

type Section = "dashboard"|"stories"|"notes"|"flashcards"|"quiz"|"written"|"heroes"|"sources"|"equivalents"|"cheatsheet";

export default function Home() {
  const [active, setActive] = useState<Section>("dashboard");
  const render = () => {
    switch(active){
      case "dashboard":   return <Dashboard />;
      case "stories":     return <Stories />;
      case "notes":       return <ModuleNotes />;
      case "flashcards":  return <Flashcards />;
      case "quiz":        return <Quiz />;
      case "written":     return <WrittenPractice />;
      case "heroes":      return <Heroes />;
      case "sources":     return <Sources />;
      case "equivalents": return <Equivalents />;
      case "cheatsheet":  return <CheatSheet />;
    }
  };
  return (
    <div style={{ display:"flex", minHeight:"100vh" }}>
      <Sidebar active={active} onSelect={setActive} />
      <main style={{ flex:1, overflowY:"auto", minHeight:"100vh", background:"var(--parchment)" }}>
        {render()}
      </main>
    </div>
  );
}
