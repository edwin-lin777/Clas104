"use client";
import { useState } from "react";
import { writtenPrompts } from "@/lib/data";
const unitCols:Record<number,string>={1:"#5a3e7a",2:"#8b4a00",3:"#8b1a1a",4:"#2d5a3a"};
export default function WrittenPractice() {
  const [au, setAu] = useState<number|"all">("all");
  const [shown, setShown] = useState<{[k:number]:boolean}>({});
  const filtered = au==="all"?writtenPrompts:writtenPrompts.filter(p=>p.unit===au);
  return (
    <div style={{padding:"3rem 3.5rem",maxWidth:840}} className="fade-up">
      <div className="section-header">
        <div className="small-caps" style={{marginBottom:6}}>Paragraph Questions</div>
        <h2 className="display" style={{fontSize:32,marginBottom:"0.5rem"}}>Written Practice</h2>
        <p style={{fontStyle:"italic",color:"var(--warm-mid)",fontSize:16}}>4 of 15 on the exam. Minimum 6–7 sentences each. Click to reveal key points.</p>
      </div>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:"2rem"}}>
        {(["all",1,2,3,4] as const).map(u=>(
          <button key={u} onClick={()=>setAu(u)} className={`btn ${au===u?"btn-primary":"btn-outline"}`} style={{padding:"6px 12px"}}>
            {u==="all"?"All":` Unit ${u}`}
          </button>
        ))}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
        {filtered.map((p,pi)=>{
          const col=unitCols[p.unit]; const isShown=shown[p.id];
          return (
            <div key={p.id} className="card" style={{padding:"1.75rem",borderLeft:`2px solid ${col}`}}>
              <div style={{display:"flex",gap:12,marginBottom:"1rem"}}>
                <span className="small-caps" style={{flexShrink:0,paddingTop:4,color:col,fontSize:9}}>Q{pi+1}</span>
                <p className="display" style={{fontSize:16,color:"var(--ink)",lineHeight:1.65}}>{p.prompt}</p>
              </div>
              <div style={{paddingLeft:28}}>
                <button onClick={()=>setShown(s=>({...s,[p.id]:!s[p.id]}))}
                  className="btn btn-outline" style={{padding:"5px 14px",fontSize:9,marginBottom:isShown?"1rem":0}}>
                  {isShown?"Hide key points":"Show key points"}
                </button>
                {isShown && (
                  <div style={{marginTop:"0.75rem",paddingLeft:"0.75rem",borderLeft:`2px solid ${col}44`}}>
                    <div className="small-caps" style={{color:col,marginBottom:"0.75rem"}}>Points to Cover</div>
                    {p.keyPoints.map((pt,i)=>(
                      <div key={i} style={{display:"flex",gap:10,fontSize:15,color:"var(--ink3)",marginBottom:10,lineHeight:1.65}}>
                        <span style={{color:col,flexShrink:0,paddingTop:4,fontSize:11}}>—</span>{pt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-parchment" style={{padding:"1.75rem 2rem",marginTop:"2rem"}}>
        <div className="small-caps" style={{marginBottom:"1rem"}}>Writing Strategy</div>
        {["Open with a clear thesis — name the myth and define key terms in sentence one","Use specific names, events, and sources — vague claims lose marks","Connect the myth to course themes: fate, hubris, human/divine relationship, etc.","Aim for 6–8 strong sentences — quality over quantity","Close with a broader observation about what the myth reveals about Greek values"].map((t,i)=>(
          <div key={i} style={{display:"flex",gap:12,fontSize:15,color:"var(--ink3)",marginBottom:10}}>
            <span style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--warm-mid)",flexShrink:0,paddingTop:4}}>{i+1}.</span>{t}
          </div>
        ))}
      </div>
    </div>
  );
}
