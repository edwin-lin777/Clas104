"use client";
import { greekRoman } from "@/lib/data";
export default function Equivalents() {
  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:820}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Reference</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Greek ↔ Roman Equivalents</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>The gods and heroes under their Greek and Latin names.</p>
      </div>
      <div style={{background:"white",border:"1px solid var(--rule)",borderRadius:2,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 2fr",background:"var(--parchment2)",borderBottom:"1px solid var(--rule)",padding:"0.75rem 1.75rem"}}>
          {["Greek","Roman","Domain"].map(h=><div key={h} className="small-caps" style={{fontSize:9}}>{h}</div>)}
        </div>
        {greekRoman.map((row,i)=>(
          <div key={row.greek} style={{display:"grid",gridTemplateColumns:"1fr 1fr 2fr",padding:"0.75rem 1.75rem",borderBottom:i<greekRoman.length-1?"1px solid var(--rule2)":"none",background:i%2===0?"transparent":"rgba(245,240,232,0.5)"}}>
            <div className="display" style={{fontSize:15,color:"var(--ink)"}}>{row.greek}</div>
            <div style={{fontFamily:"var(--serif2)",fontSize:15,fontWeight:700,color:"var(--accent)"}}>{row.roman}</div>
            <div style={{fontSize:14,color:"var(--warm-mid)"}}>{row.domain}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
