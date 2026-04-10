"use client";
import { useState } from "react";
import { moduleNotes } from "@/lib/data";

const unitCols: Record<number,string> = {1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};

export default function ModuleNotes() {
  const [au, setAu] = useState<number|"all">("all");
  const [open, setOpen] = useState<string|null>(null);
  const filtered = au==="all" ? moduleNotes : moduleNotes.filter(m=>m.unit===au);

  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:860}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Study Notes</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Module Notes</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>Key concepts, must-know points, and likely exam questions for every module.</p>
      </div>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:"2rem"}}>
        {(["all",1,2,3,4] as const).map(u=>(
          <button key={u} onClick={()=>setAu(u)} className={`btn ${au===u?"btn-primary":"btn-outline"}`} style={{padding:"6px 14px"}}>
            {u==="all"?"All Units":`Unit ${u}`}
          </button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
        {filtered.map(mod=>{
          const isOpen=open===mod.id;
          const col=unitCols[mod.unit];
          return (
            <div key={mod.id} style={{background:"white",border:`1px solid ${isOpen?`${col}44`:"var(--rule)"}`,borderRadius:2,overflow:"hidden",transition:"border-color 0.2s"}}>
              <button onClick={()=>setOpen(isOpen?null:mod.id)}
                style={{width:"100%",textAlign:"left",background:isOpen?`${col}05`:"transparent",border:"none",padding:"1rem 1.5rem",cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"}}>
                <div style={{display:"flex",alignItems:"center",gap:"1.25rem"}}>
                  <span style={{fontFamily:"var(--mono)",fontSize:9,color:col,letterSpacing:"0.14em",textTransform:"uppercase",flexShrink:0}}>{mod.id.toUpperCase()}</span>
                  <span className="display" style={{fontSize:16,color:isOpen?"var(--ink)":"var(--ink3)"}}>{mod.title}</span>
                </div>
                <span style={{color:"var(--warm-mid)",fontSize:18,lineHeight:1,flexShrink:0}}>{isOpen?"−":"+"}</span>
              </button>
              {isOpen && (
                <div style={{padding:"0 1.5rem 2rem",borderTop:`1px solid ${col}22`}}>
                  <p style={{fontSize:16,lineHeight:1.85,color:"var(--ink3)",paddingTop:"1.25rem",marginBottom:"1.5rem"}}>{mod.summary}</p>
                  {/* Key terms */}
                  <div style={{marginBottom:"1.5rem"}}>
                    <div className="small-caps" style={{color:col,marginBottom:"0.75rem"}}>Key Terms</div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                      {mod.keyTerms.map(t=>(
                        <span key={t} style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--ink3)",background:"var(--parchment2)",border:"1px solid var(--rule)",padding:"2px 9px",borderRadius:1}}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid-2" style={{gap:"2rem"}}>
                    <div>
                      <div className="small-caps" style={{color:col,marginBottom:"0.75rem"}}>Must Know</div>
                      {mod.mustKnow.map((item,i)=>(
                        <div key={i} style={{display:"flex",gap:10,fontSize:15,color:"var(--ink3)",marginBottom:10,lineHeight:1.65}}>
                          <span style={{color:col,flexShrink:0,paddingTop:4,fontSize:11}}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="small-caps" style={{color:col,marginBottom:"0.75rem"}}>Likely Exam Questions</div>
                      {mod.likelyExam.map((q,i)=>(
                        <div key={i} style={{fontSize:14,color:"var(--ink3)",marginBottom:12,paddingLeft:12,borderLeft:`2px solid ${col}44`,fontStyle:"italic",lineHeight:1.65}}>{q}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
