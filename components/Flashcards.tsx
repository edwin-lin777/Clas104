"use client";
import { useState } from "react";
import { flashcards } from "@/lib/data";

const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};

export default function Flashcards() {
  const [au, setAu] = useState<number|"all">("all");
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState<{[k:number]:boolean}>({});
  const [mode, setMode] = useState<"single"|"grid">("single");
  const filtered = au==="all" ? flashcards : flashcards.filter(f=>f.unit===au);
  const card = filtered[Math.min(idx, filtered.length-1)];

  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:820}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Active Recall</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Flashcards</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>Click any card to reveal the answer.</p>
      </div>
      <div style={{display:"flex",gap:4,marginBottom:"2rem",flexWrap:"wrap",alignItems:"center"}}>
        {(["all",1,2,3,4] as const).map(u=>(
          <button key={u} onClick={()=>{setAu(u);setIdx(0);setFlipped({});}} className={`btn ${au===u?"btn-primary":"btn-outline"}`} style={{padding:"6px 12px"}}>
            {u==="all"?`All (${flashcards.length})`:`Unit ${u} (${flashcards.filter(f=>f.unit===u).length})`}
          </button>
        ))}
        <div style={{marginLeft:"auto",display:"flex",gap:4}}>
          {(["single","grid"] as const).map(m=>(
            <button key={m} onClick={()=>setMode(m)} className={`btn ${mode===m?"btn-primary":"btn-outline"}`} style={{padding:"5px 12px"}}>
              {m==="single"?"Card view":"Grid view"}
            </button>
          ))}
        </div>
      </div>

      {mode==="single" && card && (
        <div>
          <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
            <div className="progress-bar" style={{flex:1}}>
              <div className="progress-fill" style={{width:`${((idx+1)/filtered.length)*100}%`}} />
            </div>
            <span className="small-caps">{idx+1} / {filtered.length}</span>
          </div>
          <div onClick={()=>setFlipped(p=>({...p,[card.id]:!p[card.id]}))}
            style={{
              cursor:"pointer",minHeight:220,
              background:flipped[card.id]?"var(--parchment2)":"white",
              border:`1px solid ${flipped[card.id]?unitCols[card.unit]:"var(--rule)"}`,
              borderRadius:2,padding:"2.5rem",display:"flex",alignItems:"center",justifyContent:"center",
              textAlign:"center",transition:"all 0.2s",
              borderLeft:`3px solid ${unitCols[card.unit]}`,
            }}>
            <div>
              <div className="small-caps" style={{color:unitCols[card.unit],marginBottom:"1.25rem"}}>
                {flipped[card.id]?"Answer":"Question"} · Unit {card.unit}
              </div>
              <div style={{fontFamily:flipped[card.id]?"var(--serif)":"var(--serif2)",fontSize:flipped[card.id]?17:20,color:"var(--ink)",lineHeight:1.65,fontStyle:flipped[card.id]?"normal":"normal",fontWeight:flipped[card.id]?400:700}}>
                {flipped[card.id]?card.back:card.front}
              </div>
              <div className="small-caps" style={{marginTop:"1.5rem",fontSize:9}}>
                {flipped[card.id]?"Click to see question":"Click to reveal answer"}
              </div>
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:8,marginTop:"1.5rem"}}>
            <button className="btn btn-outline" onClick={()=>{setIdx(Math.max(0,idx-1));setFlipped({});}} style={{padding:"7px 18px"}}>← Prev</button>
            <button className="btn btn-outline" onClick={()=>{setIdx(Math.floor(Math.random()*filtered.length));setFlipped({});}} style={{padding:"7px 18px"}}>Shuffle</button>
            <button className="btn btn-outline" onClick={()=>{setIdx(Math.min(filtered.length-1,idx+1));setFlipped({});}} style={{padding:"7px 18px"}}>Next →</button>
          </div>
        </div>
      )}

      {mode==="grid" && (
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem"}}>
          {filtered.map(c=>{
            const col=unitCols[c.unit];
            return (
              <div key={c.id} onClick={()=>setFlipped(p=>({...p,[c.id]:!p[c.id]}))}
                style={{cursor:"pointer",background:flipped[c.id]?"var(--parchment2)":"white",border:`1px solid ${flipped[c.id]?col:"var(--rule)"}`,borderLeft:`2px solid ${col}`,borderRadius:2,padding:"1rem",minHeight:100,display:"flex",flexDirection:"column",justifyContent:"space-between",transition:"all 0.15s"}}>
                <div className="small-caps" style={{fontSize:8,color:col,marginBottom:6}}>U{c.unit} {flipped[c.id]?"ANS":"Q"}</div>
                <div style={{fontSize:13,color:"var(--ink3)",lineHeight:1.5,flex:1}}>
                  {flipped[c.id]?c.back:c.front}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
